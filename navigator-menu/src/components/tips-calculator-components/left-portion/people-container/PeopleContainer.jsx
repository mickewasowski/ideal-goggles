import {
  Container,
  Label,
  ErrorLabel,
  InputWrapper,
  Input,
} from './PeopleContainer.styles';
import { useContext, useState } from 'react';
import { TipsCalculatorContext } from '../../../../contexts/TipsCalculatorContext';
import PersonSvg from './PersonSvg';

function PeopleContainer() {
  const { people } = useContext(TipsCalculatorContext);
  const [error, setError] = useState(false);

  const errorDiv = 'outline-2 outline outline-tipsCalcErrorText';

  const handleChange = (e) => {
    let peopleCount = Number(e.target.value);

    if (peopleCount > 0) {
      people(peopleCount);
      setError(false);
    } else if (peopleCount <= 0) {
      setError(true);
    }
  };

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
      <Label>Number of People</Label>
      <ErrorLabel
        id="error-label"
        style={error ? { display: 'inline' } : { display: 'none' }}
      >
        Can&apos;t be zero
      </ErrorLabel>
      <InputWrapper className={error ? errorDiv : ''}>
        <PersonSvg />
        <Input 
          type="number" 
          id="people-count"
          onKeyPress={preventNonNumericalInput}
          style={{ background: 'none' }}
          onChange={handleChange} />
      </InputWrapper>
    </Container>
  );
}

export default PeopleContainer;
