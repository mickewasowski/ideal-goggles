import logo from '/assets/loop-studio/logo.svg';
import facebook from '/assets/loop-studio/icon-facebook.svg';
import instagram from '/assets/loop-studio/icon-instagram.svg';
import pinterest from '/assets/loop-studio/icon-pinterest.svg';
import twitter from '/assets/loop-studio/icon-twitter.svg';

import {
  Wrapper,
  LeftContainer,
  LogoContainer,
  Navigation,
  ListItem,
  ListItemAnchor,
  RightContainer,
  IconsContainer,
  AnchorTag,
} from './Footer.styles';

function Footer() {
  const navigationItems = ["About", "Careers", "Events", "Products", "Support"];
  const socials = [facebook, twitter, pinterest, instagram];

  return (
    <Wrapper>
      <LeftContainer id="left">
        <LogoContainer id="left-logo">
          <img src={logo} />
        </LogoContainer>
        <div id="footer-nav">
          <Navigation>
            {
              navigationItems.map((x, i) => {
                return <ListItem key={i}>
                  <ListItemAnchor href="#">{x}</ListItemAnchor>
                </ListItem>
              })
            }
          </Navigation>
        </div>
      </LeftContainer>
      <RightContainer id="right">
        <IconsContainer id="icons">
          {
            socials.map((x, i) => {
              return <AnchorTag key={i} to={''}>
                <img src={x} />
              </AnchorTag>
            })
          }
        </IconsContainer>
        <div id="copyright">
          <p>© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </RightContainer>
    </Wrapper>
  );
}

export default Footer;
