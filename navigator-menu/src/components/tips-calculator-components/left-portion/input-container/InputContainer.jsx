import { Container, Label, InputWrapper, Input } from './InputContainer.styles';
import { useContext } from 'react';
import { TipsCalculatorContext } from '../../../../contexts/TipsCalculatorContext';
import DollarSignSvg from './DollarSign';

function InputContainer() {
  const { bill } = useContext(TipsCalculatorContext);

  const preventMinus = (e) => {
    if (e !== undefined && (e.code === 'NumpadSubtract' || e.code === 'Minus')) {
      e.preventDefault();
    }
  }

  const preventNonNumericalInput = (e) => {
    e = e || window.event;
  
    if (e !== undefined && (e.code === 'NumpadSubtract' || e.code === 'Minus')) {
      e.preventDefault();
    }
  
    const charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    const charStr = String.fromCharCode(charCode);
  
    if (!charStr.match(/^[0-9]+$/)) {
      e.preventDefault();
    }
  }  

  return (
    <Container>
      <Label>Bill</Label>
      <InputWrapper>
        <DollarSignSvg />
        <Input
          type="number"
          style={{ background: 'none' }}
          id="bill"
          min="0"
          onKeyPress={preventNonNumericalInput}
          onChange={(e) => bill(Number(e.target.value))}
        />
      </InputWrapper>
    </Container>
  );
}

export default InputContainer;
