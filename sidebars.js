module.exports = {
  docs: [
    'preface',
    'introduction',
    'course-overview',
    {
      type: 'category',
      label: 'Modules',
      collapsed: false,
      items: [
        'module-1-ros2',
        'module-2-gazebo-unity',
        'module-3-isaac',
        'module-4-vla',
      ],
    },
    'physical-ai-importance',
    'learning-outcomes',
    'weekly-breakdown',
    'assessments',
    {
      type: 'category',
      label: 'Infrastructure',
      collapsed: false,
      items: [
        'hardware-requirements',
        'lab-architecture',
        'cloud-lab',
        'student-kit',
      ],
    },
  ],
};
