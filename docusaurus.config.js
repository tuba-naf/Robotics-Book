import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Robotics Book',
  tagline: 'Build Humanoid Robots That See, Think, and Act', // Catchy hero tagline
  favicon: 'img/favicon.ico',

  url: 'https://your-github-username.github.io',
  baseUrl: '/',
  organizationName: 'your-github-username',
  projectName: 'Robotics-Book',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    navbar: {
      title: 'Robots are coming 🤖',
      // logo: {
      //   alt: 'Robotics Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Book',
        },
        {
          href: 'https://github.com/your-github-username/Robotics-Book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Explore the Book',
          items: [
            { label: 'Introduction', to: '/introduction' },
            { label: 'Course Overview', to: '/course-overview' },
            { label: 'Modules', to: '/module-1-ros2' },
            { label: 'Learning Outcomes', to: '/learning-outcomes' },
            { label: 'Weekly Breakdown', to: '/weekly-breakdown' },
            { label: 'Capstone & Assessments', to: '/assessments' },
          ],
        },
        {
          title: 'Resources & Community',
          items: [
            { label: 'GitHub Repo', href: 'https://github.com/your-github-username/Robotics-Book' },
            { label: 'Panavarsity', href: 'https://ai-native.panaversity.org/' },
            { label: 'NVIDIA Isaac', href: 'https://developer.nvidia.com/isaac-sim' },
          ],
        },
        {
          title: 'Contact',
          items: [
            { label: 'Connect on Linkedin', href: 'https://www.linkedin.com/in/tuba-nafees-90586b12a/' },
            { label: 'Follow Robotics Trends', href: '#' }, // Placeholder for social or newsletter
          ],
        },
      ],
      // Catchy footer statement
      copyright: `© ${new Date().getFullYear()} Robotics Book — Empowering you to build humanoid robots that think, see, and act!`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};

export default config;
