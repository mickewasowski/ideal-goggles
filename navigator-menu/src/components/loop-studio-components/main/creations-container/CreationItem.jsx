import { ItemWrapper, Backdrop, H3 } from './CreationItem.styles';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

function CreationItem({ title, backgroundImage }) {
  const [isMobile, setIsMobile] = useState(false);
  const backdropRef = useRef({});
  const wrapperRef = useRef({});
  const design = isMobile ? 'mobile' : 'desktop';
  const imagePathTemplate = `/assets/loop-studio/${design}/image-${backgroundImage}.jpg`;

  useEffect(() => {
    if (window.innerWidth <= 1023) {
      setIsMobile(true);
    }

    addEventListener('resize', handleResize);

    wrapperRef.current.style.background = `url(${imagePathTemplate})`;
    wrapperRef.current.style.backgroundPosition = 'center';
    wrapperRef.current.style.backgroundRepeat = 'no-repeat';

    return () => {
      removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  const handleResize = (event) => {
    const { target } = event;
    const { innerWidth } = target;

    if (innerWidth <= 1023 && !isMobile) {
      setIsMobile(!isMobile);
    } else if (innerWidth > 1023 && isMobile) {
      setIsMobile(false);
    }
  }

  const removeBackdrop = () => {
    backdropRef.current.style.display = 'none';
  };

  const changeBackgroundOpacity = () => {
    backdropRef.current.style.display = 'block';
  };

  return (
    <ItemWrapper
      ref={wrapperRef}
      onMouseLeave={removeBackdrop}
      onMouseEnter={changeBackgroundOpacity}
    >
      <Backdrop ref={backdropRef} style={{ display: 'none' }} />
      <H3 className="creation-item">{title.toUpperCase()}</H3>
    </ItemWrapper>
  );
}

CreationItem.propTypes = {
  title: PropTypes.string,
  backgroundImage: PropTypes.string,
};

export default CreationItem;
