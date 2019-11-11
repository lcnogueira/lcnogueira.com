import React, { useState, useEffect } from 'react';
import { Home } from 'styled-icons/boxicons-solid/Home';
import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular/SearchAlt2';
import { UpArrowAlt as Arrow } from 'styled-icons/boxicons-regular/UpArrowAlt';
import { Bulb as Light } from 'styled-icons/boxicons-regular/Bulb';
import { Grid } from 'styled-icons/boxicons-solid/Grid';
import { ThList as List } from 'styled-icons/typicons/ThList';

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
        <S.MenuBarItem title="Go to the top">
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  );
}

export default MenuBar;
