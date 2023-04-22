import { ItemWrapper, Backdrop, H3 } from './CreationItem.styles';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function CreationItem({ title, backgroundImage }) {
  let windowWidth = window.innerWidth;
  let design = windowWidth < 1440 ? 'mobile' : 'desktop';
  let string = `/src/assets/loop-studio/${design}/image-${backgroundImage}.jpg`;

  const backdropRef = useRef({});
  const wrapperRef = useRef({});

  useEffect(() => {
    wrapperRef.current.style.background = `url(${string})`;
    wrapperRef.current.style.backgroundPosition = 'center';
    wrapperRef.current.style.backgroundRepeat = 'no-repeat';
  }, []);

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
