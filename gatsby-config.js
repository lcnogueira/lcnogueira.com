require('dotenv').config();

const queries = require('./src/utils/algolia_queries');

const pluginsList = [
  `gatsby-plugin-transition-link`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-react-helmet`,
  // Needs to be the first one to work with gatsby-remark-images
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `uploads`,
      path: `${__dirname}/static/assets/img`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/posts`,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-relative-images',
          options: {
            name: 'uploads',
          },
        },
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 960,
            quality: 80,
            linkImagesToOriginal: false,
          },
        },
        `gatsby-remark-lazy-load`,
        `gatsby-remark-prismjs`,
      ],
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-algolia-search`,
    options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
      queries,
      chunkSize: 10000,
      enablePartialUpdates: true, // default: false
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Luiz Cláudio`,
      short_name: `lcnogueira`,
      start_url: `/`,
      background_color: `#16202c`,
      theme_color: `#16202c`,
      display: `minimal-ui`,
      icon: `static/assets/img/me.png`, // This path is relative to the root of the site.
    },
  },
  `gatsby-plugin-sitemap`,
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  `gatsby-plugin-offline`,
  `gatsby-plugin-netlify-cms`,
];

module.exports = {
  siteMetadata: {
    title: `Luiz Cláudio`,
    author: `@luizcns`,
    position: `Javascript Software Engineer`,
    description: `A blog about Javascript, React, frontend development and other stuff.`,
    authorDescription: `I work at UFERSA at the moment and write about Javascript, React, frontend development and other stuff.`,
    siteUrl: 'https://lcnogueira.com',
  },
  plugins: pluginsList,
};
