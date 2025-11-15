---
layout: archive
title: "Research"
permalink: /projects/
author_profile: true
---
<style>
  .authors-rest.is-hidden { display: none; }
  .pub-authors a.more-authors { text-decoration: underline; }
  .pub .info {
    flex: 1 1 auto;
    min-width: 0;
    font-size: 0.95rem;   /* slightly smaller text */
    line-height: 1.35;    /* keep good readability */
  }

  .pub .info a {
    font-size: 0.9rem;    /* make links match */
  }

  .pub .info strong {
    font-size: 1rem;      /* keep titles just a bit larger */
  }
  .pub{
    display:flex;
    gap:16px;
    align-items:flex-start;
    border:none;
    background:transparent;
    padding:0;
    margin:18px 0;
  }

  /* Increase thumbnail size */
  .pub .thumb{
    flex:0 0 320px;   /* was 180px → 180 × 1.5 = 270 */
    max-width:320px;
  }
  .pub .thumb img{
    width:100%;
    height:auto;
    display:block;
    border-radius:6px;
  }

  .pub .info{ flex:1 1 auto; min-width:0; }
  .pub .info h2,.pub .info h3{ margin-top:.1rem; margin-bottom:.25rem; }

  .proj + .proj { border-top:1px solid #eee; padding-top:18px; }
  .group{ margin:1rem 0; }
  .group > h3{
    margin:.25rem 0 .5rem;
    border-bottom:1px solid #eee;
    padding-bottom:.25rem;
    font-size:1rem;
  }

  @media (max-width:640px){
    .pub{ flex-direction:column; }
    .pub .thumb{ max-width:100%; }
  }
</style>

<script>
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a.more-authors');
    if (!link) return;
    e.preventDefault();

    const id = link.getAttribute('data-target');
    const rest = document.getElementById(id);
    if (!rest) return;

    // reveal on first click; toggle if you prefer
    rest.classList.remove('is-hidden');
    link.setAttribute('aria-expanded', 'true');
    // If you want a toggle instead, comment the next line and see the toggle version below
    link.remove(); // one-way reveal

    /* --- Toggle version (optional) ---
    const expanded = link.getAttribute('aria-expanded') === 'true';
    rest.classList.toggle('is-hidden', expanded);
    link.setAttribute('aria-expanded', String(!expanded));
    link.textContent = expanded ? link.dataset.moreLabel || 'show more authors'
                                : link.dataset.lessLabel || 'show fewer';
    ------------------------------------ */
  });
</script>

*, † indicate equal contributions

<!-- Controls -->
<div class="content-switcher" role="toolbar" aria-label="Content view">
  <button type="button" data-mode="selected" aria-pressed="true">Show selected</button>
  <button type="button" data-mode="date" aria-pressed="false">Show all by date</button>
  <button type="button" data-mode="topic" aria-pressed="false">Show all by topic</button>
</div>
<div id="content-summary" style="margin:.25rem 0 1rem;color:#6b7280;"></div>
<!-- Topic filter buttons (used in "Show all by topic" mode) -->
<div id="topic-filters" class="topic-switcher" style="display:none;"></div>


<!-- Topic (original order) container -->
<div id="by-topic">
  <!-- Wrap each existing section in a <section class="proj"> with metadata -->
  


<section class="proj" markdown="1"
         data-topic="Robust planning"
         data-date="2025-10-01"
         data-selected="true">

<div class="pub">
  <div class="thumb">
    <img src="/images/height.gif" alt="CrowdNav demo">
  </div>

  <div class="info">
  
    <strong>HEIGHT: Heterogeneous Interaction Graph Transformer for Robot Navigation in Crowded and Constrained Environments</strong><br>
     
    <span class="pub-authors">
      <strong>Shuijing Liu</strong>, Haochen Xia*, Fatemeh Cheraghi Pouria*, and
      <a href="#" class="more-authors" data-target="authors-height" aria-expanded="false">
        5 more authors
      </a>
      <span id="authors-height" class="authors-rest is-hidden">
        Kaiwen Hong, Neeloy Chakraborty, Zichao Hu, Joydeep Biswas, Katherine Driggs-Campbell.
      </span>
    </span><br>
    Accepted in T-ASE, 2025.<br>

    <a href="https://arxiv.org/abs/2411.12150" target="_blank">Paper</a> |
    <a href="https://sites.google.com/view/crowdnav-height/home" target="_blank">Website</a> |
    <a href="https://www.youtube.com/playlist?list=PLL4IPhbfiY3ZjXE6wwfg0nffFr_GLtwee" target="_blank">Video</a> |
    <a href="https://github.com/Shuijing725/CrowdNav_HEIGHT" target="_blank">Code</a><br> 
    <a href="https://socialnav2025.pages.dev/" target="_blank"><span style="color:orange">Best Paper Award at ICRA 2025 Workshop on Advances in Social Navigation: Planning, HRI and Beyond</span></a>

  </div>
