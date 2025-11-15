// assets/js/projects.js
document.addEventListener('DOMContentLoaded', () => {
  const qs  = sel => document.querySelector(sel);
  const qsa = sel => Array.from(document.querySelectorAll(sel));

  const byTopic  = qs('#by-topic');
  const byDate   = qs('#by-date');
  // const summary  = qs('#content-summary');
  const buttons  = qsa('.content-switcher [data-mode]');
  const topicBar = qs('#topic-filters');

  // ---- 1. TAKE AN IMMUTABLE SNAPSHOT OF ALL PROJECTS ----
  const RAW_PROJECTS = qsa('#by-topic .proj').map(node => ({
    topic: node.dataset.topic || 'Other',
    date:  node.dataset.date  || '1970-01-01',
    selected: (node.dataset.selected || 'false') === 'true',
    html: node.outerHTML,
  }));

  // Ensure they are globally sorted newest → oldest
  RAW_PROJECTS.sort((a, b) => b.date.localeCompare(a.date));

  // ---- 2. TOPIC BUTTONS ----
  function buildTopicButtons() {
    const desiredOrder = [
      'Human modeling',
      'Robust planning',
      'Continual adaptation',
      'Others'
    ];

    const topicsSet = new Set(RAW_PROJECTS.map(p => p.topic));
    const topics = desiredOrder.filter(t => topicsSet.has(t))
      .concat([...topicsSet].filter(t => !desiredOrder.includes(t)));

    topicBar.innerHTML = '';

    topics.forEach(topic => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = topic;
      btn.dataset.topic = topic;

      btn.addEventListener('click', () => {
        qsa('#topic-filters button').forEach(b =>
          b.classList.toggle('is-active', b === btn)
        );

        // Show only the chosen topic
        qsa('#by-topic .proj').forEach(pNode => {
          const t = pNode.dataset.topic || 'Other';
          pNode.style.display = (t === topic) ? '' : 'none';
        });

        const count = RAW_PROJECTS.filter(p => p.topic === topic).length;
        // summary.textContent = `Showing ${count} item(s) in topic “${topic}”.`;
      });

      topicBar.appendChild(btn);
    });

    const firstBtn = topicBar.querySelector('button');
    if (firstBtn) firstBtn.click();
  }

  // ---- 3. RENDER MODES ----
  function setMode(mode) {
    // Button aria state
    buttons.forEach(b =>
      b.setAttribute('aria-pressed', String(b.dataset.mode === mode))
    );

    const counts = {
      all: RAW_PROJECTS.length,
      selected: RAW_PROJECTS.filter(p => p.selected).length,
      topics: new Set(RAW_PROJECTS.map(p => p.topic)).size,
    };

    if (mode === 'selected') {
      byDate.style.display   = 'none';
      topicBar.style.display = 'none';
      byTopic.style.display  = '';

      // Rebuild #by-topic with only selected projects
      const selected = RAW_PROJECTS.filter(p => p.selected);
      byTopic.innerHTML = selected.map(p => p.html).join('');

//      summary.textContent =
//        `Showing ${selected.length} selected item(s) of ${counts.all}.`;

    } else if (mode === 'topic') {
      byDate.style.display   = 'none';
      byTopic.style.display  = '';
      topicBar.style.display = 'flex';

      // Rebuild #by-topic with *all* projects, then topic buttons filter
      byTopic.innerHTML = RAW_PROJECTS.map(p => p.html).join('');
      buildTopicButtons();

      // summary gets updated by topic button click

    } else { // mode === 'date'
      byTopic.style.display  = 'none';
      topicBar.style.display = 'none';
      byDate.style.display   = '';
      byDate.innerHTML       = '';

      // Group a fresh copy by year
      const yearMap = new Map();
      RAW_PROJECTS.forEach(p => {
        const year = (p.date || '1970-01-01').slice(0, 4);
        if (!yearMap.has(year)) yearMap.set(year, []);
        yearMap.get(year).push(p);
      });

      // Render groups, newest year first
      [...yearMap.keys()].sort((a, b) => b.localeCompare(a)).forEach(year => {
        const group = document.createElement('div');
        group.className = 'group';

        const h = document.createElement('h3');
        h.textContent = year;
        group.appendChild(h);

        yearMap.get(year).forEach(p => {
          const wrapper = document.createElement('div');
          wrapper.innerHTML = p.html;
          group.appendChild(wrapper.firstElementChild);
        });

        byDate.appendChild(group);
      });

//      summary.textContent =
//        `Showing all ${counts.all} item(s) grouped by year.`;
    }

    // Reflect mode in URL
    const url = new URL(location);
    url.searchParams.set('mode', mode);
    history.replaceState({}, '', url);
  }

  // ---- 4. WIRE MODE BUTTONS & INITIAL MODE ----
  buttons.forEach(b =>
    b.addEventListener('click', () => setMode(b.dataset.mode))
  );

  // Default: show all by date first time user lands on the page
  const initialMode =
    new URL(location).searchParams.get('mode') ?? 'date';
  setMode(initialMode);
});
