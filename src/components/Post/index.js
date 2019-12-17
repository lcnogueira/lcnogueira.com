import React from 'react';
import PropTypes from 'prop-types';

import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

const Post = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) => (
  <S.PostLink
    to={slug}
    cover
    direction="right"
    bg={getThemeColor()}
    duration={0.6}
  >
    <S.PostWrapper>
      <S.PostTag background={background}>{category}</S.PostTag>
      <S.PostInfo>
        <S.PostDate>
          {date} • {timeToRead} min read
        </S.PostDate>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostDescription>{description}</S.PostDescription>
      </S.PostInfo>
    </S.PostWrapper>
  </S.PostLink>
);

Post.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Post;