</div>

</section>

<section class="proj" markdown="1"
         data-topic="Robust planning"
         data-date="2017-12-11"
         data-selected="false">

<div class="pub">
  <div class="thumb">
    <img src="/images/rarl.gif" alt="CrowdNav demo">
  </div>

  <div class="info">
  
    <strong>Robust Deep Reinforcement Learning with Adversarial Attacks</strong><br>
     
    <span class="pub-authors">
      Anay Pattanaik, <strong>Shuijing Liu*</strong>, Zhenyi Tang*, and
      <a href="#" class="more-authors" data-target="authors-robust" aria-expanded="false">
        2 more authors
      </a>
      <span id="authors-robust" class="authors-rest is-hidden">
        Gautham Bommannan, Girish Chowdhary.
      </span>
    </span><br>
    In AAMAS 2018 (Extended abstract).<br>

    <a href="https://arxiv.org/abs/1712.03632" target="_blank">Paper</a> |
    <a href="https://www.youtube.com/watch?v=8xPaca3cjEU" target="_blank">Video</a> |
    <a href="https://shuijing725.github.io/files/Supplementary_for_Robust_Deep_Reinforcement_Learning_with_Adversarial_Attacks.pd" target="_blank">Supplementary materials</a><br>


  </div>
</div>

</section>

<section class="proj" markdown="1"
         data-topic="Robust planning"
         data-date="2021-05-01"
         data-selected="true">

<div class="pub">
  <div class="thumb">
    <img src="/images/crowdnav.jpg" alt="CrowdNav demo">
  </div>

  <div class="info">
  
    <strong>Decentralized Structural-RNN for Robot Crowd Navigation with Deep Reinforcement Learning</strong><br>
     
    <span class="pub-authors">
      <strong>Shuijing Liu*</strong>, Peixin Chang*, Weihang Liang†, and
      <a href="#" class="more-authors" data-target="authors-decentrialized" aria-expanded="false">
        2 more authors
      </a>
      <span id="authors-decentrialized" class="authors-rest is-hidden">
        Neeloy Chakraborty†, Katherine Driggs-Campbell.
      </span>
    </span><br>
    In ICRA 2021.<br>

    <a href="https://arxiv.org/abs/2011.04820" target="_blank">Paper</a> |
    <a href="https://sites.google.com/view/crowdnav-ds-rnn/home" target="_blank">Website</a> |
    <a href="https://youtu.be/bYO-1IAjzgY" target="_blank">Video</a> |
    <a href="https://github.com/Shuijing725/CrowdNav_DSRNN" target="_blank">Code</a> <br>


  </div>
</div>

</section>

<section class="proj" markdown="1"
         data-topic="Robust planning"
         data-date="2023-05-01"
         data-selected="false">

<div class="pub">
  <div class="thumb">
    <img src="/images/socialZoneGraph.png" alt="CrowdNav demo">
  </div>

  <div class="info">
  
    <strong>Intention Aware Robot Crowd Navigation with Attention-Based Interaction Graph</strong><br>
     
    <span class="pub-authors">
      <strong>Shuijing Liu</strong>, Peixin Chang, Zhe Huang, and
      <a href="#" class="more-authors" data-target="authors-intention" aria-expanded="true">
        6 more authors
      </a>
      <span id="authors-intention" class="authors-rest is-hidden">
        Neeloy Chakraborty, Kaiwen Hong, Weihang Liang, Junyi Geng, D. Livingston McPherson, Katherine Driggs-Campbell.
      </span>
    </span><br>
    In ICRA 2023.<br>

    <a href="https://arxiv.org/abs/2203.01821" target="_blank">Paper</a> |
    <a href="https://sites.google.com/view/intention-aware-crowdnav/home" target="_blank">Website</a> |
    <a href="https://www.youtube.com/watch?v=nxpxhF019VA" target="_blank">Video</a> |
    <a href="https://github.com/Shuijing725/CrowdNav_Prediction_AttnGraph" target="_blank">Code</a> <br>
    <a href="https://www.lastmilerobotics.dfl.ae/home" target="_blank"><span style="color:orange">Best poster award at IROS 2023 Last-Mile Robotics Workshop</span></a> <br>
    

      </div>
    </div>
    
</section>


<!-- ===================== JOURNAL ===================== -->

