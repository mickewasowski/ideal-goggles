import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import {Wrapper} from './LoopStudioWrapper.styles'

function LoopStudioWrapper(){

    return(
        <Wrapper>
            <Header />
            <Main />
            {/*<Footer /> */}
        </Wrapper>
    )
}

export default LoopStudioWrapper;