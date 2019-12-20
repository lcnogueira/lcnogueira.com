import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import getThemeColor from '../../utils/getThemeColor';
import * as S from './styled';

function Pagination({ tag, currentPage, numPages }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  let prevPage;
  if (tag) {
    prevPage = currentPage - 1 === 1 ? `${tag}` : `${tag}/${currentPage - 1}`;
  } else {
    prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  }
  const nextPage = tag
    ? `${tag}/${currentPage + 1}`
    : `/page/${currentPage + 1}`;

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
        {currentPage} of {numPages}
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
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  tag: PropTypes.string,
};

export default Pagination;
