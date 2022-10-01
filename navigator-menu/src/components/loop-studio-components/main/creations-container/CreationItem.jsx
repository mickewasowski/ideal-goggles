import { ItemWrapper, Backdrop, H3 } from './CreationItem.styles';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

function CreationItem({ title, backgroundImage }) {
  let windowWidth = window.innerWidth;
  let backdropID = title + '-backdrop';

  let design = windowWidth < 1440 ? 'mobile' : 'desktop';
  let string = `/images/loop-studio/${design}/image-${backgroundImage}.jpg`;

  useEffect(() => {
    let wrapper = document.getElementById(title);

    wrapper.style.background = `url(${string})`;
    wrapper.style.backgroundPosition = 'center';
    wrapper.style.backgroundRepeat = 'no-repeat';
  }, []);

  const removeBackdrop = () => {
    let backdrop = document.getElementById(backdropID);
    backdrop.style.display = 'none';
  };

  const changeBackgroundOpacity = () => {
    let backdrop = document.getElementById(backdropID);
    backdrop.style.display = 'block';
  };

  return (
    <ItemWrapper
      id={title}
      onMouseLeave={removeBackdrop}
      onMouseEnter={changeBackgroundOpacity}
    >
      <Backdrop id={backdropID} style={{ display: 'none' }} />
      <H3 className="creation-item">{title.toUpperCase()}</H3>
    </ItemWrapper>
  );
}

CreationItem.propTypes = {
  title: PropTypes.string,
  backgroundImage: PropTypes.string,
};

export default CreationItem;