<section class="proj" markdown="1" data-topic="Human modeling" data-date="2024-01-01" data-selected="true">
<div class="pub">
  <div class="thumb"><img src="/images/wayfinding_dialogue.png" alt="Project teaser"></div>
  <div class="info">
    <strong>DRAGON: A Dialogue-Based Robot for Assistive Navigation with Visual Language Grounding</strong><br>
    <span class="pub-authors">
      <strong>Shuijing Liu</strong>, Aamir Hasan, Kaiwen Hong,
      <a href="#" class="more-authors" data-target="authors-dragon" aria-expanded="false">7 more authors</a>
      <span id="authors-dragon" class="authors-rest is-hidden"> Runxuan Wang, Peixin Chang, Zachary Mizrachi, Justin Lin, D. Livingston McPherson, Wendy A. Rogers, Katherine Driggs-Campbell.</span>
    </span><br>
    In IEEE Robotics and Automation Letters (RA-L), 2024.<br>
    <a href="https://arxiv.org/abs/2307.06924" target="_blank">Paper</a> |
    <a href="https://sites.google.com/view/dragon-wayfinding" target="_blank">Website</a> |
    <a href="https://youtube.com/playlist?list=PLL4IPhbfiY3YkITpyLjeroak_wBn151pn" target="_blank">Video</a> |
    <a href="https://github.com/Shuijing725/Dragon_Wayfinding/" target="_blank">Code</a>
  </div>
</div>
</section>

<!-- ===================== CONFERENCE ===================== -->


<section class="proj" markdown="1" data-topic="Continual adaptation" data-date="2023-05-01" data-selected="true">
<div class="pub">
  <div class="thumb"><img src="/images/rsi3.png" alt="Project teaser"></div>
  <div class="info">
    <strong>A Data-Efficient Visual-Audio Representation with Intuitive Fine-tuning for Voice-Controlled Robots</strong><br>
    <span class="pub-authors">
      Peixin Chang, <strong>Shuijing Liu</strong>, Tianchen Ji,
      <a href="#" class="more-authors" data-target="authors-difvar" aria-expanded="false">3 more authors</a>
      <span id="authors-difvar" class="authors-rest is-hidden"> Neeloy Chakraborty, Kaiwen Hong, Katherine Driggs-Champbell.</span>
    </span><br>
    In CoRL 2023.<br>
    <a href="https://arxiv.org/abs/2301.09749" target="_blank">Paper</a> |
    <a href="https://sites.google.com/site/changpeixin/home/Research/a-data-efficient-visual-audio-representation-with-intuitive-fine-tuning" target="_blank">Website</a> |
    <a href="https://www.youtube.com/watch?v=YsYIAwZW25g" target="_blank">Video</a><br>
  </div>
</div>
</section>

<section class="proj" markdown="1" data-topic="Robust planning" data-date="2023-06-01" data-selected="false">
<div class="pub">
  <div class="thumb"><img src="/images/stow_ours.gif" alt="Project teaser"></div>
  <div class="info">
    <strong>Predicting Object Interactions with Behavior Primitives: An Application in Stowing Tasks</strong><br>
    <span class="pub-authors">
      Haonan Chen, Yilong Niu, Kaiwen Hong,
      <a href="#" class="more-authors" data-target="authors-stow" aria-expanded="false">4 more authors</a>
      <span id="authors-stow" class="authors-rest is-hidden"> <strong>Shuijing Liu</strong>, Yixuan Wang, Yunzhu Li, Katherine Driggs-Campbell.</span>
    </span><br>
    In CoRL 2023. <span style="color:orange">(Best Student Paper Award Finalist)</span><br>
    <a href="https://openreview.net/pdf?id=VH6WIPF4Sj" target="_blank">Paper</a> |
    <a href="https://haonan16.github.io/stow_page" target="_blank">Website</a> |
    <a href="https://github.com/haonan16/Stow/" target="_blank">Code</a>
  </div>
</div>
</section>

<section class="proj" markdown="1" data-topic="Robust planning" data-date="2023-05-01" data-selected="false">
<div class="pub">
  <div class="thumb"><img src="/images/pas_crowdnav.jpg" alt="Project teaser"></div>
  <div class="info">
    <strong>Occlusion-Aware Crowd Navigation Using People as Sensors</strong><br>
    <span class="pub-authors">
      Ye-Ji Mun, Masha Itkina, <strong>Shuijing Liu</strong>,
      <a href="#" class="more-authors" data-target="authors-pas" aria-expanded="false">1 more author</a>
      <span id="authors-pas" class="authors-rest is-hidden"> Katherine Driggs-Campbell.</span>
    </span><br>
    In ICRA 2023.<br>
    <a href="https://arxiv.org/abs/2210.00552" target="_blank">Paper</a> |
    <a href="https://www.youtube.com/watch?v=BG5s7w5BdME" target="_blank">Video</a> |
    <a href="https://github.com/yejimun/PaS_CrowdNav" target="_blank">Code</a> |
    <a href="https://techxplore.com/news/2022-11-autonomous-mobile-robots-crowded-spaces.html" target="_blank">Media coverage</a>
  </div>
