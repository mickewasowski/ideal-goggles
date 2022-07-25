import Amount from "./amount-component/Amount";

import {Container, Wrapper,Reset} from './RightContainer.styles';

function RightContainer(){

    const activeReset = 'bg-tipsCalcResetBtnActive';

    return(
        <Container>
            <Amount name="Tip Amount" amount={'0.00'}/>
            <Amount name="Total" amount={'0.00'}/>
            <Wrapper>
                <Reset onclick="resetForm()" id="reset-btn">Reset</Reset>
            </Wrapper>
        </Container>
    )
}

export default RightContainer;