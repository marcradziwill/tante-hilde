/* eslint-disable no-unused-vars */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const website = require('./src/utils/website');

const siteUrl = 'https://tante-hilde.org';

const gatsbySettings = {
  siteMetadata: {
    siteUrl,
    title: website.siteTitle,
    description: website.siteDescription,
    canonicalUrl: siteUrl,
    image: website.siteLogo,
    author: {
      name: website.author,
      minibio: website.minibio,
    },
    keywords: [
      'Software Developer',
      'JavaScript Training',
      'Developer Advocate',
    ],
    organization: {
      name: website.organization,
      email: website.email,
      address: {
        streetNumber: website.streetNumber,
        zipCity: website.zipCity,
      },
      url: siteUrl,
      logo: website.siteLogo,
    },
    social: {
      fbAppID: '',
      ogLanguage: website.ogLanguage,
      facebook: website.facebook,
      youtube: website.youtube,
      instagram: website.instagram,
    },
  },
  plugins: [
    `gatsby-transformer-csv`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/`,
        name: 'content',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md', '.markdown'],
        gatsbyRemarkPlugins: [
          `gatsby-remark-reading-time`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: '#ffffff',
              maxWidth: 1280,
            },
          },
          `gatsby-remark-embedder`,
        ],
      },
    },
    {
      resolve: 'gatsby-remark-images',
      options: {
        backgroundColor: '#ffffff',
        maxWidth: 1280,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        minimizeDeprecationNotice: true,
        // your WordPress source
        baseUrl: `tante-hilde.eu`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false,
        includedRoutes: [
          '**/categories',
          '**/posts',
          '**/pages',
          '**/media',
          '**/tags',
          '**/taxonomies',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: website.siteTitle,
        // eslint-disable-next-line
        short_name: website.siteTitleShort,
        description: website.siteDescription,
        // eslint-disable-next-line
        start_url: website.pathPrefix,
        // eslint-disable-next-line
        background_color: website.backgroundColor,
        // eslint-disable-next-line
        theme_color: website.themeColor,
        display: 'standalone',
        // icon: `src/images/tantehilde-gruen.png`,
        icon: `src/images/tantehilde-gruen.png`,
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-PZJKCK9',
        includeInDevelopment: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://tante-hilde.org',
        sitemap: 'https://tante-hilde.org/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },
    'gatsby-plugin-remove-serviceworker',
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [
          '/de/datenschutz',
          '/privacy',
          '/de/impressum',
          '/imprint',
          '/contact/mail-send',
          '/de/kontakt/nachricht-versendet',
          '/subscribed',
          '/de/angemeldet',
          '/de/offline-plugin-app-shell-fallback',
        ],
      },
    },
  ],
};
if (process.env.NODE_ENV === `production`) {
  gatsbySettings.plugins.push(`gatsby-plugin-offline`);
}
module.exports = gatsbySettings;
