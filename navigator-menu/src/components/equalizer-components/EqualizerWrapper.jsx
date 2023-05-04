import { useEffect } from 'react';

import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

import { Container } from './EqualizerWrapper.styles';

function EqualizerWrapper() {
  useEffect(() => {
    let currentWidth = window.outerWidth;

    let bodyTag = document.getElementsByTagName('body')[0];

    if (currentWidth >= 1440) {
      bodyTag.style.backgroundImage =
        "url('/src/assets/equalizer/bg-pattern-1.svg'), url('/src/assets/equalizer/bg-main-desktop.png')";
    } else if (currentWidth < 1440 && currentWidth >= 500) {
      bodyTag.style.backgroundImage =
        "url('/src/assets/equalizer/bg-pattern-1.svg'), url('/src/assets/equalizer/bg-main-tablet.png')";
    } else {
      bodyTag.style.backgroundImage =
        "url('src/assets/equalizer/bg-main-mobile.png')";
    }
    bodyTag.style.backgroundRepeat = 'no-repeat, no-repeat';
    bodyTag.style.backgroundPosition = 'top 2% right, top left';

    return () => {
      bodyTag.style.backgroundImage = 'none';
      bodyTag.style.backgroundRepeat = 'inherit';
      bodyTag.style.backgroundPosition = 'inherit';
    }
  }, []);

  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default EqualizerWrapper;
