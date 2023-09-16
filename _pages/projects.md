---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---
## Robot Crowd Navigation

### Intention Aware Robot Crowd Navigation with Attention-Based Interaction Graph  
We study the problem of safe and intention-aware robot navigation in dense and interactive crowds. 
Most previous reinforcement learning (RL) based methods fail to consider different types of interactions among all agents or ignore the intentions of people, which results in performance degradation. 
We propose a novel recurrent graph neural network with attention mechanisms to capture heterogeneous interactions among agents through space and time. 
To encourage longsighted robot behaviors, we infer the intentions of dynamic agents by predicting their future trajectories for several timesteps. 
The predictions are incorporated into a model-free RL framework to prevent the robot from intruding into the intended paths of other agents. 
We demonstrate that our method enables the robot to achieve good navigation performance and non-invasiveness in challenging simulation and real-world scenarios.  
[[Paper]](https://arxiv.org/abs/2203.01821) [[Video]](https://www.youtube.com/watch?v=p_asv42Kl8Q) [[Website]](https://sites.google.com/view/intention-aware-crowdnav/home) [[Code]](https://github.com/Shuijing725/CrowdNav_Prediction_AttnGraph)    

<img src="/images/socialZone.png" width="450" />  

### Decentralized Structural-RNN for Robot Crowd Navigation with Deep Reinforcement Learning
Safe and efficient navigation through human crowds is an essential capability for mobile robots. 
We propose decentralized structural-Recurrent Neural Network (DS-RNN), a novel network that reasons about spatial and temporal relationships for robot decision making in crowd navigation. 
We train our network with model-free deep reinforcement learning without any expert supervision. 
We demonstrate that our model outperforms previous methods and successfully transfer the policy learned in the simulator to a real-world TurtleBot 2i.  
[[Paper]](https://arxiv.org/abs/2011.04820) [[Website]](https://sites.google.com/illinois.edu/crowdnav-dsrnn/home) [[Code]](https://github.com/Shuijing725/CrowdNav_DSRNN) [[Video]](https://youtu.be/bYO-1IAjzgY)  

<img src="/images/crowdnav.jpg" width="450" />   

### Occlusion-Aware Crowd Navigation Using People as Sensors   
Occlusions are highly prevalent in crowded spaces due to a limited robot sensor range and obstructing human agents. 
We propose integrating such social inference techniques into the planning pipeline.
We use a variational autoencoder with a specially designed loss function to learn representations that are meaningful for occlusion inference. 
We develop a deep reinforcement learning algorithm that incorporates the learned representations for occlusion-aware path planning that simultaneously learns to avoid collision with both observed and occluded human agents.
We demonstrate that our occlusion-aware policy can estimate agents in occluded spaces and achieves comparable navigation performance to a navigation policy with omniscient, full map information. 
To the best of our knowledge, this work is the first to use social occlusion inference for crowd navigation.   
[[Paper]](https://arxiv.org/abs/2210.00552) [[Video]](https://www.youtube.com/watch?v=BG5s7w5BdME) [[Code]](https://github.com/yejimun/PaS_CrowdNav) [[Newspaper article]](https://techxplore.com/news/2022-11-autonomous-mobile-robots-crowded-spaces.html)     

<img src="/images/pas_crowdnav.jpg" width="500" />

## Autonomous Driving

### Structural Attention-Based Recurrent Variational Autoencoder for Highway Vehicle Anomaly Detection
In autonomous driving, detection of abnormal driving behaviors is essential to ensure the safety of vehicle controllers.
We propose a novel unsupervised framework for highway anomaly detection named Structural Attention-based Recurrent VAE (SABeR-VAE), which explicitly uses the structure of the environment to aid anomaly identification. 
Specifically, we use a vehicle self-attention module to learn the relations among vehicles on a road, and a separate lane-vehicle attention module to model the importance of permissible lanes to aid in trajectory prediction. 
Conditioned on the attention modules' outputs, a recurrent encoder-decoder architecture with a stochastic Koopman operator-propagated latent space predicts the next states of vehicles. 
Our model is trained end-to-end to minimize prediction loss on normal vehicle behaviors, and is deployed to detect anomalies in (ab)normal scenarios.
The results of our method show that modeling environmental factors is essential to detecting a diverse set of anomalies in deployment.  
[[Paper]](https://arxiv.org/abs/2301.03634) [[Website]](https://sites.google.com/illinois.edu/saber-vae) [[Code]](https://gitlab.engr.illinois.edu/hubris/highway-anomaly-detection)  

<img src="/images/lane_discretization.png" width="450" />

### Learning to Navigate Intersections with Unsupervised Driver Trait Inference
Navigation through uncontrolled intersections is one of the key challenges for autonomous vehicles.
Identifying the subtle differences in hidden traits of other drivers can bring significant benefits when navigating in such environments.
We propose an unsupervised method for inferring driver traits such as driving styles from observed vehicle trajectories. 
Then, we use the inferred traits to improve the navigation of an autonomous vehicle through a T-intersection. 
Our pipeline enables the autonomous vehicle to adjust its actions when dealing with drivers of different traits to ensure safety and efficiency.   
[[Paper]](https://arxiv.org/abs/2109.06783) [[Website]](https://sites.google.com/illinois.edu/vae-trait-inference/home) [[Code]](https://github.com/Shuijing725/VAE_trait_inference) [[Video]](https://www.youtube.com/watch?v=wqbgsjSvkAo&t=1s) [[Presentation]](https://www.youtube.com/watch?v=hfSlciB1jew&t=29s)                 

<img src="/images/trait_opening.png" width="450" /> 

### Combining Model-Based Controllers and Generative Adversarial Imitation Learning for Traffic Simulation  
An accurate model of human drivers is essential to validate the performance of autonomous vehicles in multiagent and interactive scenarios. Previous works on human driver modeling either use model-based controllers that are not adaptive and need laborious parameter-tuning or learn an end-to-end black box model that has few safety guarantees.
We propose a two-stage hybrid driver model, where a high-level neural network generates driver traits that are used as the parameters of the low-level model-based controllers for simulated drivers.
We train our model using generative adversarial imitation learning with reward augmentation and parameter sharing from real-world vehicle trajectory data. By combining data-driven and model-based approaches, our method simulates traffic agents with expressive, safe, and human-like behaviors.
We demonstrate that our method outperforms state-of-the-art baselines in terms of imitation performance and safety in a multi-agent highway driving scenario.   
[[Paper]](https://ieeexplore.ieee.org/abstract/document/9922261)  

<img src="/images/itsc.jpg" width="450" /> 

## Instruction Following Robot & Vision-language grounding

### Learning Visual-Audio Representations for Voice-Controlled Robots
Inspired by sensorimotor theory, we propose a novel pipeline for task-oriented voice-controlled robots. 
Previous method relies on a large amount of labels as well as task-specific reward functions. 
Not only can such an approach hardly be improved after the deployment, but also has limited generalization across robotic platforms and tasks. 
To address these problems, we learn a visual-audio representation (VAR) that associates images and sound commands with minimal supervision. 
Using this representation, we generate an intrinsic reward function to learn robot policies with reinforcement learning, which eliminates the laborious reward engineering process. 
We demonstrate our approach on various robotic platforms, where the robots hear an audio command, identify the associated target object, and perform precise control to fulfill the sound command.
We also demonstrate that our VAR and the intrinsic reward function allows the robot to improve itself using only a small amount of labeled data collected in the real world.   
[[Paper]](https://arxiv.org/abs/2109.02823)    

<img src="/images/opening_iTHOR.png" width="450" />  

### Robot Sound Interpretation: Combining Sight and Sound in Learning-Based Control
We explore the interpretation of sound for robot decision-making, inspired by human speech comprehension.
While previous methods use natural language processing to translate sound to text, we propose an end-to-end
deep neural network which directly learns control polices from images and sound signals.  
[[Paper]](https://arxiv.org/abs/1909.09172) [[Website]](https://sites.google.com/site/changpeixin/home/Research/robot_sound_interpretation) [[Video]](https://www.youtube.com/watch?v=0ONGQwhGn_Y)  

<img src="/images/rsi_opening.png" width="600" />   

### Visual-Language Grounding for A Conversational Assistive Robot  
Persons with visual impairments (PwVI) have difficulties understanding and navigating spaces around them.
Motivated by recent advances in visual-language grounding and semantic navigation, we propose DRAGON, a guiding robot powered by a dialogue system and the ability to associate the environment with natural language. 
By understanding the commands from the user, DRAGON is able to guide the user to the desired landmarks on the map, describe the environment, and answer questions from visual observations. 
Through effective utilization of dialogue, the robot can ground the user’s free-form descriptions to landmarks in the environment, and give the user semantic information through spoken language. 
We conduct a user study with blindfolded participants in an everyday indoor environment. 
Our results demonstrate that DRAGON is able to communicate with the user smoothly, provide a good guiding experience, and connect users with their surrounding environment in an intuitive manner.   
[[Paper]](https://arxiv.org/abs/2307.06924) [[Website]](https://sites.google.com/view/dragon-wayfinding) [[Video]](https://youtube.com/playlist?list=PLL4IPhbfiY3YkITpyLjeroak_wBn151pn&si=JNUKi5sOc7iRxJj0)  

<img src="/images/wayfinding_new.png" width="450" />    


## Machine Learning

### Robust Deep Reinforcement Learning with Adversarial Attacks
We propose adversarial attacks to perturb reinforcement learning algorithms (e.g. DQN, DDPG, etc), and then uses adversarial training to improve the robustness of these algorithms.
We found that our adversarial training significantly improves the robustness of RL algorithms to parameter variations in OpenAI Gym benchmarks.  
[[Paper]](https://arxiv.org/abs/1712.03632) [[Video]](https://www.youtube.com/watch?v=8xPaca3cjEU) [[Poster]](/files/daslab_poster.pdf) [[Supplementary materials]](https://shuijing725.github.io/files/Supplementary_for_Robust_Deep_Reinforcement_Learning_with_Adversarial_Attacks.pdf)


### Off Environment Evaluation Using Convex Risk Minimization   
Applying reinforcement learning (RL) methods on robots typically involves training a policy in simulation and deploying it on a robot in the real world. 
However, model mismatch between the real world and the simulator causes RL agents to perform suboptimally.
To address this, we propose a convex risk minimization algorithm to estimate the model mismatch between the simulator and the target domain. 
We show that this estimator can be used to evaluate performance of RL agents in the target domain, effectively bridging the gap between simulation and real world. 
Our experiments demonstrate that our method effectively evaluates performance of policies in OpenAI Gym environments and a real Kinova Gen3 arm.  
[[Paper]](https://arxiv.org/abs/2112.11532) [[Code]](https://github.com/pulkitkatdare/offenveval)




