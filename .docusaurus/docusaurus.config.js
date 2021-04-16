export default {
  "title": "OpenFMB",
  "tagline": "OpenFMB from Open Energy Solutions",
  "url": "https://openenergysolutions.com/openfmb",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "openenergysolutions",
  "projectName": "openfmb.docs",
  "themeConfig": {
    "navbar": {
      "title": "OpenFMB",
      "logo": {
        "alt": "Open Energy Solutions Inc - OpenFMB",
        "src": "img/logo.png"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "Tutorial",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "href": "https://github.com/openenergysolutions/openfmb.docs",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Tutorial",
              "to": "/docs/intro"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/openfmb"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/openenergysolutions/openfmb.docs"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Open Energy Solutions, Inc. Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/code/tburdick/src/openfmb.docs/sidebars.js",
          "editUrl": "https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/openenergysolutions/openfmb.docs/edit/develop/website/blog/"
        },
        "theme": {
          "customCss": "/code/tburdick/src/openfmb.docs/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};