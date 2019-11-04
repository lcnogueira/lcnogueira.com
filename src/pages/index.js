import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostItem from '../components/PostItem';

function IndexPage() {
  const {
    allMarkdownRemark: { edges: postList },
  } = useStaticQuery(
    graphql`
      query PostList {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                background
                category
                date(locale: "en-us", formatString: "MMMM Do YYYY")
                description
                title
              }
              timeToRead
              wordCount {
                words
              }
            }
          }
        }
      }
    `
  );

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        ({
          node: {
            frontmatter: { background, category, date, description, title },
            timeToRead,
            fields: { slug },
          },
        }) => (
          <PostItem
            slug={slug}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
            background={background}
          />
        )
      )}
    </Layout>
  );
}

export default IndexPage;
