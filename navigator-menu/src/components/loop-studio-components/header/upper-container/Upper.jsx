import logo from '/src/assets/loop-studio/logo.svg';
import hamburger from '/src/assets/loop-studio/icon-hamburger.svg';
import closeMenu from '/src/assets/loop-studio/icon-close.svg';

import {
  UpperContainer,
  NavigationContainer,
  MobileLogoContainer,
  UL,
  LiItem,
  AnchorTag,
} from './Upper.styles';

function Upper() {
  const navigationItems = ["About", "Careers", "Events", "Products", "Support"];
  const isMobile = window.innerWidth >= 1440 ? false : true;

  const toggleNavigation = () => {
    let navbar = document.getElementById('nav-bar');

    if (navbar.style.display === 'flex') {
      navbar.style.display = 'none';
    } else {
      navbar.style.display = 'flex';
    }
  };

  return (
    <UpperContainer id="upper">
      <div id="logo-container">
        <img src={logo} />
      </div>
      <div
        id="navigation-toggle"
        style={isMobile ? { display: 'block' } : { display: 'none' }}
        onClick={toggleNavigation}
      >
        <img src={hamburger} />
      </div>
      <NavigationContainer
        id={'nav-bar'}
        style={isMobile ? { display: 'none' } : { display: 'flex' }}
      >
        <MobileLogoContainer
          id="mobile-logo"
          style={isMobile ? { display: 'flex' } : { display: 'none' }}
        >
          <img src={logo} />
          <span onClick={toggleNavigation}>
            <img src={closeMenu} />
          </span>
        </MobileLogoContainer>
        <nav id="nav-tag">
          {/* <!-- style="display: block;" --> */}
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
