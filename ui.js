// ============================================================
// ui.js — rendering only. Reads engine state, writes the DOM.
// ============================================================
const UI = (() => {
  const root = document.getElementById("app");
  const snackbarEl = document.getElementById("snackbar");
  let snackbarTimer = null;
  function esc(str) {
    const d = document.createElement("div");
    d.textContent = str == null ? "" : String(str);
    return d.innerHTML;
  }
  function mdLite(str) {
    let s = esc(str);
    s = s.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
    s = s.replace(/\*(.+?)\*/g, "<i>$1</i>");
    return s;
  }
  // Option letters are re-shuffled every session, so a hardcoded "Correct: B
  // and E" written into the stored explanation text can point at the wrong
  // letters once the shuffle happens. Strip any such lead-in and rebuild it
  // fresh from this session's actual q.answers, so it's always in sync with
  // the letters actually highlighted on screen.
  function letterList(letters) {
    const l = letters.slice().sort();
    if (l.length <= 1) return l.join("");
    return l.slice(0, -1).join(", ") + " and " + l[l.length - 1];
  }
  function explanationHtmlFor(q, tag, attrs) {
    if (!q.explanation) return "";
    const stripped = q.explanation.replace(/^\*\*Correct:[^*]*\*\*\.?\s*/i, "");
    const correctLine = `**Correct: ${letterList(q.answers)}.**`;
    return `<${tag} ${attrs || ""}>${mdLite(correctLine + " " + stripped)}</${tag}>`;
  }
  function fmtTime(totalSeconds) {
    const s = Math.max(0, Math.round(totalSeconds));
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${String(sec).padStart(2, "0")}`;
  }
  function showSnackbar(msg) {
    snackbarEl.textContent = msg;
    snackbarEl.classList.add("show");
    clearTimeout(snackbarTimer);
    snackbarTimer = setTimeout(() => snackbarEl.classList.remove("show"), 3200);
  }

  function applyTheme(theme) {
    if (theme) document.documentElement.dataset.theme = theme;
    else delete document.documentElement.dataset.theme;

    // Dynamically sync the OS-level gesture/status bars to match the background perfectly
    const isDark = theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", isDark ? "#131415" : "#FFFFFF");
    }
  }
  function currentAppliedTheme() {
    const explicit = document.documentElement.dataset.theme;
    if (explicit) return explicit;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function initThemeToggle(onToggle) {
    document.getElementById("theme-toggle").addEventListener("click", () => {
      const next = currentAppliedTheme() === "dark" ? "light" : "dark";
      applyTheme(next);
      onToggle(next);
    });
  }
  function setThemeToggleVisible(visible) {
    document.getElementById("theme-toggle").style.display = visible ? "" : "none";
  }

  function showModal(html, wire) {
    const modalRoot = document.getElementById("modal-root");
    modalRoot.innerHTML = `<div class="modal-overlay">${html}</div>`;
    if (wire) wire(modalRoot);
  }
  function hideModal() {
    document.getElementById("modal-root").innerHTML = "";
  }
  function showResumeModal({ index, total, remainingSeconds, timeLimitSeconds }, handlers) {
    const timeNote = timeLimitSeconds == null
      ? "on an unlimited clock"
      : `with ${fmtTime(remainingSeconds)} left`;
    showModal(
      `<div class="modal-card">
         <h2>Keep going?</h2>
         <p>You were on question ${index + 1} of ${total} ${timeNote}. Pick up where you left off, or start fresh.</p>
         <div class="modal-actions">
           <button class="btn btn-filled btn-block" id="resume-yes">Resume session</button>
           <button class="btn btn-tonal btn-block" id="resume-no">Start over</button>
         </div>
       </div>`,
      () => {
        document.getElementById("resume-yes").addEventListener("click", () => { hideModal(); handlers.onResume(); });
        document.getElementById("resume-no").addEventListener("click", () => { hideModal(); handlers.onDiscard(); });
      }
    );
  }

  function updateSetupState({ filteredCount, selected, questionCount }) {
    const ALL_BUCKETS = Array.from(document.querySelectorAll("#source-filter .chip")).map(c => c.dataset.val).filter(v => v !== "all");
    const allOn = ALL_BUCKETS.every(b => selected.has(b));
    
    document.querySelectorAll("#source-filter .chip").forEach(chip => {
      const val = chip.dataset.val;
      const isSel = (val === "all") ? allOn : selected.has(val);
      chip.classList.toggle("selected", isSel);
      chip.setAttribute("aria-checked", isSel);
    });
    
    const activeNotes = [];
    document.querySelectorAll("#source-filter .chip").forEach(c => { if (c.dataset.val !== "all" && selected.has(c.dataset.val)) activeNotes.push(c.dataset.label); });
    
    const comboNoteEl = document.getElementById("combo-note");
    if (allOn) {
      comboNoteEl.textContent = "All sets combined.";
    } else if (activeNotes.length === 1) {
      comboNoteEl.textContent = activeNotes[0];
    } else {
      comboNoteEl.textContent = `Mixing ${activeNotes.length} sets — ${filteredCount} questions in the pool.`;
    }
    
    const qSlider = document.getElementById("q-count-slider");
    qSlider.max = filteredCount;
    qSlider.value = questionCount;
    document.getElementById("q-count-label").textContent = questionCount;
    
    document.querySelectorAll("#q-presets .chip").forEach(chip => {
      if (chip.dataset.val === "all") {
        chip.textContent = `All ${filteredCount}`;
        chip.dataset.realVal = filteredCount;
      } else {
        const num = Number(chip.dataset.val);
        chip.style.display = num <= filteredCount ? "inline-flex" : "none";
      }
    });
    
    syncChips("q-presets", questionCount, filteredCount);
  }

  function renderSetup({ bank, filteredCount, selected, counts, questionCount, timeMinutes, history }, handlers) {
    const presetsQ = [20, 40, 80, 150];
    const presetsT = [15, 30, 60, 90];
    const historyHtml = history && history.length
      ? `<div class="setup-section">
           <div class="eyebrow">Recent sessions</div>
           <div class="history-strip">
             ${history.slice(0, 8).map(h => `
               <div class="history-pill">
                 <b>${h.percentage}%</b>
                 ${h.correct}/${h.total}
               </div>`).join("")}
           </div>
         </div>`
      : "";
    
    const sel = selected || new Set(counts.sets.map((x) => x.val));
    const allOn = counts.sets.every((x) => sel.has(x.val));
    const SOURCE_FILTERS = [{ val: "all", label: "All questions", count: counts.all }].concat(counts.sets);
    
    const isSel = (v) => (v === "all" ? allOn : sel.has(v));
    const activeNotes = SOURCE_FILTERS.filter(f => f.val !== "all" && sel.has(f.val)).map(f => f.label);
    const comboNote = allOn
      ? "All sets combined."
      : `Mixing ${activeNotes.length} sets — ${filteredCount} questions in the pool.`;

    root.innerHTML = `
      <div class="screen" id="screen-setup">
        <h1 class="headline">Ready to practice?</h1>
        <p class="subtext">${bank.length} ITIL 4 questions from IKM past papers. Pick your mode and let's go.</p>
        <div class="setup-section">
          <div class="eyebrow">Question sets <span class="multi-hint">· Pick any mix</span></div>
          <div class="chip-row" id="source-filter">
            ${SOURCE_FILTERS.map(f => `<button class="chip ${isSel(f.val) ? "selected" : ""}" data-val="${f.val}" data-label="${f.label}" role="checkbox" aria-checked="${isSel(f.val)}">${f.label} <span class="chip-count">${f.count}</span></button>`).join("")}
          </div>
          <p class="subtext" id="combo-note" style="font-size:15px; margin-top:14px;">${comboNote}</p>
        </div>
        <div class="setup-section">
          <div class="eyebrow">Number of questions</div>
          <div class="slider-value" id="q-count-label">${questionCount}</div>
          <input type="range" id="q-count-slider" min="1" max="${filteredCount}" value="${questionCount}" />
          <div class="chip-row" id="q-presets">
            ${presetsQ.filter(p => p <= filteredCount).map(p => `<button class="chip" data-val="${p}">${p}</button>`).join("")}
            <button class="chip" data-val="all" data-real-val="${filteredCount}">All ${filteredCount}</button>
          </div>
        </div>
        <div class="setup-section">
          <div class="eyebrow">Time limit</div>
          <div class="slider-value" id="time-label">${timeMinutes == null ? "Unlimited" : timeMinutes + " min"}</div>
          <input type="range" id="time-slider" min="5" max="430" step="5" value="${timeMinutes == null ? 30 : timeMinutes}" ${timeMinutes == null ? "disabled" : ""} />
          <div class="chip-row" id="t-presets">
            ${presetsT.map(p => `<button class="chip" data-val="${p}">${p} min</button>`).join("")}
            <button class="chip" data-val="unlimited">Unlimited</button>
          </div>
        </div>
        ${historyHtml}
        <div style="flex:1"></div>
        <button class="btn btn-filled btn-block" id="start-btn" style="margin-top:32px;">
          Start Session
        </button>
      </div>`;

    const qSlider = document.getElementById("q-count-slider");
    const tSlider = document.getElementById("time-slider");
    const qLabel = document.getElementById("q-count-label");
    const tLabel = document.getElementById("time-label");
    
    syncChips("q-presets", questionCount, filteredCount);
    syncChips("t-presets", timeMinutes == null ? "unlimited" : timeMinutes);

    qSlider.addEventListener("input", () => {
      qLabel.textContent = qSlider.value;
      syncChips("q-presets", Number(qSlider.value), Number(qSlider.max));
      handlers.onQuestionCount(Number(qSlider.value));
    });
    
    tSlider.addEventListener("input", () => {
      tLabel.textContent = `${tSlider.value} min`;
      syncChips("t-presets", Number(tSlider.value));
      handlers.onTimeMinutes(Number(tSlider.value));
    });
    
    document.getElementById("q-presets").addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      const val = btn.dataset.val === "all" ? Number(btn.dataset.realVal) : Number(btn.dataset.val);
      qSlider.value = val;
      qLabel.textContent = val;
      syncChips("q-presets", val, Number(qSlider.max));
      handlers.onQuestionCount(val);
    });
    
    document.getElementById("t-presets").addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      if (btn.dataset.val === "unlimited") {
        tSlider.disabled = true;
        tLabel.textContent = "Unlimited";
        syncChips("t-presets", "unlimited");
        handlers.onTimeMinutes(null);
        return;
      }
      const val = Number(btn.dataset.val);
      tSlider.disabled = false;
      tSlider.value = val;
      tLabel.textContent = `${val} min`;
      syncChips("t-presets", val);
      handlers.onTimeMinutes(val);
    });
    
    document.getElementById("start-btn").addEventListener("click", handlers.onStart);
    document.getElementById("source-filter").addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      handlers.onSourceToggle(btn.dataset.val);
    });
  }

  function syncChips(containerId, val, maxCount) {
    document.querySelectorAll(`#${containerId} .chip`).forEach(c => {
      if (c.dataset.val === "unlimited") {
        c.classList.toggle("selected", val === "unlimited");
      } else if (c.dataset.val === "all") {
        c.classList.toggle("selected", val === maxCount);
      } else {
        c.classList.toggle("selected", Number(c.dataset.val) === val && val !== maxCount);
      }
    });
  }

  function quizShellHtml() {
    return `
      <div class="screen" id="screen-quiz" style="padding-bottom:16px;">
        <div class="quiz-header">
          <button class="pause-btn" id="pause-btn" aria-label="Pause">
            <svg id="pause-icon" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="2"></rect><rect x="14" y="5" width="4" height="14" rx="2"></rect></svg>
          </button>
          <div class="progress-track"><div class="progress-fill" id="progress-fill"><div class="progress-shine"></div></div></div>
          <div class="timer-ring-wrap" id="timer-ring">
            <svg viewBox="0 0 56 56">
              <circle class="track" cx="28" cy="28" r="22"></circle>
              <circle class="fill" id="timer-fill" cx="28" cy="28" r="22" stroke-dasharray="138" stroke-dashoffset="0"></circle>
            </svg>
            <div class="time-label" id="time-label"></div>
          </div>
        </div>
        <div class="q-counter" id="q-counter"></div>
        <div class="q-viewport" id="q-viewport">
          <div class="pause-overlay" id="pause-overlay" hidden>
            <div class="pause-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
            <h3>Quiz Paused</h3>
            <p>Take a breath. Resume when you're ready.</p>
            <button class="btn btn-filled btn-block" style="max-width:260px;" id="resume-btn">Resume</button>
          </div>
        </div>
        <div class="quiz-footer" id="quiz-footer">
          <button class="btn btn-icon" id="prev-btn" aria-label="Previous">‹</button>
          <button class="btn btn-filled" id="next-btn">CHECK</button>
        </div>
      </div>`;
  }

  function questionSlideHtml(session, q, cls) {
    const chosen = Engine.chosenOf(session, q);
    const opts = Object.entries(q.options).map(([letter, text]) => `
      <button class="option ${chosen.includes(letter) ? "selected" : ""}" data-letter="${letter}">
        <span class="letter">${letter}</span>
        <span class="opt-text">${esc(text)}</span>
      </button>`).join("");
      
    // Every question shows exactly one source pill so the reader always knows
    // where it came from. Buckets mirror main.js bucketOf(): anything that
    // isn't generated / LMS / 2024 is a real-options question.
    const sourceTag = q.v4 === "r"
      ? `<span class="y2024-tag">V4 Rewrite</span>`
      : `<span class="real-tag">V4 Aligned</span>`;
      
    const hintHtml = q.hint
      ? `<button class="hint-toggle" id="hint-toggle" type="button">
           <span class="hint-icon">?</span> NEED A HINT?
         </button>
         <div class="hint-panel" id="hint-panel" hidden>${mdLite(q.hint)}</div>`
      : "";

    return `
      <div class="q-slide ${cls}">
        <div class="q-eyebrow">${esc(q.category || "IKM")} ${sourceTag}</div>
        <div class="q-text">${esc(q.question)}</div>
        <div class="q-prompt">Select all that apply</div>
        <div class="options">${opts}</div>
        ${hintHtml}
      </div>`;
  }

  function renderQuiz(session, handlers) {
    root.innerHTML = quizShellHtml();
    renderQuestion(session, handlers, "none");
    wireQuizChrome(session, handlers);
  }

  function wireQuizChrome(session, handlers) {
    document.getElementById("prev-btn").addEventListener("click", handlers.onPrev);
    document.getElementById("next-btn").addEventListener("click", handlers.onNext);
    document.getElementById("pause-btn").addEventListener("click", handlers.onPauseToggle);
    document.getElementById("resume-btn").addEventListener("click", handlers.onPauseToggle);
  }

  function setPaused(session, isPaused) {
    const overlay = document.getElementById("pause-overlay");
    const icon = document.getElementById("pause-icon");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    if (!overlay) return;
    overlay.hidden = !isPaused;
    icon.innerHTML = isPaused
      ? `<polygon points="5 3 19 12 5 21 5 3"></polygon>`
      : `<rect x="6" y="5" width="4" height="14" rx="2"></rect><rect x="14" y="5" width="4" height="14" rx="2"></rect>`;
    document.getElementById("pause-btn").setAttribute("aria-label", isPaused ? "Resume" : "Pause");
    if (prevBtn) prevBtn.disabled = isPaused ? true : !Engine.canGoPrev(session);
    if (nextBtn) nextBtn.disabled = isPaused;
  }

  function renderQuestion(session, handlers, direction) {
    const viewport = document.getElementById("q-viewport");
    const q = Engine.currentQuestion(session);
    const total = session.questions.length;
    document.getElementById("q-counter").textContent = `Question ${session.index + 1} of ${total}`;
    document.getElementById("progress-fill").style.width = `${(session.index / total) * 100}%`;
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    prevBtn.disabled = !Engine.canGoPrev(session);
    nextBtn.textContent = Engine.canGoNext(session) ? "CHECK" : "FINISH";
    
    const oldSlides = Array.from(viewport.querySelectorAll(".q-slide"));
    const enterCls = direction === "back" ? "enter-back" : "enter-fwd";
    const exitCls = direction === "back" ? "exit-back" : "exit-fwd";
    
    const newSlide = document.createElement("div");
    newSlide.innerHTML = questionSlideHtml(session, q, direction === "none" ? "" : enterCls);
    const newSlideEl = newSlide.firstElementChild;
    viewport.appendChild(newSlideEl);
    
    newSlideEl.addEventListener("click", (e) => {
      const opt = e.target.closest(".option");
      if (opt) { handlers.onSelect(opt.dataset.letter); return; }
      const hintBtn = e.target.closest("#hint-toggle");
      if (hintBtn) {
        const panel = newSlideEl.querySelector("#hint-panel");
        if (panel) {
          panel.hidden = !panel.hidden;
          hintBtn.classList.toggle("open", !panel.hidden);
        }
      }
    });
    
    oldSlides.forEach((old) => {
      old.classList.add(exitCls);
      const cleanup = () => { if (old.isConnected) old.remove(); };
      old.addEventListener("animationend", cleanup, { once: true });
      setTimeout(cleanup, 500);
    });
  }

  function showAnswerReveal(session, handlers) {
    const q = Engine.currentQuestion(session);
    const chosen = Engine.chosenOf(session, q);
    const isCorrect = Engine.isCorrect(q, chosen);
    const viewport = document.getElementById("q-viewport");
    const slide = viewport.lastElementChild;
    
    if (slide) {
      slide.querySelectorAll(".option").forEach((el) => {
        const letter = el.dataset.letter;
        el.classList.add("disabled");
        if (q.answers.includes(letter)) el.classList.add("correct");
        else if (chosen.includes(letter)) el.classList.add("incorrect");
      });
    }

    const footer = document.getElementById("quiz-footer");
    if (!footer) return;
    
    const pauseBtn = document.getElementById("pause-btn");
    if (pauseBtn) pauseBtn.disabled = true;

    const themeCls = isCorrect ? "correct-theme" : "incorrect-theme";
    const titleMark = isCorrect ? "✓ Excellent!" : "✕ Incorrect";
    const explanationHtml = explanationHtmlFor(q, "div", 'class="explain-text"');
    
    footer.innerHTML = `
      <div class="reveal-panel-wrapper ${themeCls}">
        <div class="reveal-heading">${titleMark}</div>
        ${explanationHtml}
        <button class="btn btn-filled btn-block" style="background:var(--surface); color:inherit;" id="continue-btn">${Engine.canGoNext(session) ? "CONTINUE" : "SEE RESULTS"}</button>
      </div>`;
      
    document.getElementById("continue-btn").addEventListener("click", handlers.onContinue);
  }

  function restoreQuizFooter(handlers) {
    const pauseBtn = document.getElementById("pause-btn");
    if (pauseBtn) pauseBtn.disabled = false;
    const footer = document.getElementById("quiz-footer");
    if (!footer) return;
    footer.innerHTML = `
      <button class="btn btn-icon" id="prev-btn" aria-label="Previous">‹</button>
      <button class="btn btn-filled" id="next-btn">CHECK</button>`;
    document.getElementById("prev-btn").addEventListener("click", handlers.onPrev);
    document.getElementById("next-btn").addEventListener("click", handlers.onNext);
  }

  function updateOptionSelection(session) {
    const q = Engine.currentQuestion(session);
    const chosen = Engine.chosenOf(session, q);
    const viewport = document.getElementById("q-viewport");
    const slide = viewport.lastElementChild;
    if (!slide) return;
    slide.querySelectorAll(".option").forEach(el => {
      el.classList.toggle("selected", chosen.includes(el.dataset.letter));
    });
  }

  function updateTimer(remainingSeconds, totalSeconds) {
    const ring = document.getElementById("timer-ring");
    const fill = document.getElementById("timer-fill");
    const label = document.getElementById("time-label");
    if (!ring || !fill || !label) return;
    ring.classList.remove("unlimited");
    const frac = totalSeconds > 0 ? remainingSeconds / totalSeconds : 0;
    const circumference = 138;
    fill.style.strokeDashoffset = String(circumference * (1 - frac));
    label.textContent = fmtTime(remainingSeconds);
    ring.classList.toggle("warn", frac <= 0.3 && frac > 0.1);
    ring.classList.toggle("danger", frac <= 0.1);
  }

  function updateTimerUnlimited(elapsedSeconds) {
    const ring = document.getElementById("timer-ring");
    const fill = document.getElementById("timer-fill");
    const label = document.getElementById("time-label");
    if (!ring || !fill || !label) return;
    ring.classList.remove("warn", "danger");
    ring.classList.add("unlimited");
    fill.style.strokeDashoffset = "0";
    label.textContent = fmtTime(elapsedSeconds);
  }

  function renderResults(graded, handlers) {
    const strong = graded.percentage >= 70;
    const circumference = 465;
    const wrongCount = graded.total - graded.correct;
    
    root.innerHTML = `
      <div class="screen" id="screen-results">
        <div class="score-hero">
          <div class="score-ring-wrap">
            <svg viewBox="0 0 168 168">
              <circle class="track" cx="84" cy="84" r="74"></circle>
              <circle class="fill" id="score-fill" cx="84" cy="84" r="74"></circle>
            </svg>
            <div class="score-label">
              <div class="score-pct">${graded.percentage}%</div>
              <div class="score-frac">${graded.correct} / ${graded.total}</div>
            </div>
          </div>
          <span class="score-tag ${strong ? "pass" : "fail"}">${strong ? "Awesome Job!" : "Keep Practicing!"}</span>
        </div>
        <div class="category-panel">
          <div class="eyebrow">Sections to revisit</div>
          ${graded.categoryBreakdown.map(c => categoryRowHtml(c)).join("")}
        </div>
        <div class="chip-row" id="review-filter" style="margin-top:24px;">
          <button class="chip selected" data-filter="all">All ${graded.total}</button>
          <button class="chip" data-filter="wrong">Incorrect ${wrongCount}</button>
        </div>
        <div class="review-list" id="review-list"></div>
        <div class="results-actions">
          <button class="btn btn-filled btn-block" id="retry-btn">START NEW SESSION</button>
        </div>
      </div>`;
      
    renderReviewList(graded, "all");
    document.getElementById("review-filter").addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      document.querySelectorAll("#review-filter .chip").forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
      renderReviewList(graded, chip.dataset.filter);
    });
    document.getElementById("retry-btn").addEventListener("click", handlers.onRetry);
    
    requestAnimationFrame(() => {
      const fill = document.getElementById("score-fill");
      const offset = circumference * (1 - graded.percentage / 100);
      fill.style.strokeDasharray = String(circumference);
      fill.style.strokeDashoffset = String(offset);
      fill.style.stroke = strong ? "var(--success)" : "var(--error)";
    });
  }

  function renderReviewList(graded, filter) {
    const list = document.getElementById("review-list");
    const items = graded.perQuestion.filter(pq => filter === "all" || !pq.isCorrect);
    list.innerHTML = items.map((pq, i) => reviewItemHtml(pq, i)).join("");
    list.querySelectorAll(".review-item").forEach((el) => {
      el.querySelector(".r-summary").addEventListener("click", () => {
        const detail = el.querySelector(".r-detail");
        detail.hidden = !detail.hidden;
      });
    });
  }

  function categoryRowHtml(c) {
    const tier = c.percentage >= 75 ? "high" : c.percentage >= 50 ? "mid" : "low";
    return `
      <div class="category-row">
        <div class="cat-top">
          <span class="cat-name">${esc(c.category)}</span>
          <span class="cat-frac">${c.percentage}%</span>
        </div>
        <div class="category-bar-track">
          <div class="category-bar-fill ${tier}" style="width:${c.percentage}%"></div>
        </div>
      </div>`;
  }

  function reviewItemHtml(pq) {
    const q = pq.question;
    const fmt = (arr) => (arr && arr.length ? arr.map((l) => l + ". " + esc(q.options[l])).join("; ") : null);
    const optionsHtml = Object.entries(q.options).map(([letter, text]) => {
      let cls = "";
      if (q.answers.includes(letter)) cls = "correct";
      else if (pq.chosen.includes(letter)) cls = "incorrect";
      return `<div class="option disabled ${cls}">
        <span class="letter">${letter}</span>
        <span class="opt-text">${esc(text)}</span>
      </div>`;
    }).join("");
    return `
      <div class="review-item ${pq.isCorrect ? "" : "wrong"}">
        <div class="r-summary" style="cursor:pointer;">
          <div class="r-q">${pq.isCorrect ? "✓" : "✕"} ${esc(q.question)}</div>
          ${pq.isCorrect
            ? `<div class="r-row">Your answer: <b>${fmt(pq.chosen)}</b></div>`
            : `<div class="r-row your-wrong">Your answer: <b>${fmt(pq.chosen) || "Skipped"}</b></div>
               <div class="r-row correct">Correct answer: <b>${fmt(q.answers)}</b></div>`
          }
        </div>
        <div class="r-detail" ${pq.isCorrect ? "hidden" : ""}>
          <div class="options" style="margin-top:16px;">${optionsHtml}</div>
          ${explanationHtmlFor(q, "p", 'class="explain-text" style="margin-top:16px;"')}
        </div>
      </div>`;
  }

  return {
    renderSetup, updateSetupState, renderQuiz, renderQuestion, showAnswerReveal, restoreQuizFooter,
    updateOptionSelection, updateTimer, updateTimerUnlimited, renderResults,
    showSnackbar, fmtTime, applyTheme, currentAppliedTheme, initThemeToggle,
    setThemeToggleVisible, showResumeModal, hideModal, setPaused,
  };
})();