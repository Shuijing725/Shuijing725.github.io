<!-- Controls -->
<div class="content-switcher" role="toolbar" aria-label="Content view">
  <button type="button" data-mode="selected" aria-pressed="true">Show selected</button>
  <button type="button" data-mode="date" aria-pressed="false">Show all by date</button>
  <button type="button" data-mode="topic" aria-pressed="false">Show all by topic</button>
</div>
<div id="content-summary" style="margin:.25rem 0 1rem;color:#6b7280;"></div>

<!-- Topic (original order) container -->
<div id="by-topic">
  <!-- Wrap each existing section in a <section class="proj"> with metadata -->
  
  <section class="proj" data-topic="Social Crowd Navigation" data-date="2025-03-01" data-selected="true">
  
  ## Social Crowd Navigation
  Many crowd navigation methods are often short-sighted and prone to the freezing robot problem. 
  To tackle these problems, we propose a novel reinforcement learning planner that reasons about spatial and temporal relationships between the robot and the crowd. 
  In addition, we incorporate human trajectory prediction into the planner to increase safety and social-awareness of the robot.   

  Relevant papers:  
  - [HEIGHT: Heterogeneous Interaction Graph Transformer for Robot Navigation in Crowded and Constrained Environments](https://sites.google.com/view/crowdnav-height/home), under review.
  - [Intention Aware Robot Crowd Navigation with Attention-Based Interaction Graph](https://sites.google.com/view/intention-aware-crowdnav/home), ICRA 2023.
  - [Decentralized Structural-RNN for Robot Crowd Navigation with Deep Reinforcement Learning](https://sites.google.com/view/crowdnav-ds-rnn/home), ICRA 2021.
  - [Occlusion-Aware Crowd Navigation Using People as Sensors](https://arxiv.org/abs/2210.00552), ICRA 2023.  

  <img src="/images/crowdnav3.gif" width="400" height = "300" hspace="20" />  <img src="/images/socialZoneGraph.png" width="400" height = "300" />  
  </section>

  <section class="proj" data-topic="Autonomous Driving" data-date="2025-02-01" data-selected="false">
  
  ## Autonomous Driving
  Understanding the interactions and behaviors of surrounding drivers is essential for autonomous vehicles (AV).
  To this end, we propose novel networks to detect the abnormal drivers and predict driving styles in an unsupervised fashion, which improves navigation of AV.
  Besides this, we also build realistic multi-agent traffic simulations.  

  Relevant papers:  
  - [Learning to Navigate Intersections with Unsupervised Driver Trait Inference](https://sites.google.com/view/vae-trait-inference/home), ICRA 2022.
  - [Structural Attention-Based Recurrent Variational Autoencoder for Highway Vehicle Anomaly Detection](https://sites.google.com/illinois.edu/saber-vae), AAMAS 2023.
  - [Combining Model-Based Controllers and Generative Adversarial Imitation Learning for Traffic Simulation](https://ieeexplore.ieee.org/abstract/document/9922261), ITSC 2022.  

  <img src="/images/TraitVAE.gif" width="400" height = "300" /> <img src="/images/SaberVAE_off_road_traj.gif" width="400" height = "300" />
  </section>

  <!-- Do the same wrapping for your other sections:
       Instruction Following Robot & Visual-Language Grounding
       Manipulation
       Machine Learning
       Give each a data-date (YYYY-MM-DD) and set data-selected="true" only for the ones you want in “Show selected”. -->
</div>

<!-- Date-sorted container (filled by JS) -->
<div id="by-date" style="display:none;"></div>

<style>
  .content-switcher{display:flex;gap:.5rem;flex-wrap:wrap;margin:.75rem 0;}
  .content-switcher button{
    border:1px solid #d1d5db;background:#fff;padding:.4rem .7rem;border-radius:.6rem;cursor:pointer;font-weight:600;
  }
  .content-switcher button[aria-pressed="true"]{background:#2563eb;border-color:#2563eb;color:#fff;}
  .proj{margin:1rem 0;padding:.75rem 1rem;border:1px solid #e5e7eb;border-radius:.75rem;}
  .group{margin:1rem 0;}
  .group h3{margin:.5rem 0;border-bottom:1px solid #e5e7eb;padding-bottom:.25rem;font-size:1rem;}
</style>

<script>
(function(){
  const qs = sel => document.querySelector(sel);
  const qsa = sel => Array.from(document.querySelectorAll(sel));
  const byTopic = qs('#by-topic');
  const byDate = qs('#by-date');
  const summary = qs('#content-summary');
  const buttons = qsa('.content-switcher [data-mode]');
  const parseDate = s => new Date(s + 'T00:00:00');

  // Read projects from the topic container
  function readProjects(){
    return qsa('#by-topic .proj').map(node => ({
      node,
      topic: node.dataset.topic || 'Other',
      date: node.dataset.date || '1970-01-01',
      selected: (node.dataset.selected || 'false') === 'true'
    }));
  }

  function setMode(mode){
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mode === mode)));
    const items = readProjects();
    const counts = {
      all: items.length,
      selected: items.filter(i => i.selected).length,
      topics: new Set(items.map(i => i.topic)).size
    };

    if(mode === 'selected'){
      // show only selected items in the original (topic) container
      byDate.style.display = 'none';
      byTopic.style.display = '';
      items.forEach(i => i.node.style.display = i.selected ? '' : 'none');
      summary.textContent = `Showing ${counts.selected} selected item(s) of ${counts.all}.`;
    } else if(mode === 'topic'){
      // show all, grouped by your original sections (just reveal all)
      byDate.style.display = 'none';
      byTopic.style.display = '';
      items.forEach(i => i.node.style.display = '');
      summary.textContent = `Showing all ${counts.all} item(s) grouped by topic (${counts.topics}).`;
    } else {
      // render a date-sorted flat view
      byTopic.style.display = 'none';
      byDate.style.display = '';
      byDate.innerHTML = '';

      const sorted = items
        .slice()
        .sort((a,b) => b.date.localeCompare(a.date)); // newest first

      let groupMap = new Map();
      sorted.forEach(i=>{
        if(!groupMap.has(i.date)) groupMap.set(i.date, []);
        groupMap.get(i.date).push(i);
      });

      [...groupMap.keys()].sort((a,b)=>b.localeCompare(a)).forEach(date=>{
        const g = document.createElement('div');
        g.className = 'group';
        const h = document.createElement('h3');
        const dt = new Date(date + 'T00:00:00');
        h.textContent = (isNaN(dt) ? date : dt.toLocaleDateString(undefined,{year:'numeric',month:'short',day:'2-digit'}));
        g.appendChild(h);
        groupMap.get(date).forEach(i=>{
          g.appendChild(i.node.cloneNode(true));
        });
        byDate.appendChild(g);
      });

      summary.textContent = `Showing all ${counts.all} item(s) grouped by date.`;
    }

    // reflect in URL
    const url = new URL(location);
    url.searchParams.set('mode', mode);
    history.replaceState({}, '', url);
  }

  buttons.forEach(b => b.addEventListener('click', () => setMode(b.dataset.mode)));
  setMode(new URL(location).searchParams.get('mode') ?? 'selected');
})();
</script>
