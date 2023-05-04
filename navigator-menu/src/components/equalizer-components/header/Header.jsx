import logo from '/src/assets/equalizer/logo.svg';
import { LogoContainer } from './Header.styles';

function Header() {
  return (
    <header>
      <LogoContainer>
        <img src={logo} />
      </LogoContainer>
    </header>
  );
}

export default Header;
