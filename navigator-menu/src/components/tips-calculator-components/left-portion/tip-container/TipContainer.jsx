import {
  Container,
  Label,
  PercentageBtns,
  Button,
  InputBtn,
} from './TipContainer.styles';
import { useContext } from 'react';
import { TipsCalculatorContext } from '../../../../contexts/TipsCalculatorContext';

function TipContainer() {
  const { percentage } = useContext(TipsCalculatorContext);

  const handleBtnChange = (e) => {
    let percentageAmount;

    if (e.target.tagName === 'BUTTON') {
      percentageAmount = parseFloat(e.target.innerText.replace('%', '')) / 100;

      if (document.getElementById('percentage').value !== '') {
        document.getElementById('percentage').value = '';
      }
    } else if (e.target.tagName === 'INPUT') {
      percentageAmount = parseFloat(e.target.value) / 100;
    }
    percentage(percentageAmount);
  };

  return (
    <Container>
      <Label>Select Tip %</Label>
      <PercentageBtns>
        <Button onClick={handleBtnChange}>5%</Button>
        <Button onClick={handleBtnChange}>10%</Button>
        <Button onClick={handleBtnChange}>15%</Button>
        <Button onClick={handleBtnChange}>25%</Button>
        <Button onClick={handleBtnChange}>50%</Button>
        <InputBtn
          type="number"
          placeholder="Custom"
          id="percentage"
          onChange={handleBtnChange}
        />
      </PercentageBtns>
    </Container>
  );
}

export default TipContainer;
