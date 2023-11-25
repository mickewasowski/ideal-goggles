import logo from '/assets/loop-studio/logo.svg';
import hamburger from '/assets/loop-studio/icon-hamburger.svg';
import closeMenu from '/assets/loop-studio/icon-close.svg';

import {
  UpperContainer,
  NavigationContainer,
  MobileLogoContainer,
  UL,
  LiItem,
  AnchorTag,
} from './Upper.styles';
import { useEffect, useState } from 'react';

function Upper() {
  const navigationItems = ["About", "Careers", "Events", "Products", "Support"];
  const [isMobile, setIsMobile] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 1023) {
      setIsMobile(true);
    }
    addEventListener('resize', handleResizeEvent);

    return () => {
      removeEventListener('resize', handleResizeEvent);
    };
  }, [isMobile]);

  const handleResizeEvent = (event) => {
    const { target } = event;
    const { innerWidth } = target;

    if (innerWidth <= 1023 && !isMobile) {
      setIsMobile(true);
    } else if (innerWidth > 1023 && isMobile) {
      setIsMobile(false);
      setOpenNavbar(false);
    }
  }

  const toggleNavigation = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <UpperContainer id="upper">
      <div id="logo-container">
        <img src={logo} />
      </div>
      <div
        id="navigation-toggle"
        style={isMobile ? { display: 'inline' } : { display: 'none' }}
        onClick={toggleNavigation}
      >
        <img src={hamburger} style={{ cursor: 'pointer' }} />
      </div>
      <NavigationContainer
        id={'nav-bar'}
        style={openNavbar ? { display: 'flex' } : { display: 'none' }}
      >
        <MobileLogoContainer
          id="mobile-logo"
          style={isMobile ? { display: 'flex' } : { display: 'none' }}
        >
          <img src={logo} />
          <span onClick={toggleNavigation}>
            <img src={closeMenu} style={{ cursor: 'pointer' }} />
          </span>
        </MobileLogoContainer>
        <nav id="nav-tag">
          <UL>
            {
              navigationItems.map((x, i) => {
                return <LiItem key={i}>
                  <AnchorTag to={''}>{x}</AnchorTag>
                </LiItem>
              })
            }
          </UL>
        </nav>
      </NavigationContainer>
    </UpperContainer>
  );
}

export default Upper;
