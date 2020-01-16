import React from 'react';
import Profile from '../Profile';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';
import HamburguerMenu from '../HamburguerMenu';

import * as S from './styled';

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks hideStyle />
    <MenuLinks />
    <HamburguerMenu />
  </S.SidebarWrapper>
);

export default Sidebar;
