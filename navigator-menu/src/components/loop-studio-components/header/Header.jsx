import Upper from "./upper-container/Upper";

import {HeaderContainer} from './Header.styles';

function Header(){

    return(
        <HeaderContainer>
            <Upper />
            <div id="lower">
                <h1>Immersive experiences that deliver</h1>
            </div>
        </HeaderContainer>
    )
}

export default Header;