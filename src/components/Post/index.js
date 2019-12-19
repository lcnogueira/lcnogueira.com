import React from 'react';
import PropTypes from 'prop-types';

import getThemeColor from '../../utils/getThemeColor';
import getTagColor from '../../utils/getTagColor';

import * as S from './styled';

const Post = ({ slug, tags, date, timeToRead, title, description }) => (
  <S.PostWrapper>
    <S.PostTagWrapper>
      {tags &&
        tags.map((tag, i) => (
          <S.PostTagLink
            key={i}
            to={`/${tag}`}
            cover
            direction="right"
            bg={getThemeColor()}
            duration={0.6}
          >
            <S.PostTag background={getTagColor(tag)}>{tag}</S.PostTag>
          </S.PostTagLink>
        ))}
    </S.PostTagWrapper>
    <S.PostLink
      to={slug}
      cover
      direction="right"
      bg={getThemeColor()}
      duration={0.6}
    >
      <S.PostInfo>
        <S.PostDate>
          {date} • {timeToRead} min read
        </S.PostDate>
        <S.PostTitle>{title}</S.PostTitle>
        <S.PostDescription>{description}</S.PostDescription>
      </S.PostInfo>
    </S.PostLink>
  </S.PostWrapper>
);

Post.propTypes = {
  slug: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Post;
