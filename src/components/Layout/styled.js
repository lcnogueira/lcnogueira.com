import styled from 'styled-components';

export const LayoutWrapper = styled.section`
  display: flex;
`;

export const LayoutMain = styled.main`
  background: var(--background);
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;

  /* It will compile to: 
    body#grid main (select the "main" element only when a child of the "body" with a "grid" id) 
  */
  body#grid & {
    grid-template-areas:
      'posts'
      'pagination';
  }
`;
