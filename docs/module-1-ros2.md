---
id: module-1-ros2
title: "Module 1: ROS2"
---

# Module 1: ROS2

This module covers the fundamentals of ROS2.
# Module 1: The Robot’s Nervous System

If robots were humans, ROS 2 would be their nervous system. It connects sensors like cameras and IMUs, actuators like motors, and the AI brain, allowing perception, decision-making, and action. Without this network, a robot is just metal and circuits — it can’t feel, respond, or move purposefully.

Think of ROS 2 as the strings and levers of a mechanical puppet. Each string (node) can control one limb, while the puppet master (AI) decides what to do. Without the strings, the puppet can’t wave, point, or interact. With ROS 2, your robot moves, senses, and reacts in a coordinated way.

---

## What You Will Learn

- **Nodes:** Like individual neurons, nodes perform one specific task — reading a sensor, processing data, or sending a command. By combining nodes, you create complex, coordinated behaviors. Imagine a small humanoid on your desk: one node watches for red balls, another moves the arm, and together they wave when a ball appears.  
- **Topics:** These are the nerve fibers carrying information between nodes. A camera node sends images over a topic; a motor controller node subscribes to that topic and moves accordingly. It’s like neurons in your hand sensing a hot object and sending signals to your muscles to withdraw.  
- **Services & Actions:** These are reflexes or long-running commands. Services are like asking, “Can you move your hand to X?” and getting a yes/no response. Actions let the robot execute a sequence of steps — “walk to the table while avoiding obstacles” — reporting progress along the way, similar to following a recipe step by step.  
- **URDF (Unified Robot Description Format):** The blueprint of your robot. URDF defines links (bones), joints, and sensors. It ensures every joint moves correctly, sensors point the right way, and the robot respects physical limits — like an architect’s blueprint for a building.

---

As you work through ROS 2, you will start small: connect a sensor to a node, read data, send it to another node controlling a motor. Then scale: make the robot respond to voice commands, walk across a room, or avoid obstacles. Each step reinforces the perception → decision → action cycle.

Imagine your robot sitting in front of you. A camera node detects a red ball. It sends the coordinates over a topic to the arm controller node. The arm executes a smooth wave, respecting the URDF constraints. The robot has just perceived, decided, and acted — all thanks to ROS 2.

---

## Why ROS 2 Matters

- Modular design allows development of individual components independently. Vision, navigation, and motor control evolve separately but integrate seamlessly.  
- Reusable across robots. Understanding ROS 2 lets you control robotic arms, drones, or full humanoids without starting from scratch.  
- Clean separation of high-level AI logic from low-level control makes debugging and scaling easier.  

Once ROS 2 is mastered, your robot is no longer lifeless. It reacts intelligently to the environment, executing coordinated, purposeful movements.

---

## Key Resources

- **ROS 2 Installation & Tutorials**  
  [Official ROS 2 Docs](https://docs.ros.org/en/humble/index.html)  

- **Python Client for ROS 2 (`rclpy`)**  
  [Python ROS 2 Guide](https://docs.ros.org/en/humble/Concepts/About-Python-Client-Library.html)  

- **URDF Basics**  
  [URDF Tutorials](https://wiki.ros.org/urdf/Tutorials)  

- **Example Projects to Explore:**  
  - Waving arm using camera detection  
  - Line-following robot using LiDAR  
  - Obstacle avoidance with simulated sensors  

By completing this module, you build the **fundamental nervous system** of any robot — a foundation for simulation, perception, and humanoid autonomy.

