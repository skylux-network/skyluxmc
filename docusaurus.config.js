import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Skylux MC',
  tagline: 'Somos um servidor de mini jogos de Minecraft que conta com vários modos de jogo populares!',
  favicon: 'img/favicon.ico',
  url: 'https://skyluxmc.vercel.app',
  baseUrl: '/',
  organizationName: 'skylux-network',
  projectName: 'skyluxmc',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 3,
          blogSidebarCount: 5,
          blogSidebarTitle: 'Últimas Notícias'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/skyluxmc-social-card.png',
      navbar: {
        title: 'Skylux MC',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Geral',
          },
          {
            label: 'Minijogos',
            items: [
              {
                label: 'BedWars',
                to: '/docs/wiki/bedwars'
              },
              {
                label: 'SkyWars',
                to: '/docs/wiki/skywars'
              },
              {
                label: 'SkyRush',
                to: '/docs/wiki/skyrush'
              }
            ]
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            to: '/blog',
            label: 'Loja',
            position: 'right'
          }

        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      }
    }),

  plugins: [[require.resolve('docusaurus-lunr-search'), {
    languages: ['en']
  }]],
};

export default config;