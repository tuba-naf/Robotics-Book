import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '0ff'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'ed1'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '4d8'),
            routes: [
              {
                path: '/assessments',
                component: ComponentCreator('/assessments', '7b7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/cloud-lab',
                component: ComponentCreator('/cloud-lab', '636'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/course-overview',
                component: ComponentCreator('/course-overview', 'd0f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/hardware-requirements',
                component: ComponentCreator('/hardware-requirements', 'e07'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/introduction',
                component: ComponentCreator('/introduction', 'f62'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/lab-architecture',
                component: ComponentCreator('/lab-architecture', 'b5a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/learning-outcomes',
                component: ComponentCreator('/learning-outcomes', 'cc8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/module-1-ros2',
                component: ComponentCreator('/module-1-ros2', '7de'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/module-2-gazebo-unity',
                component: ComponentCreator('/module-2-gazebo-unity', 'ae3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/module-3-isaac',
                component: ComponentCreator('/module-3-isaac', '472'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/module-4-vla',
                component: ComponentCreator('/module-4-vla', '5d8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/physical-ai-importance',
                component: ComponentCreator('/physical-ai-importance', 'c34'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/preface',
                component: ComponentCreator('/preface', '72e'),
                exact: true
              },
              {
                path: '/student-kit',
                component: ComponentCreator('/student-kit', 'b89'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/weekly-breakdown',
                component: ComponentCreator('/weekly-breakdown', 'a2d'),
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
