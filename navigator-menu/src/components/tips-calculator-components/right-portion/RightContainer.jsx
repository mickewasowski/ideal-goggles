import Amount from './amount-component/Amount';
import { Container, Wrapper, Reset } from './RightContainer.styles';
import { useContext } from 'react';
import { TipsCalculatorContext } from '../../../contexts/TipsCalculatorContext';

function RightContainer() {
  const { tipsCalc, reset } = useContext(TipsCalculatorContext);

  const totalTip = tipsCalc.bill * tipsCalc.percentage;
  const tipPerPerson = (totalTip / tipsCalc.people).toFixed(2);
  const perPersonBill = (
    tipsCalc.bill / tipsCalc.people +
    totalTip / tipsCalc.people
  ).toFixed(2);

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
            tipsCalc.bill != 0 ||
            tipsCalc.people != 0 ||
            tipsCalc.percentage != 0
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
