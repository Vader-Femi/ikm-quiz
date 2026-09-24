// ============================================================
// engine.js — quiz state & logic. No DOM code lives here.
// Questions may have several correct answers (`answers` array);
// a question is correct only on an exact match.
// ============================================================
const Engine = (() => {
  const LETTERS = ["A", "B", "C", "D", "E", "F"];
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  // Pick `count` random questions from the bank, and re-shuffle each
  // question's option order so the answer letter isn't always in the
  // same position as the source material.
  function buildQuestionSet(bank, count) {
    const picked = shuffle(bank).slice(0, Math.min(count, bank.length));
    return picked.map((q, idx) => {
      const letters = Object.keys(q.options);
      const entries = letters.map((l) => [l, q.options[l]]);
      const shuffled = shuffle(entries);
      const options = {};
      const origAns = q.answers || [q.answer];
      const newAnswers = [];
      shuffled.forEach(([origLetter, text], i) => {
        const letter = LETTERS[i];
        options[letter] = text;
        if (origAns.includes(origLetter)) newAnswers.push(letter);
      });
      return {
        uid: `${q.id}-${idx}`,
        sourceId: q.id,
        question: q.question,
        options,
        answers: newAnswers.sort(),
        multi: newAnswers.length > 1,
        v4: q.v4 || null,
        category: q.category,
        explanation: q.explanation,
        hint: q.hint,
        source: q.source,
        flag: q.flag || null,
      };
    });
  }
  function createSession({ bank, questionCount, timeMinutes }) {
    const questions = buildQuestionSet(bank, questionCount);
    return {
      questions,
      index: 0,
      answers: {}, // uid -> chosen letter
      timeLimitSeconds: timeMinutes == null ? null : Math.round(timeMinutes * 60),
      startedAt: Date.now(),
      totalPausedMs: 0,
      pausedAt: null,
      submitted: false,
    };
  }
  function restoreSession(snapshot) {
    if (snapshot.timeLimitSeconds == null) {
      const elapsed = Math.max(0, snapshot.elapsedSeconds || 0);
      return {
        questions: snapshot.questions,
        index: snapshot.index,
        answers: snapshot.answers || {},
        timeLimitSeconds: null,
        startedAt: Date.now() - elapsed * 1000,
        totalPausedMs: 0,
        pausedAt: null,
        submitted: false,
      };
    }
    const remaining = Math.max(0, snapshot.remainingSeconds);
    return {
      questions: snapshot.questions,
      index: snapshot.index,
      answers: snapshot.answers || {},
      timeLimitSeconds: snapshot.timeLimitSeconds,
      startedAt: Date.now() - (snapshot.timeLimitSeconds - remaining) * 1000,
      totalPausedMs: 0,
      pausedAt: null,
      submitted: false,
    };
  }
  function pause(session) {
    if (session.pausedAt) return;
    session.pausedAt = Date.now();
  }
  function resume(session) {
    if (!session.pausedAt) return;
    session.totalPausedMs += Date.now() - session.pausedAt;
    session.pausedAt = null;
  }
  function isPaused(session) {
    return !!session.pausedAt;
  }
  function currentQuestion(session) {
    return session.questions[session.index];
  }
  function chosenOf(session, q) {
    const c = session.answers[q.uid];
    return Array.isArray(c) ? c : c ? [c] : [];
  }
  // Exact match only: every correct option chosen, nothing extra.
  function isCorrect(q, chosen) {
    return (chosen || []).slice().sort().join("") === q.answers.slice().sort().join("");
  }
  function selectAnswer(session, letter) {
    const q = currentQuestion(session);
    const cur = chosenOf(session, q);
    let next;
    if (!q.multi) next = [letter];
    else next = cur.includes(letter) ? cur.filter((l) => l !== letter) : cur.concat(letter).sort();
    if (next.length) session.answers[q.uid] = next;
    else delete session.answers[q.uid];
  }
  function canGoNext(session) {
    return session.index < session.questions.length - 1;
  }
  function canGoPrev(session) {
    return session.index > 0;
  }
  function goNext(session) {
    if (canGoNext(session)) session.index += 1;
  }
  function goPrev(session) {
    if (canGoPrev(session)) session.index -= 1;
  }
  function elapsedSeconds(session) {
    const pausedMs = (session.totalPausedMs || 0) + (session.pausedAt ? Date.now() - session.pausedAt : 0);
    return (Date.now() - session.startedAt - pausedMs) / 1000;
  }
  // Returns null when the session has no time limit (unlimited mode).
  function remainingSeconds(session) {
    if (session.timeLimitSeconds == null) return null;
    return Math.max(0, session.timeLimitSeconds - elapsedSeconds(session));
  }
  function isTimeUp(session) {
    if (session.timeLimitSeconds == null) return false;
    return remainingSeconds(session) <= 0;
  }
  function answeredCount(session) {
    return Object.keys(session.answers).length;
  }
  function grade(session) {
    const total = session.questions.length;
    let correct = 0;
    const perQuestion = session.questions.map((q) => {
      const chosen = chosenOf(session, q);
      const ok = isCorrect(q, chosen);
      if (ok) correct += 1;
      return { question: q, chosen, isCorrect: ok };
    });
    const percentage = total === 0 ? 0 : Math.round((correct / total) * 100);
    const byCategory = {};
    perQuestion.forEach(({ question, isCorrect }) => {
      const cat = question.category || "IKM";
      if (!byCategory[cat]) byCategory[cat] = { total: 0, correct: 0 };
      byCategory[cat].total += 1;
      if (isCorrect) byCategory[cat].correct += 1;
    });
    const categoryBreakdown = Object.entries(byCategory)
      .map(([category, s]) => ({ category, ...s, percentage: Math.round((s.correct / s.total) * 100) }))
      .sort((a, b) => a.percentage - b.percentage);
    return {
      total,
      correct,
      percentage,
      timeTakenSeconds: session.timeLimitSeconds == null
        ? elapsedSeconds(session)
        : Math.min(session.timeLimitSeconds, elapsedSeconds(session)),
      perQuestion,
      categoryBreakdown,
    };
  }
  return {
    LETTERS,
    buildQuestionSet,
    createSession,
    restoreSession,
    pause,
    resume,
    isPaused,
    currentQuestion,
    selectAnswer,
    chosenOf,
    isCorrect,
    canGoNext,
    canGoPrev,
    goNext,
    goPrev,
    elapsedSeconds,
    remainingSeconds,
    isTimeUp,
    answeredCount,
    grade,
  };
})();
