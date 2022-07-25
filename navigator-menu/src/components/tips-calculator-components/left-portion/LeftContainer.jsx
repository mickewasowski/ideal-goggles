import InputContainer from "./input-container/InputContainer";
import TipContainer from "./tip-container/TipContainer";
import PeopleContainer from "./people-container/PeopleContainer";

import {Left} from './LeftContainer.styles';

function LeftContainer(){

    return(
        <Left>
            <InputContainer />
            <TipContainer />
            <PeopleContainer />
        </Left>
    )
}

export default LeftContainer;