import {Wrapper,Parag, Strong, H1} from './Amount.styles';

function Amount({name, amount}){

    return(
        <Wrapper>
            <Parag><Strong>{name}</Strong><br />/ person</Parag>
            {
                amount === 'NaN'
                ? <H1 id="tip-amount-person">$ {'0.00'}</H1>
                : <H1 id="tip-amount-person">$ {amount}</H1>
            }
        </Wrapper>
    )
}

export default Amount;