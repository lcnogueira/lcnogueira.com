import styled from 'styled-components';

/* It will compile to: 
    section#grid main (select the "main" element only when a child of the "section" with a "grid" id) 
  */
export const ListWrapper = styled.section`
  body#grid & {
    background-color: var(--borders);
    border-bottom: 1px solid var(--borders);
    display: grid;
    grid-area: posts;
    grid-gap: 1px;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  }
`;
