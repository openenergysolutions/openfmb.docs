/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'OpenFMB Adapter Toolset',
  tagline: 'Open Source from Open Energy Solutions',
  url: 'https://openenergysolutions.github.io/openfmb.docs/',
  baseUrl: '/openfmb.docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'openenergysolutions', // Usually your GitHub org/user name.
  projectName: 'openfmb.docs', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-195209973-1',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: 'OpenFMB Adapter Toolset',
      logo: {
        alt: 'Open Energy Solutions Inc - OpenFMB',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'openfmb/intro',
          position: 'left',
          label: 'Introduction',
        },
        {
          type: 'doc',
          docId: 'adapter/index',
          position: 'left',
          label: 'Adapter',
        },
        {
          type: 'doc',
          docId: 'adapter-config-tool/index',
          position: 'left',
          label: 'Adapter Config Tool',
        },
        {
          type: 'doc',
          docId: 'hmi/index',
          position: 'left',
          label: 'HMI',
        },
        {
          href: 'https://github.com/openenergysolutions/openfmb.docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/openfmb/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/openfmb',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/openenergysolutions/openfmb.docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Open Energy Solutions, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};
