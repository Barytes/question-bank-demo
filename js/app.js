(function () {
  const questions = window.QUESTION_BANK || [];
  const state = {
    view: 'bank',
    currentId: questions[0]?.id,
    filter: '',
    attempts: loadAttempts(),
  };

  const views = {
    bank: document.getElementById('view-bank'),
    quiz: document.getElementById('view-quiz'),
    diagnosis: document.getElementById('view-diagnosis'),
    docs: document.getElementById('view-docs'),
  };

  function loadAttempts() {
    try {
      return JSON.parse(localStorage.getItem('pdfQuestionBankAttempts') || '{}');
    } catch {
      return {};
    }
  }

  function saveAttempts() {
    localStorage.setItem('pdfQuestionBankAttempts', JSON.stringify(state.attempts));
  }

  function byId(id) {
    return questions.find((question) => question.id === id) || questions[0];
  }

  function setView(view, id) {
    state.view = view;
    if (id) state.currentId = id;
    document.querySelectorAll('.tab').forEach((button) => {
      button.classList.toggle('active', button.dataset.view === view);
    });
    Object.entries(views).forEach(([key, element]) => {
      element.classList.toggle('active', key === view);
    });
    render();
  }

  function attemptFor(id) {
    return state.attempts[id];
  }

  function isCorrect(question, selected) {
    if (question.type === 'free-response') return Boolean(selected.selfMarkedCorrect);
    const actual = new Set(question.answer);
    const picked = new Set(selected.values || []);
    return actual.size === picked.size && [...actual].every((item) => picked.has(item));
  }

  function renderHeaderMetrics() {
    const attempts = Object.values(state.attempts);
    const done = attempts.length;
    const correct = attempts.filter((attempt) => attempt.correct).length;
    document.getElementById('headerMetrics').innerHTML = `
      <div class="metric"><strong>${questions.length}</strong><span>题目</span></div>
      <div class="metric"><strong>${done}</strong><span>已完成</span></div>
      <div class="metric"><strong>${correct}</strong><span>已做对</span></div>
    `;
  }

  function statusClass(question) {
    const attempt = attemptFor(question.id);
    if (!attempt) return '';
    return attempt.correct ? 'done' : 'wrong';
  }

  function renderBank() {
    const filter = state.filter.trim();
    const filtered = questions.filter((question) => {
      if (!filter) return true;
      const text = [
        question.title,
        question.source.page,
        question.tags.knowledge.join(' '),
        question.tags.cognition.join(' '),
        question.tags.mistakes.join(' '),
      ].join(' ');
      return text.includes(filter);
    });

    views.bank.innerHTML = `
      <div class="panel">
        <div class="panel-head">
          <div>
            <h2>题库</h2>
          </div>
          <div class="toolbar">
            <input class="input" id="filterInput" placeholder="搜索题目" value="${escapeHtml(state.filter)}">
            <button class="btn btn-secondary" id="resetAttempts">清空记录</button>
          </div>
        </div>
        <div class="question-grid">
          ${filtered.map(renderQuestionCard).join('')}
        </div>
      </div>
    `;

    document.getElementById('filterInput').addEventListener('input', (event) => {
      state.filter = event.target.value;
      renderBank();
    });
    document.getElementById('resetAttempts').addEventListener('click', () => {
      state.attempts = {};
      saveAttempts();
      render();
    });
    views.bank.querySelectorAll('[data-open-question]').forEach((button) => {
      button.addEventListener('click', () => setView('quiz', button.dataset.openQuestion));
    });
  }

  function renderQuestionCard(question, index) {
    const attempt = attemptFor(question.id);
    const status = attempt ? (attempt.correct ? '已做对' : '需复习') : '未作答';
    return `
      <article class="question-card ${statusClass(question)}">
        <div class="card-top">
          <div>
            <h3>${index + 1}. ${escapeHtml(question.title)}</h3>
            <div class="meta-line">${question.difficulty} · ${question.type === 'multi' ? '多选' : question.type === 'free-response' ? '解答题' : '单选'}</div>
          </div>
          <span class="badge">${status}</span>
        </div>
        <button class="btn btn-primary" data-open-question="${question.id}">进入做题</button>
      </article>
    `;
  }

  function renderQuiz() {
    const question = byId(state.currentId);
    const attempt = attemptFor(question.id);
    views.quiz.innerHTML = `
      <div class="quiz-layout">
        <aside class="panel question-nav">
          <div class="panel-head">
            <div>
              <h3>题号</h3>
            </div>
          </div>
          <div class="nav-list">
            ${questions.map((item, index) => `
              <button class="nav-button ${item.id === question.id ? 'active' : ''} ${statusClass(item)}" data-jump="${item.id}">${index + 1}</button>
            `).join('')}
          </div>
        </aside>
        <article class="panel quiz-card">
          <div class="source-strip">
            <span class="badge">${question.type === 'multi' ? '多选题' : question.type === 'free-response' ? '解答题' : '单选题'}</span>
          </div>
          <h2>${escapeHtml(question.title)}</h2>
          <img class="question-image" src="${question.questionImage}" alt="${escapeHtml(question.title)}">
          ${question.type === 'free-response' ? renderFreeResponse(question, attempt) : renderChoiceQuestion(question, attempt)}
          ${renderAnswerPanel(question, attempt)}
        </article>
      </div>
    `;

    views.quiz.querySelectorAll('[data-jump]').forEach((button) => {
      button.addEventListener('click', () => setView('quiz', button.dataset.jump));
    });

    if (question.type === 'free-response') bindFreeResponse(question);
    else bindChoiceQuestion(question);
  }

  function renderChoiceQuestion(question, attempt) {
    const selected = new Set(attempt?.values || []);
    return `
      <div class="options" role="group" aria-label="选项">
        ${question.options.map((option) => {
          const classes = ['option'];
          if (selected.has(option.id)) classes.push('selected');
          if (attempt) {
            const correct = question.answer.includes(option.id);
            if (selected.has(option.id) && correct) classes.push('correct');
            if (selected.has(option.id) && !correct) classes.push('wrong');
            if (!selected.has(option.id) && correct) classes.push('missed');
          }
          return `
            <label class="${classes.join(' ')}">
              <input type="${question.type === 'multi' ? 'checkbox' : 'radio'}" name="answer" value="${option.id}" ${selected.has(option.id) ? 'checked' : ''} ${attempt ? 'disabled' : ''}>
              <span class="letter">${option.id}</span>
              <span>${escapeHtml(option.text)}</span>
            </label>
          `;
        }).join('')}
      </div>
      <div class="actions">
        <button class="btn btn-primary" id="submitAnswer" ${attempt ? 'disabled' : ''}>提交答案</button>
        <button class="btn btn-secondary" id="redoQuestion">重新作答</button>
      </div>
    `;
  }

  function renderFreeResponse(question, attempt) {
    return `
      <textarea class="input" id="freeResponseText" rows="5" style="width:100%; padding:12px;" placeholder="这里可以输入自己的解题思路，提交后对照参考解答。">${escapeHtml(attempt?.text || '')}</textarea>
      <div class="actions">
        <button class="btn btn-primary" id="showFreeAnswer" ${attempt ? 'disabled' : ''}>查看参考解答</button>
        <button class="btn btn-green" id="markCorrect">我做对了</button>
        <button class="btn btn-red" id="markWrong">需要复习</button>
        <button class="btn btn-secondary" id="redoQuestion">重新作答</button>
      </div>
    `;
  }

  function renderAnswerPanel(question, attempt) {
    const show = Boolean(attempt);
    const answer = question.type === 'free-response' ? '参考解答见下方步骤' : question.answer.join('、');
    return `
      <section class="answer-panel ${show ? 'show' : ''}" id="answerPanel">
        <div class="answer-banner">
          <strong>${attempt ? (attempt.correct ? '当前记录：正确' : '当前记录：需要复习') : '提交后显示解析'}</strong>
          <div>答案：${escapeHtml(answer)} · ${escapeHtml(question.analysis.summary)}</div>
        </div>
        <div class="answer-body">
          ${question.analysis.steps.map((step, index) => `
            <div class="step">
              <h4>${index + 1}. ${escapeHtml(step.title)}</h4>
              <p>${escapeHtml(step.body)}</p>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  function bindChoiceQuestion(question) {
    views.quiz.querySelectorAll('input[name="answer"]').forEach((input) => {
      input.addEventListener('change', () => renderQuizSelection());
    });
    document.getElementById('submitAnswer').addEventListener('click', () => {
      const values = [...views.quiz.querySelectorAll('input[name="answer"]:checked')].map((input) => input.value);
      if (!values.length) return;
      const selected = { values };
      state.attempts[question.id] = {
        ...selected,
        correct: isCorrect(question, selected),
        submittedAt: new Date().toISOString(),
      };
      saveAttempts();
      render();
    });
    document.getElementById('redoQuestion').addEventListener('click', () => {
      delete state.attempts[question.id];
      saveAttempts();
      render();
    });
  }

  function renderQuizSelection() {
    views.quiz.querySelectorAll('.option').forEach((label) => {
      label.classList.toggle('selected', label.querySelector('input').checked);
    });
  }

  function bindFreeResponse(question) {
    document.getElementById('showFreeAnswer').addEventListener('click', () => {
      state.attempts[question.id] = {
        text: document.getElementById('freeResponseText').value,
        selfMarkedCorrect: false,
        correct: false,
        submittedAt: new Date().toISOString(),
      };
      saveAttempts();
      render();
    });
    document.getElementById('markCorrect').addEventListener('click', () => markFree(question, true));
    document.getElementById('markWrong').addEventListener('click', () => markFree(question, false));
    document.getElementById('redoQuestion').addEventListener('click', () => {
      delete state.attempts[question.id];
      saveAttempts();
      render();
    });
  }

  function markFree(question, correct) {
    state.attempts[question.id] = {
      text: document.getElementById('freeResponseText')?.value || state.attempts[question.id]?.text || '',
      selfMarkedCorrect: correct,
      correct,
      submittedAt: new Date().toISOString(),
    };
    saveAttempts();
    render();
  }

  function computeDiagnosis() {
    const knowledge = {};
    const abilities = {};
    const mistakes = {};
    const attemptedQuestions = questions.filter((question) => state.attempts[question.id]);

    attemptedQuestions.forEach((question) => {
      const attempt = state.attempts[question.id];
      const multiplier = attempt.correct ? 1 : -1;
      Object.entries(question.diagnosis.qMatrix).forEach(([name, weight]) => {
        if (!knowledge[name]) knowledge[name] = { score: 0.55, evidence: 0 };
        knowledge[name].score = clamp(knowledge[name].score + multiplier * 0.14 * weight, 0.08, 0.96);
        knowledge[name].evidence += weight;
      });
      Object.entries(question.diagnosis.abilityLoadings).forEach(([name, weight]) => {
        if (!abilities[name]) abilities[name] = { signal: 0, evidence: 0 };
        abilities[name].signal += multiplier * weight;
        abilities[name].evidence += weight;
      });
      if (!attempt.correct) {
        Object.keys(question.diagnosis.mistakeEvidence).forEach((name) => {
          mistakes[name] = (mistakes[name] || 0) + 1;
        });
      }
    });

    return { attemptedQuestions, knowledge, abilities, mistakes };
  }

  function renderDiagnosis() {
    const result = computeDiagnosis();
    if (!result.attemptedQuestions.length) {
      views.diagnosis.innerHTML = `
        <div class="panel">
          <div class="panel-head">
            <div>
            <h2>学情诊断</h2>
          </div>
          </div>
          <div class="empty">暂无诊断。先进入“做题”完成几道题。</div>
        </div>
      `;
      return;
    }

    const wrong = result.attemptedQuestions.filter((question) => !state.attempts[question.id].correct);
    const recommendations = buildRecommendations(wrong);
    views.diagnosis.innerHTML = `
      <div class="panel">
        <div class="panel-head">
          <div>
            <h2>学情诊断</h2>
          </div>
          <div class="toolbar">
            <span class="badge">已做 ${result.attemptedQuestions.length} / ${questions.length}</span>
            <span class="badge">正确 ${result.attemptedQuestions.length - wrong.length}</span>
          </div>
        </div>
        <div class="diagnosis-grid">
          <section class="diagnosis-card">
            <h3>知识点掌握</h3>
            ${Object.entries(result.knowledge).sort((a, b) => a[1].score - b[1].score).map(([name, item]) => renderKnowledgeRow(name, item)).join('')}
          </section>
          <section class="diagnosis-card">
            <h3>认知能力证据</h3>
            ${Object.entries(result.abilities).sort((a, b) => a[1].signal - b[1].signal).map(([name, item]) => renderAbilityRow(name, item)).join('')}
          </section>
          <section class="diagnosis-card">
            <h3>主要错因</h3>
            ${Object.entries(result.mistakes).length ? Object.entries(result.mistakes).sort((a, b) => b[1] - a[1]).map(([name, count]) => `<div class="diagnosis-row"><strong>${escapeHtml(name)}</strong><span class="meta-line">出现 ${count} 次，建议优先做同错因补练。</span></div>`).join('') : '<p class="meta-line">目前没有错题证据。</p>'}
          </section>
          <section class="diagnosis-card">
            <h3>推荐补练</h3>
            ${recommendations.map((question) => `
              <div class="diagnosis-row">
                <strong>${escapeHtml(question.title)}</strong>
                <span class="meta-line">第 ${question.source.page} 页 · ${question.tags.knowledge[0]}</span>
                <button class="btn btn-secondary" data-open-question="${question.id}">去做这题</button>
              </div>
            `).join('') || '<p class="meta-line">做错题后会出现推荐。</p>'}
          </section>
        </div>
      </div>
    `;
    views.diagnosis.querySelectorAll('[data-open-question]').forEach((button) => {
      button.addEventListener('click', () => setView('quiz', button.dataset.openQuestion));
    });
  }

  function renderKnowledgeRow(name, item) {
    const percent = Math.round(item.score * 100);
    return `
      <div class="diagnosis-row">
        <div><strong>${escapeHtml(name)}</strong> <span class="meta-line">掌握概率 ${percent}% · 有效证据 ${item.evidence.toFixed(1)}</span></div>
        <div class="bar"><i style="width:${percent}%"></i></div>
      </div>
    `;
  }

  function renderAbilityRow(name, item) {
    const enough = item.evidence >= 1.2;
    const normalized = enough ? clamp((item.signal / item.evidence + 1) / 2, 0.05, 0.95) : 0.5;
    const label = enough ? `${Math.round(normalized * 100)}% 倾向` : '证据不足';
    return `
      <div class="diagnosis-row">
        <div><strong>${escapeHtml(name)}</strong> <span class="meta-line">${label} · 证据 ${item.evidence.toFixed(1)}</span></div>
        <div class="bar"><i style="width:${Math.round(normalized * 100)}%"></i></div>
      </div>
    `;
  }

  function buildRecommendations(wrongQuestions) {
    const ids = new Set();
    wrongQuestions.forEach((question) => {
      [...question.recommendations.remediation, ...question.recommendations.similar, ...question.recommendations.advanced].forEach((id) => {
        if (!state.attempts[id]) ids.add(id);
      });
    });
    return [...ids].slice(0, 4).map(byId);
  }

  function renderDocs() {
    views.docs.innerHTML = `
      <div class="panel">
        <div class="panel-head">
          <div>
            <h2>架构与算法文档</h2>
            <p>以下文档面向开发和教研维护人员，完整说明题库架构、PDF 抽取流程、诊断算法和数据结构。</p>
          </div>
        </div>
        <div class="docs-grid docs-index">
          ${renderDocLink('电子题库 MVP 架构文档', '模块划分、数据流、状态管理和升级路径。', 'docs/architecture.html')}
          ${renderDocLink('PDF 抽取 Pipeline 文档', '扫描 PDF 渲染、题区裁切、质量标记和后续自动化。', 'docs/pipeline.html')}
          ${renderDocLink('学情诊断算法文档', 'Q-matrix、能力载荷、错因证据和推荐策略。', 'docs/algorithm.html')}
          ${renderDocLink('题库数据 Schema 文档', '题目字段、标签结构、诊断字段和扩展原则。', 'docs/data-schema.html')}
        </div>
      </div>
    `;
  }

  function renderDocLink(title, description, href) {
    return `
      <a class="doc-card doc-link" href="${href}">
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(description)}</p>
        <span>打开文档</span>
      </a>
    `;
  }

  function render() {
    renderHeaderMetrics();
    if (state.view === 'bank') renderBank();
    if (state.view === 'quiz') renderQuiz();
    if (state.view === 'diagnosis') renderDiagnosis();
    if (state.view === 'docs') renderDocs();
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  document.querySelectorAll('.tab').forEach((button) => {
    button.addEventListener('click', () => setView(button.dataset.view));
  });

  if (window.location.hash === '#docs') {
    state.view = 'docs';
    document.querySelectorAll('.tab').forEach((button) => {
      button.classList.toggle('active', button.dataset.view === 'docs');
    });
    Object.entries(views).forEach(([key, element]) => {
      element.classList.toggle('active', key === 'docs');
    });
  }

  render();
})();
