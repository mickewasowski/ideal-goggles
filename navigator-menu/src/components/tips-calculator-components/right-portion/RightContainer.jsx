import Amount from './amount-component/Amount';
import { Container, Wrapper, Reset } from './RightContainer.styles';
import { useContext } from 'react';
import { TipsCalculatorContext } from '../../../contexts/TipsCalculatorContext';

function RightContainer() {
  const { tipsCalc: {bill, percentage, people}, reset } = useContext(TipsCalculatorContext);
  let totalTip, tipPerPerson, perPersonBill;

  if (bill && percentage && people) {
    totalTip = bill * percentage;
    tipPerPerson = parseFloat((totalTip / people).toFixed(2));
    perPersonBill = parseFloat((
      bill / people +
      totalTip / people
    ).toFixed(2));
  }

  const activeReset = 'bg-tipsCalcResetBtnActive';

  return (
    <Container>
      <Amount name="Tip Amount" amount={tipPerPerson} />
      <Amount name="Total" amount={perPersonBill} />
      <Wrapper>
        <Reset
          onClick={reset}
          id="reset-btn"
          className={
            bill &&
            people &&
            percentage
              ? activeReset
              : ''
          }
        >
          Reset
        </Reset>
      </Wrapper>
    </Container>
  );
}

export default RightContainer;
