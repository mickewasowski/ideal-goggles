import {Wrapper,Parag, Strong, H1} from './Amount.styles';

function Amount({name, amount}){

    return(
        <Wrapper>
            <Parag><Strong>{name}</Strong><br />/ person</Parag>
            <H1 id="tip-amount-person">$ {amount}</H1>
        </Wrapper>
    )
}

export default Amount;