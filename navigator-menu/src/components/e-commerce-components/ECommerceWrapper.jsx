import Header from './header/Header';
import Main from './main/Main';
import Gallery from './section-gallery/Gallery';

import { Wrapper } from './ECommrceWrapper.styles';

function ECommerceWrapper() {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Gallery />
    </Wrapper>
  );
}

export default ECommerceWrapper;
