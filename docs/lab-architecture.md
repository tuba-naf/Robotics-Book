---
id: lab-architecture
title: Lab Architecture
---

# Lab Architecture

This section describes the architecture of the lab environment.
# How Everything Connects

Building a physical AI lab is like **assembling a human body**: brain, senses, muscles, all coordinated to function smoothly. In robotics, these components map to **simulations, edge devices, sensors, and robots**.

---

## 1. Sim Rig — The Robot’s Gym

This is your **high-performance workstation** where your robot learns to move, see, and plan. It runs Gazebo, Unity, and NVIDIA Isaac Sim.

- Performs **heavy physics simulations**  
- Trains AI models for perception, navigation, and task planning  
- Allows rapid iteration without risking hardware

Think of it as a **robot’s training gym** — it practices virtually before stepping into the real world.

---

## 2. Edge Brain — Real-World AI Deployment

The Jetson kit serves as the **robot’s brain in the physical world**.

- Runs trained AI models locally  
- Processes sensor inputs in real time  
- Sends commands to motors/actuators  

It’s like giving a trained athlete a **mind that can process situations instantly** — reacting and performing tasks safely.

---

## 3. Sensors — The Robot’s Eyes and Inner Ear

Sensors feed **real-time perception** to the Edge Brain.

- **Cameras & LiDAR:** See the environment in 3D  
- **IMU:** Tracks balance and orientation  
- **Microphones:** Capture audio for voice commands

Without sensors, the robot is blind and deaf — like a human in total darkness and silence. These components allow **situational awareness and safe interaction**.

---

## 4. Actuators — The Robot’s Muscles

Actuators — whether a **full humanoid or proxy robot** — execute movements and tasks.

- Follow commands from the Edge Brain  
- Perform walking, grasping, and manipulation  
- Translate virtual plans into physical action

Without muscles, even the smartest brain is useless. Actuators bring **intelligence to life**.

---

## 5. Putting It All Together

Your lab should support **simulation → edge deployment → physical execution**.

1. Train and test AI in the **Sim Rig**  
2. Deploy trained models to the **Edge Brain**  
3. Sense the environment using **cameras, IMU, microphones**  
4. Execute actions via **actuators**  

> Imagine training a gymnast virtually, then sending them into a real gym with real equipment — safe practice first, then real-world execution.

---

## Key Resources

- NVIDIA Isaac Sim: [https://developer.nvidia.com/isaac-sim](https://developer.nvidia.com/isaac-sim)  
- ROS 2 Edge Deployment Guides: [https://docs.ros.org/en/rolling/Hardware.html](https://docs.ros.org/en/rolling/Hardware.html)  
- Jetson Orin Docs: [https://developer.nvidia.com/embedded/jetson-orin-nano](https://developer.nvidia.com/embedded/jetson-orin-nano)  
- RealSense Sensors: [https://www.intelrealsense.com/developers/](https://www.intelrealsense.com/developers/)

