import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Robotics-Book/',
    component: ComponentCreator('/Robotics-Book/', 'a5d'),
    exact: true
  },
  {
    path: '/Robotics-Book/',
    component: ComponentCreator('/Robotics-Book/', 'f2e'),
    routes: [
      {
        path: '/Robotics-Book/',
        component: ComponentCreator('/Robotics-Book/', '6ba'),
        routes: [
          {
            path: '/Robotics-Book/',
            component: ComponentCreator('/Robotics-Book/', '82c'),
            routes: [
              {
                path: '/Robotics-Book/assessments',
                component: ComponentCreator('/Robotics-Book/assessments', 'a38'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics-Book/cloud-lab',
                component: ComponentCreator('/Robotics-Book/cloud-lab', '7c8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics-Book/course-overview',
                component: ComponentCreator('/Robotics-Book/course-overview', 'e31'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics-Book/hardware-requirements',
                component: ComponentCreator('/Robotics-Book/hardware-requirements', 'cde'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics-Book/introduction',
                component: ComponentCreator('/Robotics-Book/introduction', 'a25'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics-Book/lab-architecture',
                component: ComponentCreator('/Robotics-Book/lab-architecture', '8d7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics-Book/learning-outcomes',
                component: ComponentCreator('/Robotics-Book/learning-outcomes', '3f9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics-Book/module-1-ros2',
                component: ComponentCreator('/Robotics-Book/module-1-ros2', 'b84'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics-Book/module-2-gazebo-unity',
                component: ComponentCreator('/Robotics-Book/module-2-gazebo-unity', '52f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics-Book/module-3-isaac',
                component: ComponentCreator('/Robotics-Book/module-3-isaac', '215'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics-Book/module-4-vla',
                component: ComponentCreator('/Robotics-Book/module-4-vla', '571'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics-Book/physical-ai-importance',
                component: ComponentCreator('/Robotics-Book/physical-ai-importance', 'a47'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics-Book/preface',
                component: ComponentCreator('/Robotics-Book/preface', '36d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics-Book/student-kit',
                component: ComponentCreator('/Robotics-Book/student-kit', 'd40'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Robotics-Book/weekly-breakdown',
                component: ComponentCreator('/Robotics-Book/weekly-breakdown', 'abf'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
