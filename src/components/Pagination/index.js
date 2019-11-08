import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'gatsby';

import * as S from './styled';

function Pagination({ currentPage, numPages }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

  return (
    <S.PaginationWrapper>
      {!isFirst && <Link to={prevPage}>← previous page</Link>}
      <p>
        {currentPage} de {numPages}
      </p>
      {!isLast && <Link to={nextPage}>next page →</Link>}
    </S.PaginationWrapper>
  );
}

Pagination.propTypes = {
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
};

export default Pagination;
