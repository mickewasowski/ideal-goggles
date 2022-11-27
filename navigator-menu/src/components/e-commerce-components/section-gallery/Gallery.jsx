import { useState, useContext, useRef } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import { ECommerceContext } from '../../../contexts/e-commerce/ECommerceContext';

import {
  Wrapper,
  GalleryContainer,
  ArrowsContainer,
  ArrowSpan,
  CurrentBig,
  ThumbnailImgsContainer,
  ThumbImgContainer,
  ThumbImg,
} from './Gallery.styles';

function Gallery() {
  const galleryWrapperRef = useRef();
  const [current, setCurrent] = useState(1);
  const { isGalleryOpen, toggleGallery } = useContext(ECommerceContext);
  const outerOutline = 'outline-2 outline outline-[#ff7d1a]';
  const handleChangeBigImage = (e) => setCurrent(Number(e.target.id));

  const handleCloseGallery = () => {
    toggleGallery(false);
  };

  const handleForward = () => {
    if (current + 1 > 4) {
      return;
    } else {
      setCurrent(current + 1);
    }
  };

  const handleBackward = () => {
    if (current - 1 < 1) {
      return;
    } else {
      setCurrent(current - 1);
    }
  };

  const handleClickOutside = (e) => {
    if (e.target === galleryWrapperRef.current) {
      toggleGallery(false);
    }
  }

  return (
    <Wrapper ref={galleryWrapperRef} 
      className={isGalleryOpen ? 'flex' : 'hidden'} onClick={e => handleClickOutside(e)}>
      <GalleryContainer>
        <div className="current-image-container">
          <MdOutlineClose
            className="relative top-7 left-[38.5rem] scale-150 hover:fill-eComOrangeColor hover:cursor-pointer laptop:top-1/5 laptop:left-full"
            onClick={handleCloseGallery}
          />
          <ArrowsContainer>
            <ArrowSpan id="previous-icon" onClick={handleBackward}>
              <IoIosArrowBack className="scale-150 hover:fill-eComOrangeColor hover:cursor-pointer" />
            </ArrowSpan>
            <ArrowSpan id="next-icon" onClick={handleForward}>
              <IoIosArrowForward className="scale-150 hover:fill-eComOrangeColor hover:cursor-pointer" />
            </ArrowSpan>
          </ArrowsContainer>
          <CurrentBig
            id="1"
            className="current-image"
            style={{ display: 'block' }}
            src={`/e-commerce/image-product-${current}.jpg`}
          />
        </div>
        <ThumbnailImgsContainer id="smaller-images">
          <ThumbImgContainer
            id="out-1"
            className={`${current === 1 ? outerOutline : 'outline-none'}`}
          >
            <ThumbImg
              id="1"
              style={{
                backgroundImage:
                  'url(/e-commerce/image-product-1-thumbnail.jpg)',
              }}
              onClick={handleChangeBigImage}
            ></ThumbImg>
          </ThumbImgContainer>
          <ThumbImgContainer
            id="out-2"
            className={`${current === 2 ? outerOutline : 'outline-none'}`}
          >
            <ThumbImg
              id="2"
              style={{
                backgroundImage:
                  'url(/e-commerce/image-product-2-thumbnail.jpg)',
              }}
              onClick={handleChangeBigImage}
            ></ThumbImg>
          </ThumbImgContainer>
          <ThumbImgContainer
            id="out-3"
            className={`${current === 3 ? outerOutline : 'outline-none'}`}
          >
            <ThumbImg
              id="3"
              style={{
                backgroundImage:
                  'url(/e-commerce/image-product-3-thumbnail.jpg)',
              }}
              onClick={handleChangeBigImage}
            ></ThumbImg>
          </ThumbImgContainer>
          <ThumbImgContainer
            id="out-4"
            className={`${current === 4 ? outerOutline : 'outline-none'}`}
          >
            <ThumbImg
              id="4"
              style={{
                backgroundImage:
                  'url(/e-commerce/image-product-4-thumbnail.jpg)',
              }}
              onClick={handleChangeBigImage}
            ></ThumbImg>
          </ThumbImgContainer>
        </ThumbnailImgsContainer>
      </GalleryContainer>
    </Wrapper>
  );
}

export default Gallery;
