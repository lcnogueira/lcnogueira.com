import React from 'react';

import getThemeColor from '../../utils/getThemeColor';
import Avatar from '../Avatar';
import * as S from './styled';

import useSiteMetadata from '../../hooks/useSiteMetadata';

function Profile() {
  const { author, position, description } = useSiteMetadata();

  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        to="/"
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        <Avatar />
        <S.ProfileAuthor>
          {author}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  );
}

export default Profile;
