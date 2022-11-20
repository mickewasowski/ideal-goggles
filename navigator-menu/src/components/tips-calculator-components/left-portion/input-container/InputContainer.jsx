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

  return (
    <Container>
      <Label>Bill</Label>
      <InputWrapper>
        <DollarSignSvg />
        <Input
          type="number"
          id="bill"
          min="0"
          onKeyPress={preventMinus}
          onChange={(e) => bill(Number(e.target.value))}
        />
      </InputWrapper>
    </Container>
  );
}

export default InputContainer;
