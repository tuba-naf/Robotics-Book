---
id: cloud-lab
title: Cloud Lab
---

# Cloud Lab

This section provides information about the cloud lab setup.
# Using the Cloud to Train and Test Robots

Not everyone has access to a high-end workstation with an RTX GPU. The **cloud lab option** lets you run simulations and train AI models on remote servers, then deploy them locally to your robot.

---

## 1. Cloud Workstations — Your Remote Robot Gym

Cloud instances (AWS, Azure, or NVIDIA Omniverse Cloud) can:

- Run **NVIDIA Isaac Sim** and Gazebo remotely  
- Train AI models without requiring an expensive local PC  
- Handle heavy computation for perception, SLAM, and reinforcement learning

Think of this as sending your robot to a **virtual university**: it can practice and learn without needing a local campus.

---

## 2. Local Edge Deployment — Bringing the Robot Home

Even though your AI trains in the cloud, **real-world execution still needs local hardware**:

- Jetson Orin kits run the trained models  
- Sensors capture real-world data (vision, depth, orientation)  
- Robot executes tasks in physical space

> It’s like a student learning theory online but performing lab experiments in their home garage — cloud for practice, edge for execution.

---

## 3. Benefits of Cloud Labs

- **Lower upfront cost:** no need to buy a powerful GPU immediately  
- **Scalable computation:** increase GPU hours when needed  
- **Remote access:** students can train and experiment from anywhere  

This model allows anyone with a **modest computer and an edge kit** to participate in advanced robotics learning.

---

## 4. Limitations to Consider

- **Latency:** Real-time robot control from the cloud is not safe — delays can cause errors  
- **Connectivity:** Requires a stable internet connection  
- **Cloud cost:** Continuous use of GPUs adds up; careful management is necessary  

The solution is **train in the cloud, deploy locally** — best of both worlds.

---

## Key Resources

- AWS RoboMaker: [https://aws.amazon.com/robomaker/](https://aws.amazon.com/robomaker/)  
- NVIDIA Omniverse Cloud: [https://developer.nvidia.com/omniverse](https://developer.nvidia.com/omniverse)  
- Remote ROS 2 Deployment: [https://docs.ros.org/en/rolling/Installation.html](https://docs.ros.org/en/rolling/Installation.html)  
- Jetson Orin for Edge AI: [https://developer.nvidia.com/embedded/jetson-orin-nano](https://developer.nvidia.com/embedded/jetson-orin-nano)

