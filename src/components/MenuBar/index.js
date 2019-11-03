import React from 'react';
import { Home } from 'styled-icons/boxicons-solid/Home';
import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular/SearchAlt2';
import { UpArrowAlt as Arrow } from 'styled-icons/boxicons-regular/UpArrowAlt';
import { Bulb } from 'styled-icons/boxicons-solid/Bulb';
import { Grid } from 'styled-icons/boxicons-solid/Grid';

import * as S from './styled';

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Back to Home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search" title="Search">
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>
    <S.MenuBarGroup>
      <S.MenuBarItem title="Switch theme">
        <Bulb />
      </S.MenuBarItem>
      <S.MenuBarItem title="Switch visualization mode">
        <Grid />
      </S.MenuBarItem>
      <S.MenuBarItem title="Go to the top">
        <Arrow />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
);

export default MenuBar;
