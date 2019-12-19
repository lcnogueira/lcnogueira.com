import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const PostLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  &:hover {
    color: var(--highlight);
  }
`;

export const PostWrapper = styled.section`
  border-bottom: 1px solid var(--borders);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 2rem 3rem;

  ${media.lessThan('large')`
    padding: 2rem 1rem;
  `}

  body#grid & {
    background-color: var(--background);
    border: none;
    padding: 2em 1rem;
    flex-direction: column;
    justify-content: center;
  }
`;

export const PostTagWrapper = styled.div`
  display: flex;
`;

export const PostTag = styled.div`
  background: ${props =>
    props.background ? props.background : 'var(--highlight)'};
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  min-height: auto;
  min-width: auto;
  padding: 0.2rem 0.5rem;
  margin-bottom: 0.7rem;
  margin-right: 0.5rem;

  body#grid & {
    margin-bottom: 1.5rem;
  }
`;

export const PostTagLink = styled(AniLink)`
  color: var(--white);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    opacity: 0.7;
  }
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan('large')`
    margin: 0;
  `}
`;

export const PostDate = styled.time`
  font-size: 0.9rem;
`;

export const PostTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`;

export const PostDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`;
