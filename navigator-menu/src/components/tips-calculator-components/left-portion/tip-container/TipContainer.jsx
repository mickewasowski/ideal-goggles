import {Container,Label,PercentageBtns,Button, InputBtn} from './TipContainer.styles';

function TipContainer(){
    
    return(
        <Container>
            <Label>Select Tip %</Label>
            <PercentageBtns>
                <Button >5%</Button>
                <Button >10%</Button>
                <Button >15%</Button>
                <Button >25%</Button>
                <Button >50%</Button>
                <InputBtn type="number" placeholder="Custom" className="input-percent"/>
            </PercentageBtns>
        </Container>
    )
}

export default TipContainer;