import React from 'react';
import PropTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';

import useSiteMetadata from '../../hooks/useSiteMetadata';

import * as S from './styled';

const Comments = ({ url, title }) => {
  const { siteUrl } = useSiteMetadata();
  const completeURL = `${siteUrl}${url}`;

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comments</S.CommentsTitle>
      <ReactDisqusComments
        shortname={process.env.GATSBY_DISQUS_SHORTNAME}
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  );
};

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Comments;
