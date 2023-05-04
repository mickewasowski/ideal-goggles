import {
  Container,
  Label,
  PercentageBtns,
  Button,
  InputBtn,
} from './TipContainer.styles';
import { useContext, useRef } from 'react';
import { TipsCalculatorContext } from '../../../../contexts/TipsCalculatorContext';


function TipContainer() {
  const { percentage } = useContext(TipsCalculatorContext);
  const tipAmount = useRef(0);
  const currentBtn = useRef(0);
  const inputRef = useRef();
  const buttons = [5, 10, 15, 25, 50];

  const changeTipAmount = (e, amount) => {
    if (inputRef.current.value !== '' && e.target.tagName === 'BUTTON') {
      inputRef.current.value = '';
    }

    tipAmount.current = Number(amount / 100);
    percentage(tipAmount.current);
    currentBtn.current = amount;
  }

  function preventNonNumericalInput(e) {
    e = e || window.event;

    if (e !== undefined && (e.code === 'NumpadSubtract' || e.code === 'Minus')) {
      e.preventDefault();
    }

    var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);
  
    if (!charStr.match(/^[0-9]+$/))
      e.preventDefault();
  }

  return (
    <Container>
      <Label>Select Tip %</Label>
      <PercentageBtns>
        {
          buttons.map(x => {
            return <Button className={x === currentBtn.current ? 'bg-tipsCalcBtnHover text-tipsCalcBtnTextHover' : ''} key={x} onClick={(e) => changeTipAmount(e, x)}>{x}%</Button>
          })
        }
        <InputBtn
          type="number"
          placeholder="Custom"
          id="percentage"
          min="0"
          ref={inputRef}
          onKeyPress={preventNonNumericalInput}
          onChange={(e) => changeTipAmount(e, Number(e.target.value))}
        />
      </PercentageBtns>
    </Container>
  );
}

export default TipContainer;
