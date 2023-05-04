import logo from '../../../assets/tips-calculator-logo.svg';
import { LogoContainer } from './LogoWrapper.styles';

function LogoWrapper() {
  return (
    <LogoContainer>
      <img src={logo} />
    </LogoContainer>
  );
}

export default LogoWrapper;
