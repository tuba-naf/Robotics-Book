---
id: hardware-requirements
title: Hardware Requirements
---

# Hardware Requirements

This section lists the recommended hardware for the course.

# What You Need to Run Physical AI

Physical AI isn’t just about code — it’s about connecting **software, simulation, and real-world hardware**. To successfully train, test, and deploy humanoid robots, you need the right equipment. Think of it as building a **mini robotics ecosystem**.

---

## 1. Digital Twin Workstation — Simulation & Training HQ

Your workstation is where heavy computation happens. It’s the **robot’s training gym**, letting you simulate physics, sensors, and AI safely.

- **GPU:** NVIDIA RTX 4070 Ti (12 GB) or higher  
  Needed for **graphics, physics, and AI inference** (Ray-tracing, USD assets).  
- **CPU:** Intel i7 13th Gen or AMD Ryzen 9  
  Handles physics calculations and sensor simulation.  
- **RAM:** 64 GB DDR5 (minimum 32 GB)  
  Ensures large simulations run without crashes.  
- **OS:** Ubuntu 22.04 LTS  
  ROS 2 runs natively here, making integration smooth.  

Without this, your robot is like an athlete **without a gym or training ground** — it can’t learn complex movements.

---

## 2. Physical AI Edge Kit — Robot “Brain & Senses”

Even with a simulated robot, you need a **compact kit** to deploy AI in the real world. This acts as your robot’s **head**: brain + eyes + inner ear + voice interface.

| Component | Role |
|-----------|------|
| Jetson Orin (Nano/NX) | Lightweight AI brain — runs inference for real-world deployment |
| RealSense D435i / Depth Camera | Provides RGB + depth vision for perception & navigation |
| USB IMU (or built-in) | Inner ear: tracks balance and orientation |
| Microphone / Speaker Array | Enables voice command input and audio feedback |

This kit allows you to **test AI models on real hardware** before investing in full humanoid robots.

---

## 3. Robot Lab — Choose Your Level

Depending on budget and goals, you can pick one of three approaches:

- **Option A — Proxy (Budget-Friendly):** Quadruped or robotic arm (Unitree Go2 Edu)  
  Affordable, durable, supports ROS 2. Perfect for learning basics.  
- **Option B — Miniature Humanoid:** Table-top robots like Robotis OP3 or Hiwonder TonyPi Pro  
  Small humanoid form, good for kinematics practice, limited AI performance.  
- **Option C — Full Humanoid Lab:** High-end robots like Unitree G1  
  Capable of full locomotion, precise manipulation, and SDK access.  

> Think of it like learning to drive: Option A is a **simulator car**, Option B is a **toy car**, Option C is a **real vehicle** on the road.

---

## 4. Why Proper Hardware Matters

- Simulation requires **high VRAM and CPU** — physics and AI models are heavy.  
- Edge kits provide **hands-on, real-world deployment experience**.  
- A well-equipped lab ensures you can **train, test, and iterate** safely and efficiently.  

Even the best code is useless if the robot cannot perceive, move, or act in reality. Hardware is the bridge between **digital intelligence and physical embodiment**.

---

## Key Resources

- [NVIDIA Isaac Sim System Requirements](https://developer.nvidia.com/isaac-sim)  
- [Jetson Orin Developer Kit Documentation](https://developer.nvidia.com/embedded/jetson-orin-nano)  
- [Intel RealSense Documentation](https://www.intelrealsense.com/developers/)  
- ROS 2 Hardware Guides: [https://docs.ros.org/en/rolling/Hardware.html](https://docs.ros.org/en/rolling/Hardware.html)

