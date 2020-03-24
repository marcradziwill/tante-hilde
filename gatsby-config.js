/* eslint-disable no-unused-vars */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const website = require('./src/utils/website');

const siteUrl = 'https://marcradziwill.com';

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

    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
        // icon: `src/images/marc_favicon.png`,
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
        localize: [
          {
            start_url: `/de/`,
            lang: `de`,
            name: `marc radziwill`,
            short_name: `marc radziwill.`,
            description: `Ich bin seit fast 10 Jahren selbstständig als Developer Advocate, Web Entwickler und Frontend Architekt und helfe meinen Kunden Projekte in den Bereichen technische Beratung, App- und Webentwicklung zu realisieren.`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GTM,
        includeInDevelopment: true,
        defaultDataLayer: { platform: 'marcradziwill' },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https:/marcradziwill.com',
        sitemap: 'https://marcradziwill.com/sitemap.xml',
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