</div>
</section>

<section class="proj" markdown="1" data-topic="Human modeling" data-date="2023-10-01" data-selected="false">
<div class="pub">
  <div class="thumb"><img src="/images/SaberVAE_off_road_traj.gif" alt="Project teaser"></div>
  <div class="info">
    <strong>Structural Attention-Based Recurrent Variational Autoencoder for Highway Vehicle Anomaly Detection</strong><br>
    <span class="pub-authors">
      Neeloy Chakraborty, Aamir Hasan*, <strong>Shuijing Liu</strong>,
      <a href="#" class="more-authors" data-target="authors-saber" aria-expanded="false">3 more authors</a>
      <span id="authors-saber" class="authors-rest is-hidden"> Tianchen Ji, Eric Liang, D. Livingston McPherson, Katherine Driggs-Campbell.</span>
    </span><br>
    In AAMAS 2023 (Full paper).<br>
    <a href="https://arxiv.org/abs/2301.03634" target="_blank">Paper</a> |
    <a href="https://sites.google.com/illinois.edu/saber-vae" target="_blank">Website</a> |
    <a href="https://gitlab.engr.illinois.edu/hubris/highway-anomaly-detection" target="_blank">Code</a>
  </div>
</div>
</section>

<section class="proj" markdown="1" data-topic="Human modeling" data-date="2022-10-01" data-selected="false">
<div class="pub">
  <div class="thumb"><img src="/images/itsc.jpg" alt="Project teaser"></div>
  <div class="info">
    <strong>Combining Model-Based Controllers and Generative Adversarial Imitation Learning for Traffic Simulation</strong><br>
    <span class="pub-authors">
      Haonan Chen, Tianchen Ji, <strong>Shuijing Liu</strong>,
      <a href="#" class="more-authors" data-target="authors-itsc" aria-expanded="false">1 more author</a>
      <span id="authors-itsc" class="authors-rest is-hidden"> Katherine Driggs-Campbell.</span>
    </span><br>
    In ITSC 2022.<br>
    <a href="https://ieeexplore.ieee.org/abstract/document/9922261" target="_blank">Paper</a>
  </div>
</div>
</section>

<section class="proj" markdown="1" data-topic="Human modeling" data-date="2022-05-01" data-selected="true">
<div class="pub">
  <div class="thumb"><img src="/images/TraitVAE.gif" alt="Project teaser"></div>
  <div class="info">
    <strong>Learning to Navigate Intersections with Unsupervised Driver Trait Inference</strong><br>
    <span class="pub-authors">
      <strong>Shuijing Liu</strong>, Peixin Chang, Haonan Chen,
      <a href="#" class="more-authors" data-target="authors-traitvae" aria-expanded="false">2 more authors</a>
      <span id="authors-traitvae" class="authors-rest is-hidden"> Neeloy Chakraborty, Katherine Driggs-Campbell.</span>
    </span><br>
    In ICRA 2022.<br>
    <a href="https://arxiv.org/abs/2109.06783" target="_blank">Paper</a> |
    <a href="https://sites.google.com/view/vae-trait-inference/home" target="_blank">Website</a> |
    <a href="https://github.com/Shuijing725/VAE_trait_inference" target="_blank">Code</a> |
    <a href="https://www.youtube.com/watch?v=wqbgsjSvkAo&t=1s" target="_blank">Video</a>
  </div>
</div>
</section>

<section class="proj" markdown="1" data-topic="Others" data-date="2022-05-01" data-selected="false">
<div class="pub">
  <div class="thumb"></div>
  <div class="info">
    <strong>Off Environment Evaluation Using Convex Risk Minimization</strong><br>
    <span class="pub-authors">
      Pulkit Katdare, <strong>Shuijing Liu</strong>, Katherine Driggs-Campbell
    </span><br>
    In ICRA 2022.<br>
    <a href="https://arxiv.org/abs/2112.11532" target="_blank">Paper</a> |
    <a href="https://github.com/pulkitkatdare/offenveval" target="_blank">Code</a>
  </div>
</div>
</section>

