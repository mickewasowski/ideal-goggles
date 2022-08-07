import logo from '../../../../../public/e-commerce/logo.svg';

import {ButtonsContainer,LogoContainer,AnchorTag,NavigationContainer,Navigation,Ul,LiItem} from './Navbar.styles';

function Navbar(){

    return(
        <ButtonsContainer>
            <svg id="menu-btn" width="16" height="15" style={{display: 'none'}}>
                    <path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fillRule="evenodd" />
            </svg>
            <LogoContainer>
                <AnchorTag to={'/'}>
                    <img src={logo} />
                </AnchorTag>
            </LogoContainer>
            <NavigationContainer>
                <span id="close-navbar">
                    <svg width="14" height="15" style={{display: 'none'}}>
                        <path
                            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                            fill="#69707D" fillRule="evenodd" 
                        />
                    </svg>
                </span>
                <Navigation>
                    <Ul>
                        <LiItem>Collections</LiItem>
                        <LiItem>Men</LiItem>
                        <LiItem>Women</LiItem>
                        <LiItem>About</LiItem>
                        <LiItem>Contact</LiItem>
                    </Ul>
                </Navigation>
            </NavigationContainer>
        </ButtonsContainer>
    )
}

export default Navbar;