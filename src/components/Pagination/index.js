import React from 'react';
import propTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import getThemeColor from '../../utils/getThemeColor';
import * as S from './styled';

function Pagination({ currentPage, numPages }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

  return (
    <S.PaginationWrapper>
      {!isFirst && (
        <AniLink
          to={prevPage}
          cover
          direction="left"
          bg={getThemeColor()}
          duration={0.6}
        >
          ← previous page
        </AniLink>
      )}
      <p>
        {currentPage} de {numPages}
      </p>
      {!isLast && (
        <AniLink
          to={nextPage}
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
        >
          next page →
        </AniLink>
      )}
    </S.PaginationWrapper>
  );
}

Pagination.propTypes = {
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
};

export default Pagination;
