import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Post from '../components/Post';
import Pagination from '../components/Pagination';

import * as S from '../components/ListWrapper/styled';

const BlogList = props => {
  const { edges: postList } = props.data.allMarkdownRemark;

  const { currentPage, numPages } = props.pageContext;

  return (
    <Layout>
      <SEO title="Home" />
      <S.ListWrapper>
        {postList.map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter: { tags, date, description, title },
              timeToRead,
            },
          }) => (
            <Post
              key={id}
              slug={slug}
              tags={tags}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
            />
          )
        )}
      </S.ListWrapper>
      <Pagination currentPage={currentPage} numPages={numPages} />
    </Layout>
  );
};

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
          }
          timeToRead
        }
      }
    }
  }
`;

export default BlogList;
