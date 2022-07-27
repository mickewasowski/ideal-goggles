import logo from '../../../assets/loop-studio/logo.svg';
import facebook from '../../../assets/loop-studio/icon-facebook.svg';
import instagram from '../../../assets/loop-studio/icon-instagram.svg';
import pinterest from '../../../assets/loop-studio/icon-pinterest.svg';
import twitter from '../../../assets/loop-studio/icon-twitter.svg';

import {Wrapper, LeftContainer,Navigation,ListItem, RightContainer,IconsContainer,AnchorTag} from './Footer.styles';

function Footer(){

    return(
        <Wrapper>
            <LeftContainer id="left">
                <div id="left-logo">
                    <img src={logo}/>
                </div>
                <div id="footer-nav">
                    <Navigation>
                        <ListItem><a href="#">About</a></ListItem>
                        <ListItem><a href="#">Careers</a></ListItem>
                        <ListItem><a href="#">Events</a></ListItem>
                        <ListItem><a href="#">Products</a></ListItem>
                        <ListItem><a href="#">Support</a></ListItem>
                    </Navigation>
                </div>
            </LeftContainer>
            <RightContainer id="right">
                <IconsContainer id="icons">
                    <AnchorTag to={''}>
                        <img src={facebook} />
                    </AnchorTag>
                    <AnchorTag to={''}>
                        <img src={twitter}/>
                    </AnchorTag>
                    <AnchorTag to={''}>
                        <img src={pinterest}/>
                    </AnchorTag>
                    <AnchorTag to={''}>
                        <img src={instagram}/>
                    </AnchorTag>
                </IconsContainer>
                <div id="copyright">
                    <p>© 2021 Loopstudios. All rights reserved.</p>
                </div>
            </RightContainer>
        </Wrapper>
    )
}

export default Footer;