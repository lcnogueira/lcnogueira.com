import React, { useState, useEffect } from 'react';
import { Home } from 'styled-icons/boxicons-solid/Home';
import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular/SearchAlt2';
import { UpArrowAlt as Arrow } from 'styled-icons/boxicons-regular/UpArrowAlt';
import { Bulb as Light } from 'styled-icons/boxicons-regular/Bulb';
import { Grid } from 'styled-icons/boxicons-solid/Grid';
import { ThList as List } from 'styled-icons/typicons/ThList';

import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

function MenuBar() {
  const [theme, setTheme] = useState(null);
  const [display, setDisplay] = useState(null);

  const toggleTheme = () => (theme === 'dark' ? 'light' : 'dark');
  const toggleDisplay = () => (display === 'list' ? 'grid' : 'list');

  useEffect(() => {
    setTheme(window.__theme);
    setDisplay(window.__display);

    window.__onThemeChange = () => setTheme(window.__theme);
    window.__onDisplayChange = () => setDisplay(window.__display);
  }, []);

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to="/"
          title="Back to Home"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/search"
          title="Search"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Switch theme"
          onClick={() => {
            window.__setPreferredTheme(toggleTheme());
          }}
          className={theme}
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Switch visualization mode"
          onClick={() => {
            window.__setPreferredDisplay(toggleDisplay());
          }}
          className="display"
        >
          {display === 'list' ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Go to the top"
          onClick={() => {
            window.scroll({ top: 0, behavior: 'smooth' });
          }}
        >
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  );
}

export default MenuBar;
