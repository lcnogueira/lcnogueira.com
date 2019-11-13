import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled';

function Avatar() {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "me.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 60) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  );

  return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />;
}

export default Avatar;