<section class="proj" markdown="1" data-topic="Human modeling" data-date="2020-10-01" data-selected="false">
<div class="pub">
  <div class="thumb"><img src="/images/rsi_opening.png" alt="Project teaser"></div>
  <div class="info">
    <strong>Robot Sound Interpretation: Combining Sight and Sound in Learning-Based Control</strong><br>
    <span class="pub-authors">
      Peixin Chang, <strong>Shuijing Liu</strong>, Haonan Chen,
      <a href="#" class="more-authors" data-target="authors-rsi" aria-expanded="false">1 more author</a>
      <span id="authors-rsi" class="authors-rest is-hidden"> Katherine Driggs-Campbell.</span>
    </span><br>
    In IROS 2020.<br>
    <a href="https://arxiv.org/abs/1909.09172" target="_blank">Paper</a> |
    <a href="https://sites.google.com/site/changpeixin/home/Research/robot_sound_interpretation" target="_blank">Website</a> |
    <a href="https://www.youtube.com/watch?v=0ONGQwhGn_Y" target="_blank">Video</a>
  </div>
</div>
</section>

<section class="proj" markdown="1" data-topic="Others" data-date="2025-05-01" data-selected="false">
<div class="pub">
  <div class="thumb"></div>
  <div class="info">
    <strong>Developing Wayfinding Robotic Support for Older Persons with Vision Impairments</strong><br>
        <span class="pub-authors">
      Samuel A. Olatunji, Megan A. Bayles, <strong>Shuijing Liu</strong>, and
      <a href="#" class="more-authors" data-target="authors-developing" aria-expanded="false">3 more authors</a>
      <span id="womd-authors-rest" class="authors-rest is-hidden"> Aamir Hasan, Katherine Driggs-Campbell, and Wendy A. Rogers.</span>
    </span><br>
    In Assistive Technology, 2025. <br>
    <a href="https://www.tandfonline.com/doi/abs/10.1080/10400435.2025.2525823" target="_blank">Paper</a> <br>
  </div>
</div>
</section>

<section class="proj" markdown="1" data-topic="Human modeling" data-date="2025-09-01" data-selected="true">
<div class="pub">
  <div class="thumb"><img src="/images/casper.gif" alt="Project teaser"></div>
  <div class="info">
    <strong>Casper: Inferring Diverse Intents for Assistive Teleoperation with Vision Language Models</strong><br>
        <span class="pub-authors">
      Huihan Liu, Rutav Shah, <strong>Shuijing Liu</strong>, and
      <a href="#" class="more-authors" data-target="authors-casper" aria-expanded="false">4 more authors</a>
      <span id="authors-casper" class="authors-rest is-hidden"> Yuchen Cui, Yonatan Bisk, Roberto Martín-Martín, and Yuke Zhu.</span>
    </span><br>
    In CoRL 2025. <br>
    <a href="https://arxiv.org/abs/2506.14727" target="_blank">Paper</a> |
    <a href="https://ut-austin-rpl.github.io/casper/" target="_blank">Website</a> |
    <a href="https://youtu.be/ZRwjHh1t5kE" target="_blank">Website</a> 
  <br>
  
  </div>
</div>
</section>

<section class="proj" markdown="1" data-topic="Robust planning" data-date="2025-09-01" data-selected="false">
<div class="pub">
  <div class="thumb"><img src="/images/socialnav-sub.png" alt="Project teaser"></div>
  <div class="info">
    <strong>SocialNav-SUB: Benchmarking VLMs for Scene Understanding in Social Robot Navigation</strong><br>
        <span class="pub-authors">
      Michael J. Munje, Chen Tang, <strong>Shuijing Liu</strong>, and
      <a href="#" class="more-authors" data-target="authors-socialnavsub" aria-expanded="false">6 more authors</a>
      <span id="authors-socialnavsub" class="authors-rest is-hidden"> Zichao Hu, Yifeng Zhu, Jiaxun Cui, Garrett Warnell, Joydeep Biswas, Peter Stone.</span>
    </span><br>
  In CoRL 2025. <br>
    <a href="https://arxiv.org/abs/2509.08757" target="_blank">Paper</a> |
    <a href="https://larg.github.io/socialnav-sub/" target="_blank">Website</a> |
    <a href="https://github.com/LARG/SocialNavSUB" target="_blank">Code</a> |
    <a href="https://huggingface.co/datasets/michaelmunje/SocialNav-SUB" target="_blank">Dataset</a> 
  <br>

  </div>
</div>
</section>

