document.addEventListener('DOMContentLoaded', function () {
  function qs(sel)  { return document.querySelector(sel); }
  function qsa(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  var byTopic  = qs('#by-topic');
  var byDate   = qs('#by-date');
  var summary  = qs('#content-summary');
  var buttons  = qsa('.content-switcher [data-mode]');
  var topicBar = qs('#topic-filters');

  // ---------- "More authors" one-way reveal ----------
  document.addEventListener('click', function (e) {
    var t = e.target || e.srcElement;

    // climb up to find <a class="more-authors">
    while (t && t !== document &&
           !(t.tagName === 'A' && t.classList.contains('more-authors'))) {
      t = t.parentNode;
    }
    if (!t || t === document) return;

    e.preventDefault();
    var id   = t.getAttribute('data-target');
    var rest = id && document.getElementById(id);
    if (!rest) return;

    rest.classList.remove('is-hidden');
    t.setAttribute('aria-expanded', 'true');
    if (t.parentNode) t.parentNode.removeChild(t);
  });

  // ---------- Helpers ----------
  function readProjects() {
    var items = [];
    qsa('#by-topic .proj').forEach(function (node) {
      items.push({
        node: node,
        topic: node.getAttribute('data-topic') || 'Others',
        date:  node.getAttribute('data-date')  || '1970-01-01',
        selected: (node.getAttribute('data-selected') || 'false') === 'true'
      });
    });
    return items;
  }

  function buildTopicButtons(items) {
    topicBar.innerHTML = '';

    var desiredOrder = ['Human modeling', 'Robust planning',
                        'Continual adaptation', 'Others'];

    var topicsSet = {};
    items.forEach(function (i) { topicsSet[i.topic] = true; });

    var topics = [];
    desiredOrder.forEach(function (t) {
      if (topicsSet[t]) topics.push(t);
    });
    for (var t in topicsSet) {
      if (topicsSet.hasOwnProperty(t) && desiredOrder.indexOf(t) === -1) {
        topics.push(t);
      }
    }

    topics.forEach(function (topic) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = topic;
      btn.setAttribute('data-topic', topic);

      btn.addEventListener('click', function () {
        qsa('#topic-filters button').forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
        });

        var count = 0;
        items.forEach(function (i) {
          if (i.topic === topic) {
            i.node.style.display = '';
            count += 1;
          } else {
            i.node.style.display = 'none';
          }
        });

        summary.textContent =
          'Showing ' + count + ' item(s) in topic "' + topic + '".';
      });

      topicBar.appendChild(btn);
    });

    var firstBtn = topicBar.querySelector('button');
    if (firstBtn) firstBtn.click();
  }

  function setMode(mode) {
    var items = readProjects();

    buttons.forEach(function (b) {
      var pressed = (b.getAttribute('data-mode') === mode) ? 'true' : 'false';
      b.setAttribute('aria-pressed', pressed);
    });

    var total         = items.length;
    var selectedCount = items.filter(function (i) { return i.selected; }).length;
    var topicsSet     = {};
    items.forEach(function (i) { topicsSet[i.topic] = true; });

    if (mode === 'selected') {
      byDate.style.display  = 'none';
      byTopic.style.display = '';
      topicBar.style.display = 'none';

      items.forEach(function (i) {
        i.node.style.display = i.selected ? '' : 'none';
      });

      summary.textContent =
        'Showing ' + selectedCount + ' selected item(s) of ' + total + '.';

    } else if (mode === 'topic') {
      byDate.style.display  = 'none';
      byTopic.style.display = '';
      topicBar.style.display = 'flex';

      items.forEach(function (i) { i.node.style.display = ''; });
      buildTopicButtons(items);

    } else { // mode === 'date'
      byTopic.style.display = 'none';
      byDate.style.display  = '';
      topicBar.style.display = 'none';
      byDate.innerHTML = '';

      var sorted = items.slice().sort(function (a, b) {
        return b.date.localeCompare(a.date) * -1; // newest first
      });

      var yearMap = {};
      sorted.forEach(function (i) {
        var year = (i.date || '1970-01-01').slice(0, 4);
        if (!yearMap[year]) yearMap[year] = [];
        yearMap[year].push(i);
      });

      Object.keys(yearMap).sort(function (a, b) {
        return b.localeCompare(a);
      }).forEach(function (year) {
        var g = document.createElement('div');
        g.className = 'group';

        var h = document.createElement('h3');
        h.textContent = year;
        g.appendChild(h);

        yearMap[year].forEach(function (i) {
          g.appendChild(i.node.cloneNode(true));
        });

        byDate.appendChild(g);
      });

      summary.textContent =
        'Showing all ' + total + ' item(s) grouped by year.';
    }

    // optional URL sync (ignore if URL unsupported)
    if (typeof URL === 'function') {
      var url = new URL(window.location.href);
      url.searchParams.set('mode', mode);
      window.history.replaceState({}, '', url);
    }
  }

  // Wire up buttons and default mode
  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      setMode(b.getAttribute('data-mode'));
    });
  });

  // Default: show all by date
  setMode('date');
});

