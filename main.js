// ============================================================
// main.js — glue. Owns top-level app state, the timer loop,
// pause/resume, session persistence, and keyboard shortcuts.
// ============================================================
(function () {
  const bank = window.QUESTION_BANK || [];
  const SAVE_INTERVAL_MS = 2000;
  function bucketOf(q) {
    return q.set || "set1";
  }
  const ALL_BUCKETS = Array.from(new Set(bank.map(bucketOf))).sort();
  const setLabel = (b) => "Set " + b.replace(/\D/g, "");
  const state = {
    questionCount: Math.min(40, bank.length),
    timeMinutes: 30,
    sourceFilters: new Set(ALL_BUCKETS),
    session: null,
    history: [],
    timerHandle: null,
    screen: "setup",
    lastSaveAt: 0,
    revealing: false,
  };
  function filteredBank() {
    const sel = state.sourceFilters;
    if (sel.size === 0) return [];
    return bank.filter((q) => sel.has(bucketOf(q)));
  }
  function stopTimer() {
    if (state.timerHandle) {
      clearInterval(state.timerHandle);
      state.timerHandle = null;
    }
  }
  function persistActiveSession(force) {
    if (!state.session || state.session.submitted) return;
    const now = Date.now();
    if (!force && now - state.lastSaveAt < SAVE_INTERVAL_MS) return;
    state.lastSaveAt = now;
    Storage.saveActiveSession(state.session);
  }
  function startTimer() {
    stopTimer();
    state.timerHandle = setInterval(() => {
      const remaining = Engine.remainingSeconds(state.session);
      if (remaining === null) {
        UI.updateTimerUnlimited(Engine.elapsedSeconds(state.session));
      } else {
        UI.updateTimer(remaining, state.session.timeLimitSeconds);
      }
      persistActiveSession(false);
      if (Engine.isTimeUp(state.session)) {
        finishQuiz({ auto: true });
      }
    }, 250);
  }
  function goToSetup() {
    stopTimer();
    state.session = null;
    state.screen = "setup";
    state.revealing = false;
    UI.setThemeToggleVisible(true);
    const fBank = filteredBank();
    if (state.questionCount > fBank.length) state.questionCount = fBank.length;
    if (state.questionCount < 1 && fBank.length >= 1) state.questionCount = 1;
    
    UI.renderSetup(
      {
        bank,
        filteredCount: fBank.length,
        selected: state.sourceFilters,
        counts: {
          all: bank.length,
          sets: ALL_BUCKETS.map((b) => ({ val: b, label: setLabel(b), count: bank.filter((q) => bucketOf(q) === b).length })),
        },
        questionCount: state.questionCount,
        timeMinutes: state.timeMinutes,
        history: state.history,
      },
      {
        onQuestionCount: (v) => (state.questionCount = v),
        onTimeMinutes: (v) => (state.timeMinutes = v),
        onSourceToggle: (v) => {
          const sel = state.sourceFilters;
          if (v === "all") {
            ALL_BUCKETS.forEach((b) => sel.add(b));
          } else if (sel.has(v)) {
            if (sel.size > 1) sel.delete(v);
          } else {
            sel.add(v);
          }
          
          const newBank = filteredBank();
          if (state.questionCount > newBank.length) state.questionCount = newBank.length;
          if (state.questionCount < 1 && newBank.length >= 1) state.questionCount = 1;
          
          UI.updateSetupState({
            filteredCount: newBank.length,
            selected: state.sourceFilters,
            questionCount: state.questionCount
          });
        },
        onStart: startQuiz,
      }
    );
  }
  function startQuiz() {
    const fBank = filteredBank();
    if (fBank.length === 0) {
      UI.showSnackbar("No questions match that filter.");
      return;
    }
    state.session = Engine.createSession({
      bank: fBank,
      questionCount: state.questionCount,
      timeMinutes: state.timeMinutes,
    });
    enterQuizScreen();
  }
  function enterQuizScreen() {
    state.screen = "quiz";
    // Theme toggle remains visible during the quiz
    UI.renderQuiz(state.session, quizHandlers);
    const remaining = Engine.remainingSeconds(state.session);
    if (remaining === null) UI.updateTimerUnlimited(Engine.elapsedSeconds(state.session));
    else UI.updateTimer(remaining, state.session.timeLimitSeconds);
    startTimer();
  }
  const quizHandlers = {
    onSelect: (letter) => {
      if (Engine.isPaused(state.session)) return;
      Engine.selectAnswer(state.session, letter);
      UI.updateOptionSelection(state.session);
      persistActiveSession(true);
    },
    onNext: () => {
      if (transitioning || Engine.isPaused(state.session)) return;
      revealAnswer();
    },
    onContinue: () => {
      if (transitioning) return;
      state.revealing = false;
      Engine.resume(state.session);
      if (Engine.canGoNext(state.session)) {
        transitioning = true;
        Engine.goNext(state.session);
        UI.restoreQuizFooter(quizHandlers);
        UI.renderQuestion(state.session, quizHandlers, "fwd");
        persistActiveSession(true);
        setTimeout(() => { transitioning = false; }, 450);
      } else {
        finishQuiz({ auto: false });
      }
    },
    onPrev: () => {
      if (transitioning || Engine.isPaused(state.session)) return;
      if (Engine.canGoPrev(state.session)) {
        transitioning = true;
        Engine.goPrev(state.session);
        UI.renderQuestion(state.session, quizHandlers, "back");
        persistActiveSession(true);
        setTimeout(() => { transitioning = false; }, 450);
      }
    },
    onPauseToggle: () => {
      if (state.revealing) return;
      if (Engine.isPaused(state.session)) {
        Engine.resume(state.session);
      } else {
        Engine.pause(state.session);
      }
      UI.setPaused(state.session, Engine.isPaused(state.session));
      persistActiveSession(true);
    },
  };
  let transitioning = false;
  function revealAnswer() {
    state.revealing = true;
    Engine.pause(state.session);
    UI.showAnswerReveal(state.session, quizHandlers);
    persistActiveSession(true);
  }
  async function finishQuiz({ auto }) {
    if (!state.session || state.session.submitted) return;
    state.session.submitted = true;
    state.revealing = false;
    stopTimer();
    Storage.clearActiveSession();
    const graded = Engine.grade(state.session);
    const entry = { date: Date.now(), correct: graded.correct, total: graded.total, percentage: graded.percentage };
    state.history.unshift(entry);
    Storage.pushHistory(entry);
    state.screen = "results";
    UI.setThemeToggleVisible(true);
    UI.renderResults(graded, { onRetry: goToSetup });
    if (auto) UI.showSnackbar("Time's up — your answers were submitted automatically.");
  }
  function maybeOfferResume() {
    const snap = Storage.loadActiveSession();
    if (!snap || !snap.questions || !snap.questions.length) return;
    UI.showResumeModal(
      { index: snap.index, total: snap.questions.length, remainingSeconds: snap.remainingSeconds, timeLimitSeconds: snap.timeLimitSeconds },
      {
        onResume: () => {
          state.session = Engine.restoreSession(snap);
          enterQuizScreen();
        },
        onDiscard: () => {
          Storage.clearActiveSession();
        },
      }
    );
  }
  function initKeyboardShortcuts() {
    document.addEventListener("keydown", (e) => {
      if (state.screen !== "quiz" || !state.session) return;
      if (state.revealing) {
        if (e.key === "Enter") quizHandlers.onContinue();
        return;
      }
      if (Engine.isPaused(state.session)) return;
      const key = e.key.toUpperCase();
      if (["A", "B", "C", "D", "E", "F"].includes(key)) {
        const q = Engine.currentQuestion(state.session);
        if (q.options[key] != null) quizHandlers.onSelect(key);
      } else if (e.key === "Enter" || e.key === "ArrowRight") {
        quizHandlers.onNext();
      } else if (e.key === "ArrowLeft") {
        quizHandlers.onPrev();
      }
    });
  }
  function init() {
    UI.applyTheme(Storage.getTheme());
    UI.initThemeToggle((theme) => Storage.setTheme(theme));
    state.history = Storage.loadHistory();
    goToSetup();
    maybeOfferResume();
    initKeyboardShortcuts();
  }
  document.addEventListener("DOMContentLoaded", init);
})();