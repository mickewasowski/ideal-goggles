import Amount from "./amount-component/Amount";

import {Container} from './RightContainer.styles';

function RightContainer(){

    return(
        <Container>
            <Amount name="Tip Amount" amount={0.00}/>
            <Amount name="Total" amount={0.00}/>
            <div id="reset-container">
                <button onclick="resetForm()" id="reset-btn">Reset</button>
            </div>
        </Container>
    )
}

export default RightContainer;