<section class="proj" markdown="1" data-topic="Robust planning" data-date="2025-09-01" data-selected="false">
<div class="pub">
  <div class="thumb"><img src="/images/composablenav.png" alt="Project teaser"></div>
  <div class="info">
    <strong>ComposableNav: Composable Instruction-Following Navigation in Dynamic Environments via Diffusion</strong><br>
    <span class="pub-authors">
      Zichao Hu, Chen Tang, Michael J. Munje, and
      <a href="#" class="more-authors" data-target="authors-composablenav" aria-expanded="false">6 more authors</a>
      <span id="authors-composablenav" class="authors-rest is-hidden"> Yifeng Zhu, Alex Liu, <strong>Shuijing Liu</strong>, Garrett Warnell, Peter Stone, Joydeep Biswas.</span>
    </span><br>
  In CoRL 2025. <br>
    <a href="https://arxiv.org/abs/2509.17941" target="_blank">Paper</a> |
    <a href="https://amrl.cs.utexas.edu/ComposableNav/" target="_blank">Website</a> |
    <a href="https://github.com/ut-amrl/ComposableNav" target="_blank">Code</a> |
    <a href="https://huggingface.co/zichao22/ComposableNav_Models/tree/main" target="_blank">Checkpoints</a> 
  <br>
  </div>
</div>
</section>

<section class="proj" markdown="1" data-topic="Robust planning" data-date="2025-09-01" data-selected="false">
<div class="pub">
  <div class="thumb"><img src="/images/tool-as-interface.gif" alt="Project teaser"></div>
  <div class="info">
    <strong>Tool-as-Interface: Learning Robot Policies from Observing Human Tool Use</strong><br>
        <span class="pub-authors">
      Haonan Chen, Cheng Zhu, <strong>Shuijing Liu</strong>, and
      <a href="#" class="more-authors" data-target="authors-toolasinferface" aria-expanded="false">2 more authors</a>
      <span id="authors-toolasinferface" class="authors-rest is-hidden"> Yunzhu Li, Katherine Driggs-Campbell.</span>
    </span><br>
  In CoRL 2025. <br>
    <a href="https://arxiv.org/abs/2504.04612" target="_blank">Paper</a> |
    <a href="https://tool-as-interface.github.io/" target="_blank">Website</a> |
    <a href="https://github.com/Tool-as-Interface/Tool_as_Interface" target="_blank">Code</a> |
    <a href="https://www.youtube.com/watch?v=dkU0Pl1LFq8" target="_blank">Video</a> |
<a href="https://techxplore.com/news/2025-08-robots-tools.html" target="_blank">Media coverage</a> 
  <br>
  </div>
</div>
</section>

<section class="proj" markdown="1" data-topic="Robust planning" data-date="2025-09-01" data-selected="false">
<div class="pub">
  <div class="thumb"><img src="/images/binamual.gif" alt="Project teaser"></div>
  <div class="info">
    <strong>Learning Coordinated Bimanual Manipulation Policies using State Diffusion and Inverse Dynamics Models</strong><br>
        <span class="pub-authors">
      Haonan Chen, Jiaming Xu, Lily Sheng, and
      <a href="#" class="more-authors" data-target="authors-coordinated" aria-expanded="false">2 more authors</a>
      <span id="authors-coordinated" class="authors-rest is-hidden"> Tianchen Ji, <strong>Shuijing Liu</strong>, Yunzhu Li, Katherine Driggs-Campbell.</span>
    </span><br>
    In ICRA 2025. <br>
    <a href="https://arxiv.org/abs/2503.23271" target="_blank">Paper</a> |
    <a href="https://haonan16.github.io/coord_bimanual_page/" target="_blank">Website</a> |
    <a href="https://github.com/haonan16/state_diff/" target="_blank">Code</a> 
  <br>
  </div>
</div>
</section>

<section class="proj" markdown="1" data-topic="Continual adaptation" data-date="2025-12-01" data-selected="true">
<div class="pub">
  <div class="thumb"><img src="/images/mimicdroid.gif" alt="Project teaser"></div>
  <div class="info">
    <strong>MimicDroid: In-Context Learning for Humanoid Robot Manipulation from Human Play Videos</strong><br>
        <span class="pub-authors">
      Rutav Shah, <strong>Shuijing Liu*</strong>, Qi Wang*, and
      <a href="#" class="more-authors" data-target="authors-mimicdroid" aria-expanded="false">5 more authors</a>
      <span id="authors-mimicdroid" class="authors-rest is-hidden"> Zhenyu Jiang*, Sateesh Kumar, Mingyo Seo, Roberto Martín-Martín, Yuke Zhu.</span>
    </span><br>
    Under review, 2025. <br>
    <a href="https://arxiv.org/abs/2509.09769" target="_blank">Paper</a> |
    <a href="https://ut-austin-rpl.github.io/MimicDroid/" target="_blank">Website</a> |
    <a href="https://github.com/UT-Austin-RPL/mimicdroid-robocasa/tree/latest" target="_blank">Benchmark</a> |
    <a href="https://huggingface.co/datasets/Rutav/MimicDroidDataset/tree/main" target="_blank">Dataset</a> 
  <br>
  </div>
</div>
</section>

