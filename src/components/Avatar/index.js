import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled';

function Avatar() {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "me.png" }) {
          childImageSharp {
            fluid(maxWidth: 128) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />;
}

export default Avatar;
