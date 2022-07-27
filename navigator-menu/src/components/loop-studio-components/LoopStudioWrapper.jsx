import Header from "./header/Header";
import Main from "./main/Main";
import {Wrapper} from './LoopStudioWrapper.styles'

function LoopStudioWrapper(){

    return(
        <Wrapper>
            <Header />
            <Main />
        </Wrapper>
    )
}

export default LoopStudioWrapper;