import logo from '../../../../assets/loop-studio/logo.svg';
import hamburger from '../../../../assets/loop-studio/icon-hamburger.svg'
import closeMenu from '../../../../assets/loop-studio/icon-close.svg'

import {UpperContainer, NavigationContainer, UL, LiItem, AnchorTag} from './Upper.styles';

function Upper(){

    const toggleNavigation = () => {
        console.log('toggle');
    }

    return(
        <UpperContainer id="upper">
            <div id="logo-container">
                <img src={logo} />
            </div>
            <div id="navigation-toggle" style={{display: "none"}} onClick={toggleNavigation}>
                <img src={hamburger}/>
            </div>
            <NavigationContainer>
                <div id="mobile-logo" style={{display: "none"}}>
                    <img src={logo} />
                    <span onClick={toggleNavigation}>
                        <img src={closeMenu} />
                    </span>
                </div>
                <nav id="nav-tag">
                    {/* <!-- style="display: block;" --> */}
                    <UL>
                        <LiItem><AnchorTag to={''}>About</AnchorTag></LiItem>
                        <LiItem><AnchorTag to={''}>Careers</AnchorTag></LiItem>
                        <LiItem><AnchorTag to={''}>Events</AnchorTag></LiItem>
                        <LiItem><AnchorTag to={''}>Products</AnchorTag></LiItem>
                        <LiItem><AnchorTag to={''}>Support</AnchorTag></LiItem>
                    </UL>
                </nav>
            </NavigationContainer>
        </UpperContainer>
    )
}

export default Upper;