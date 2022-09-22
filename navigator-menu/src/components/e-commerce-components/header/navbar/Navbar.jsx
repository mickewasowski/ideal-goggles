import {useState} from 'react';

import logo from '../../../../../public/e-commerce/logo.svg';

import {ButtonsContainer,LogoContainer,AnchorTag,NavigationContainer,Navigation,Ul,LiItem, CloseIcon,Backdrop} from './Navbar.styles';

function Navbar(){
    const [backdropIsOpen, setBackdropIsOpen] = useState(false);
    const windowWidth = window.outerWidth;
    const handleToggleNavbar = () => setBackdropIsOpen(!backdropIsOpen);

    return(
        <ButtonsContainer>
            <Backdrop className={`${backdropIsOpen ? "phone:inline" : "phone:hidden"}`}></Backdrop>
            <LogoContainer>
                <svg 
                    width="16" 
                    height="15" 
                    className='mr-[1rem] mt-[.2rem]' 
                    style={windowWidth >= 1024 ? {display: 'none'} : {display: 'inline'}}
                    onClick={handleToggleNavbar}
                    >
                        <path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fillRule="evenodd" fill="#69707D" />
                </svg>
                <AnchorTag to={'/'}>
                    <img src={logo} />
                </AnchorTag>
            </LogoContainer>
            <NavigationContainer className={`${backdropIsOpen ? "phone:inline" : "phone:hidden"}`}>
                <CloseIcon id="close-navbar" onClick={handleToggleNavbar}>
                    <svg width="14" height="15">
                        <path
                            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                            fill="#69707D" fillRule="evenodd" 
                        />
                    </svg>
                </CloseIcon>
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