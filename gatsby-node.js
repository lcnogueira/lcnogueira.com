/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

// Adds the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    // Use `createFilePath` to turn markdown files in our 'src/pages' directory into '/slug'
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
    });

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: 'slug',
      value: `/blog/${slug.slice(12)}`,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const res = await graphql(`
    query PostList {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              date(locale: "en-us", formatString: "MMMM Do YYYY")
              description
              title
              image
            }
            timeToRead
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  const posts = res.data.allMarkdownRemark.edges;

  // Creates the page for each post
  posts.forEach(({ node, next, previous }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug: node.fields.slug,
        previousPost: next,
        nextPost: previous,
      },
    });
  });

  // If you wanna change the number of posts per page, change the const below
  const postsPerPage = 6;

  //Num of pages for each posts page
  const numPages = Math.ceil(posts.length / postsPerPage);
  // Creates the page for each posts page
  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/` : `/page/${index + 1}`,
      component: path.resolve(`./src/templates/blog-list.js`),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
      },
    });
  });

  // Extract tag data from query
  const tags = res.data.tagsGroup.group;
  //For each one of the tags
  tags.forEach(({ fieldValue: tag, totalCount }) => {
    //Num of pages for each tags post page
    const numPages = Math.ceil(totalCount / postsPerPage);
    // Creates the page for each tags post page
    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/tags/${tag}` : `/tags/${tag}/${index + 1}`,
        component: path.resolve(`./src/templates/tags-post-list.js`),
        context: {
          tag,
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
        },
      });
    });
  });
};
