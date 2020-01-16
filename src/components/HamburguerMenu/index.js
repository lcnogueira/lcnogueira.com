import React, { useState } from 'react';
import links from '../MenuLinks/content';
import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';
import SocialLinks from '../SocialLinks';

function HamburguerMenu() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <S.Container>
      <S.Menu onClick={toggleMenu} open={open}>
        <span></span>
      </S.Menu>
      <S.Nav open={open}>
        <ul>
          {links.map((link, i) => (
            <li key={i}>
              <S.Link
                to={link.url}
                cover
                direction="left"
                bg={getThemeColor()}
                duration={0.6}
                onClick={() => toggleMenu(link.label)}
                activeClassName="active"
              >
                {link.label}
              </S.Link>
            </li>
          ))}
          <SocialLinks />
        </ul>
      </S.Nav>
    </S.Container>
  );
}

export default HamburguerMenu;
