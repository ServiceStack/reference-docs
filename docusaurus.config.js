// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'servicestack-reference',
  tagline: 'ServiceStack Reference Documentation',
  url: 'https://reference.servicestack.net',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ServiceStack', // Usually your GitHub org/user name.
  projectName: 'reference-docs', // Usually your repo name.
  scripts: [
      "https://code.iconify.design/iconify-icon/1.0.0/iconify-icon.min.js"
      ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: ['docusaurus-theme-search-typesense'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ServiceStack Reference',
        logo: {
          alt: 'ServiceStack Reference',
          src: 'img/servicestack.svg',
        },
        items: [
          {
            href: "/api",
            label: "API",
            position: "left",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ServiceStack/ServiceStack',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["csharp"],
      },
      typesense: {
        typesenseCollectionName: 'typesense_docs', // Replace with your own doc site's name. Should match the collection name in the scraper settings.

        typesenseServerConfig: {
          nodes: [
            {
              host: 'search.reference.servicestack.net',
              port: 443,
              protocol: 'https',
            }
          ],
          apiKey: 'N4N8bF0XwyvzwCGwm3CKB0QcnwyWtygo',
        },

        // Optional: Typesense search parameters: https://typesense.org/docs/0.21.0/api/search.md#search-parameters
        typesenseSearchParameters: {},

        // Optional
        contextualSearch: false,
      }
    }),
};

module.exports = config;
