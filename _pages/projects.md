---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---
## Social Crowd Navigation
Many crowd navigation methods are often short-sighted and prone to the freezing robot problem. 
To tackle these problems, we propose a novel reinforcement learning planner that reasons about spatial and temporal relationships between the robot and the crowd. 
In addition, we incorporate human trajectory prediction into the planner to increase safety and social-awareness of the robot.   

Relevant papers:  
- [Intention Aware Robot Crowd Navigation with Attention-Based Interaction Graph](https://sites.google.com/view/intention-aware-crowdnav/home), ICRA 2023.
- [Decentralized Structural-RNN for Robot Crowd Navigation with Deep Reinforcement Learning](https://sites.google.com/illinois.edu/crowdnav-dsrnn/home), ICRA 2021.
- [Occlusion-Aware Crowd Navigation Using People as Sensors](https://arxiv.org/abs/2210.00552), ICRA 2023.  

<img src="/images/ICRA_2023_CrowdNav_4humans.gif" width="400" height = "300" hspace="20" />  <img src="/images/socialZoneGraph.png" width="400" height = "300" />  

## Autonomous Driving
Understanding the interactions and behaviors of surrounding drivers is essential for autonomous vehicles (AV).
To this end, we propose novel networks to detect the abnormal drivers and predict driving styles in an unsupervised fashion, which improves navigation of AV.
Besides this, we also build realistic multi-agent traffic simulations.  

Relevant papers:  
- [Learning to Navigate Intersections with Unsupervised Driver Trait Inference](https://sites.google.com/illinois.edu/vae-trait-inference/home), ICRA 2022.
- [Structural Attention-Based Recurrent Variational Autoencoder for Highway Vehicle Anomaly Detection](https://sites.google.com/illinois.edu/saber-vae), AAMAS 2023.
- [Combining Model-Based Controllers and Generative Adversarial Imitation Learning for Traffic Simulation](https://ieeexplore.ieee.org/abstract/document/9922261), ITSC 2022.  

<img src="/images/TraitVAE.gif" width="400" height = "300" /> <img src="/images/SaberVAE_off_road_traj.gif" width="400" height = "300" />


## Instruction Following Robot & Visual-Language Grounding
To enable robots to serve humans and those with disabilities in everyday environments, the robots must understand spoken language and associate commands to entities in the environment.
We pursue two directions to achieve speech command-following robots:
1. Learning a visual-audio representation for RL skill learning without hand-engineered reward;
2. Building a system with vision-language models to guide persons with visual impairments from place to place and enhance their knowledge of the environment.  

User studies with real human subjects show that our systems are intuitive and easy to use.  

Relevant papers:
- [A Data-Efficient Visual-Audio Representation with Intuitive Fine-tuning for Voice-Controlled Robots](https://openreview.net/pdf?id=dxOaNO8bge), CoRL 2023.
- [Learning Visual-Audio Representations for Voice-Controlled Robots](https://arxiv.org/abs/2109.02823), ICRA 2023.
- [Robot Sound Interpretation: Combining Sight and Sound in Learning-Based Control](ttps://sites.google.com/site/changpeixin/home/Research/robot_sound_interpretation), IROS 2020.
- [DRAGON: A Dialogue-Based Robot for Assistive Navigation with Visual Language Grounding](https://sites.google.com/view/dragon-wayfinding), RA-L 2024.  

<img src="/images/rsi2.gif" width="400" height = "300" hspace="20" />  <img src="/images/wayfinding_dialogue.png" width="400" height = "300" />    

## Manipulation
Real-world long-horizon manipulation problems have been a longstanding challenge in robotics. 
We model object dynamics with graph networks and utilize motion primitives to achieve effective manipulation. 
We demonstrate our methods in real world tasks such as stowing and scooping.

Relevant papers:
- [Predicting Object Interactions with Behavior Primitives: An Application in Stowing Tasks](https://openreview.net/pdf?id=VH6WIPF4Sj), CoRL 2023.
- Multi-Step Planning for Granular Object Scooping via Graph Networks and Skill Search, in preparation 2024.  

<img src="/images/stow_ours.gif" width="400" height = "300" />

## Machine Learning
While reinforcement learning (RL) is an appealing way to learn robot policies, it is prone to performance degradation under adversarial perturbations and sim2real gaps.
We pursue two directions to address this problem: 
1. We improve the robustness of RL algorithms with adversarial training;
2. We evaluate RL policies in novel domains with minimal rollout data using importance sampling and optimization.

Relevant papers:
- [Robust Deep Reinforcement Learning with Adversarial Attacks](https://arxiv.org/abs/1712.03632), AAMAS Extended Abstract 2018.
- [Off Environment Evaluation Using Convex Risk Minimization](https://arxiv.org/abs/2112.11532), ICRA 2022.



