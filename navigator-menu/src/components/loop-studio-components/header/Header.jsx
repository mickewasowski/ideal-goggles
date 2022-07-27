import Upper from "./upper-container/Upper";

import {HeaderContainer, LowerContainer, Heading} from './Header.styles';

function Header(){

    return(
        <HeaderContainer>
            <Upper />
            <LowerContainer>
                <Heading>Immersive experiences that deliver</Heading>
            </LowerContainer>
        </HeaderContainer>
    )
}

export default Header;