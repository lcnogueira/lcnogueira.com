import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import RecommendedPosts from '../components/RecommendedPosts';
import Comments from '../components/Comments';

import {
  PostHeader,
  PostTitle,
  PostDescription,
  PostDate,
  MainContent,
} from '../styles/base';

const BlogPost = ({ data, pageContext }) => {
  const { title, description, date, image } = data.markdownRemark.frontmatter;
  const { timeToRead, html, fields } = data.markdownRemark;
  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;

  return (
    <Layout>
      <SEO title={title} description={description} image={image} />
      <PostHeader>
        <PostDate>
          {date} • {timeToRead} min read
        </PostDate>
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
      </PostHeader>
      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </MainContent>
      <RecommendedPosts next={next} previous={previous} />
      <Comments url={fields.slug} title={title} />
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "en-us", formatString: "MMMM Do YYYY")
        image
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;
