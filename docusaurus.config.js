// @ts-check

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Interview Vault",
  tagline: "Practice -> Perform -> Progress -> Repeat",

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: "https://docs.adhyandas.dev",
  baseUrl: "/",

  organizationName: "thetrickuser",
  projectName: "interview-prep",
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
          editUrl:
            "https://github.com/thetrickuser/interview-prep/edit/main/docs/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Interview Vault",
        logo: {
          alt: "Interview Vault Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "javaSidebar",
            position: "left",
            label: "Java",
          },
          {
            type: "docSidebar",
            sidebarId: "springBootSidebar",
            position: "left",
            label: "Spring Boot",
          },
          {
            type: "docSidebar",
            sidebarId: "reactSidebar",
            position: "left",
            label: "React",
          },
          {
            type: "docSidebar",
            sidebarId: "sqlSidebar",
            position: "left",
            label: "SQL",
          },
          {
            type: "search",
            position: "right",
          },
          {
            href: "https://github.com/thetrickuser/interview-prep",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/adhyan1011",
              },
              {
                label: "Website",
                href: "https://www.adhyandas.dev",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Adhyan Das. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    },
};

export default config;
