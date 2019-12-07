import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/seo';
import GlobalStyles from '../styles/global';

const Container = styled.section`
  background: var(--background);
  font-family: -apple-system, BlinkMacSystemFont, 'San Francisco',
    'Helvetica Neue', Helvetica, Ubuntu, Roboto, Noto, 'Segoe UI', Arial,
    sans-serif;
  color: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    background-size: 280px;
  }
`;

const Title = styled.h1`
  background: var(--background);
  color: var(--texts);
  font-size: 120px;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Text = styled.p`
  background: var(--background);
  color: var(--texts);
  font-family: Courier, monospace;
`;

const Button = styled(Link)`
  background: var(--background);
  color: var(--texts);
  border: 1px solid var(--borders);
  border-radius: 6px;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 0.06em;
  line-height: 32px;
  margin-top: 1rem;
  padding: 0 10px;
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.6;
  }
`;

const NotFoundPage = () => (
  <Container>
    <SEO title="404: Not found" />
    <GlobalStyles />
    <Title>404</Title>
    <Text>Seems you haven't found what you've been looking for :(</Text>
    <Button to="/">Back to the website!</Button>
  </Container>
);

export default NotFoundPage;
