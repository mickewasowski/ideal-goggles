import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

import {Container} from './EqualizerWrapper.styles';

function EqualizerWrapper(){

    return(
        <Container>
            <Header />
            <Main />
            <Footer />
        </Container>
    )
}

export default EqualizerWrapper;