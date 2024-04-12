import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Skylux MC',
  tagline: 'Somos um servidor de mini jogos de Minecraft que conta com vários modos de jogo populares!',
  favicon: 'img/favicon/favicon.ico',
  url: 'https://skyluxmc.vercel.app',
  baseUrl: '/',
  organizationName: 'skylux-network',
  projectName: 'skyluxmc',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en']
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js'
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 4,
          blogSidebarCount: 8,
          blogSidebarTitle: 'Últimas Notícias'
        },
        theme: {
          customCss: './src/css/custom.css',
        }
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/skyluxmc-social-card.png',
      navbar: {
        title: 'Skylux MC',
        logo: {
          alt: 'SkyluxMC Logo',
          src: 'img/skyluxmc.svg'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Geral',
          },
          {
            to: '/rules',
            label: 'Regras',
            position: 'left'
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          }
        ],
      },
      footer: {
        links: [
          {
            title: 'Sobre',
            items: [
              {
                label: 'Início',
                to: '/'
              },
              {
                label: 'Geral',
                to: '/docs/general'
              }
            ],
          },
          {
            title: 'Wiki',
            items: [
              {
                label: 'BedWars',
                href: '/docs/wiki/bedwars'
              },
              {
                label: 'SkyWars',
                href: '/docs/wiki/skywars'
              }
            ],
          },
          {
            title: 'Recursos',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/skylux-network'
              },
            ],
          },
          {
            title: 'Comunidade',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/skyluxmc'
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@SkyluxMC'
              }
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'Blog',
                href: '/blog'
              },
              {
                label: 'Privacidade',
                href: '#'
              },
              {
                label: 'Termos',
                href: '#'
              }
            ],
          }
        ],
        copyright: `© ${new Date().getFullYear()} Skylux MC | Designed by Renildo`,
      },
      themes: ['@docusaurus/theme-search-algolia'],
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true
      },
      // algolia: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: '',
      //   contextualSearch: true
      // }
    }),
  plugins: [
    [
      'pwa',
      {
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'img/skyluxmc.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(4, 131, 153)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#fff',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/skyluxmc.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/skyluxmc.png',
            color: 'rgb(4, 131, 153)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/skyluxmc.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#fff',
          },
        ],
      },
    ],
  ],
};

export default config;