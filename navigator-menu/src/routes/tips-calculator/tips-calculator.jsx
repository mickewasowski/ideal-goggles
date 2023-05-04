import TipsCalculatorWrapper from '../../components/tips-calculator-components/TipsCalculatorWrapper';
import { TipsCalculatorInfoProvider } from '../../contexts/TipsCalculatorContext';

function TipsCalculatorRoute() {
  return (
    <TipsCalculatorInfoProvider>
      <TipsCalculatorWrapper />
    </TipsCalculatorInfoProvider>
  );
}

export default TipsCalculatorRoute;