<section class="proj" markdown="1" data-topic="Others" data-date="2025-12-01" data-selected="false">
<div class="pub">
  <div class="thumb"><img src="/images/beyond-canes.png" alt="Project teaser"></div>
  <div class="info">
    <strong>Beyond Canes and Guide Dogs: A Survey of 40 Years of Robotics for Assisting People with Visual Impairments in Navigation, Wayfinding, and Orientation</strong><br>
        <span class="pub-authors">
      John Pohovey, Maria Lusardi*, Aamir Hasan*, and
      <a href="#" class="more-authors" data-target="authors-beyond" aria-expanded="false">5 more authors</a>
      <span id="authors-beyond" class="authors-rest is-hidden"> <strong>Shuijing Liu†</strong>, Andre Schreiber†, Samuel Olatunji, Wendy Rogers, Katherine Driggs-Campbell</span>
    </span><br>
    Under review, 2025. <br>
    <a href="https://engrxiv.org/preprint/view/4985" target="_blank">Paper</a> |
    <a href="https://www.openicpsr.org/openicpsr/project/235425/version/V1/view" target="_blank">Dataset</a> 
  <br>
  </div>
</div>
</section>

<section class="proj" markdown="1" data-topic="Robust planning" data-date="2025-12-01" data-selected="false">
<div class="pub">
  <div class="thumb"><img src="/images/scoop.gif" alt="Project teaser"></div>
  <div class="info">
    <strong>Gotta Scoop ’Em All: Sim-and-Real Co-Training of Graph-based Neural Dynamics for Long-Horizon Scooping</strong><br>
        <span class="pub-authors">
      Kaiwen Hong, Haonan Chen*, Jiaming Xu, and
      <a href="#" class="more-authors" data-target="authors-gotta" aria-expanded="false">5 more authors</a>
      <span id="authors-gotta" class="authors-rest is-hidden"> Runxuan Wang, Kaylan Wang, Mingtong Zhang, <strong>Shuijing Liu</strong>, Yifan Zhu, Yunzhu Li, Katherine Driggs-Campbell </span>
    </span><br>
    Under review, 2025. <br>

  </div>
</div>
</section>

<section class="proj" markdown="1" data-topic="Human modeling" data-date="2023-05-01" data-selected="false">
<div class="pub">
  <div class="thumb"><img src="/images/opening_iTHOR.png" alt="Project teaser"></div>
  <div class="info">
    <strong>Learning Visual-Audio Representations for Voice-Controlled Robots</strong><br>
        <span class="pub-authors">
      Peixin Chang, <strong>Shuijing Liu</strong>, Katherine Driggs-Campbell.
       </span><br>
    In ICRA 2023. <br>
    <a href="https://arxiv.org/abs/2109.02823" target="_blank">Paper</a> |
    <a href="https://sites.google.com/site/changpeixin/home/Research/learning-visual-audio-representations-for-voice-controlled-robots" target="_blank">Website</a> |
    <a href="https://github.com/PeixinC/VoiceControlledRobot-VAR" target="_blank">Code</a> 
  <br>
  </div>
</div>
</section>

<section class="proj" markdown="1" data-topic="Others" data-date="2022-10-01" data-selected="false">
<div class="pub">
  <div class="thumb"></div>
  <div class="info">
    <strong>An Interdisciplinary Approach: Potential for Robotic Support to Address Wayfinding Barriers Among Persons with Visual Impairments</strong><br>
        <span class="pub-authors">
      Megan A. Bayles, Travis Kadylak, <strong>Shuijing Liu</strong>, and
<a href="#" class="more-authors" data-target="authors-interdisciplinary" aria-expanded="false">5 more authors</a>
      <span id="authors-interdisciplinary" class="authors-rest is-hidden"> Aamir Hasan, Weihang Liang, Kaiwen Hong, Katherine Driggs-Campbell, and Wendy A.
Rogers. </span>
       </span><br>
    In HFES 2022. <br>
    <a href="https://journals.sagepub.com/doi/abs/10.1177/1071181322661384" target="_blank">Paper</a> 
  <br>
  </div>
