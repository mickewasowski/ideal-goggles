import Navbar from './navbar/Navbar';
import UserCartWrapper from './user-cart/UserCartWrapper';

import { Wrapper } from './Header.styles';

function Header() {
  return (
    <Wrapper>
      <Navbar />
      <UserCartWrapper />
    </Wrapper>
  );
}

export default Header;