</div>
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

  /* Topic buttons (for "Show all by topic") */
  .topic-switcher{
    display:flex;
    gap:.5rem;
    flex-wrap:wrap;
    margin:.25rem 0 .75rem;
  }
  .topic-switcher button{
    border:1px solid #d1d5db;
    background:#fff;
    padding:.3rem .6rem;
    border-radius:.6rem;
    cursor:pointer;
    font-size:0.9rem;
  }
  .topic-switcher button.is-active{
    background:#059669;   /* green-ish */
    border-color:#059669;
    color:#fff;
  }

  .proj{margin:1rem 0;padding:.75rem 1rem;border:1px solid #e5e7eb;border-radius:.75rem;}
  .group{margin:1rem 0;}
  .group h3{
    margin:.5rem 0;
    border-bottom:1px solid #e5e7eb;
    padding-bottom:.25rem;
    font-size:1rem;
    font-weight:600;
  }
</style>


<script>
(function(){
  const qs  = sel => document.querySelector(sel);
  const qsa = sel => Array.from(document.querySelectorAll(sel));

  const byTopic  = qs('#by-topic');
  const byDate   = qs('#by-date');
  const summary  = qs('#content-summary');
  const buttons  = qsa('.content-switcher [data-mode]');
  const topicBar = qs('#topic-filters');

  // Read projects from the topic container
  function readProjects(){
    return qsa('#by-topic .proj').map(node => ({
      node,
      // default to "Others" if nothing set
      topic: node.dataset.topic || 'Others',
      date:  node.dataset.date  || '1970-01-01',
      selected: (node.dataset.selected || 'false') === 'true'
    }));
  }

  // Build topic buttons in desired order and wire up filtering
  function buildTopicButtons(items){
    const desiredOrder = [
      'Human modeling',
      'Robust planning',
      'Continual adaptation',
      'Others'
    ];

    const topicsSet = [...new Set(items.map(i => i.topic))];

    // First: your preferred order (only those that actually exist)
    // Then: any remaining topics, alphabetically
    const topics = [
      ...desiredOrder.filter(t => topicsSet.includes(t)),
      ...topicsSet.filter(t => !desiredOrder.includes(t)).sort()
    ];

    topicBar.innerHTML = '';

    topics.forEach(topic => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = topic;
      btn.dataset.topic = topic;

      btn.addEventListener('click', () => {
        // highlight active
        qsa('#topic-filters button').forEach(b =>
          b.classList.toggle('is-active', b === btn)
        );

        // show only this topic
        items.forEach(i => {
          i.node.style.display = (i.topic === topic) ? '' : 'none';
        });

        const count = items.filter(i => i.topic === topic).length;
        summary.textContent = `Showing ${count} item(s) in topic “${topic}”.`;
      });

      topicBar.appendChild(btn);
    });

    // auto-select first topic (Human modeling, if present)
    const firstBtn = topicBar.querySelector('button');
    if (firstBtn) firstBtn.click();
  }

  function setMode(mode){
    const items = readProjects();

    buttons.forEach(b =>
      b.setAttribute('aria-pressed', String(b.dataset.mode === mode))
    );

    const counts = {
      all: items.length,
      selected: items.filter(i => i.selected).length,
      topics: new Set(items.map(i => i.topic)).size
    };

    if (mode === 'selected') {
      byDate.style.display  = 'none';
      byTopic.style.display = '';
      topicBar.style.display = 'none';

      items.forEach(i => {
        i.node.style.display = i.selected ? '' : 'none';
      });

      summary.textContent = `Showing ${counts.selected} selected item(s) of ${counts.all}.`;

    } else if (mode === 'topic') {
      byDate.style.display  = 'none';
      byTopic.style.display = '';
      topicBar.style.display = 'flex';

      // show everything first; filtering happens via buttons
      items.forEach(i => { i.node.style.display = ''; });
      buildTopicButtons(items);

      // summary is updated when a topic button is clicked

    } else { // mode === 'date'
      byTopic.style.display = 'none';
      byDate.style.display  = '';
      topicBar.style.display = 'none';
      byDate.innerHTML = '';

      // Sort by full date (newest first)
      const sorted = items.slice().sort((a,b) => b.date.localeCompare(a.date));

      // ---- GROUP BY YEAR instead of full date ----
      const yearMap = new Map();
      sorted.forEach(i => {
        const year = (i.date || '1970-01-01').slice(0,4);
        if (!yearMap.has(year)) yearMap.set(year, []);
        yearMap.get(year).push(i);
      });

      // Render groups by year (newest year first)
      [...yearMap.keys()].sort((a,b) => b.localeCompare(a)).forEach(year => {
        const g = document.createElement('div');
        g.className = 'group';

        const h = document.createElement('h3');
        h.textContent = year;   // only show year
        g.appendChild(h);

        yearMap.get(year).forEach(i => {
          g.appendChild(i.node.cloneNode(true));
        });

        byDate.appendChild(g);
      });

      summary.textContent = `Showing all ${counts.all} item(s) grouped by year.`;
    }

    // reflect in URL
    const url = new URL(location);
    url.searchParams.set('mode', mode);
    history.replaceState({}, '', url);
  }

  // Wire top buttons
  buttons.forEach(b =>
    b.addEventListener('click', () => setMode(b.dataset.mode))
  );

  // Initial mode from URL or default to "selected"
  setMode(new URL(location).searchParams.get('mode') ?? 'selected');
})();
</script>




