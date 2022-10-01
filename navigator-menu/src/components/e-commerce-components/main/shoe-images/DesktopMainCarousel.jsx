import { ECommerceContext } from '../../../../contexts/e-commerce/ECommerceContext';
import { useState, useContext } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import {
  ShoeImagesWrapper,
  MainImageContainer,
  BigImage,
  OtherImagesWrapper,
  ImageContainer,
  SmallImage,
  ArrowsContainer,
  ArrowSpan,
} from './DesktopMainCarousel.styles';

function DesktopMainCarousel() {
  const windowWidth = window.outerWidth;
  const { toggleGallery } = useContext(ECommerceContext);
  const [current, setCurrent] = useState(1);
  const outerOutline = 'outline-2 outline outline-[#ff7d1a]';
  const changeBigImage = (e) => setCurrent(Number(e.target.id));

  const openGallery = () => {
    if (windowWidth >= 1024) {
      toggleGallery(true);
    }
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

  return (
    <ShoeImagesWrapper>
      <MainImageContainer>
        <BigImage
          style={{ display: 'block' }}
          src={`/e-commerce/image-product-${current}.jpg`}
          onClick={openGallery}
        />
        <ArrowsContainer>
          <ArrowSpan
            className="w-[2rem] h-[2rem] bg-genericWhite rounded-full"
            onClick={handleBackward}
          >
            <IoIosArrowBack className="scale-150 hover:fill-eComOrangeColor hover:cursor-pointer" />
          </ArrowSpan>
          <ArrowSpan
            className="w-[2rem] h-[2rem] bg-genericWhite rounded-full"
            onClick={handleForward}
          >
            <IoIosArrowForward className="scale-150 hover:fill-eComOrangeColor hover:cursor-pointer" />
          </ArrowSpan>
        </ArrowsContainer>
      </MainImageContainer>
      <OtherImagesWrapper id="small-images">
        <ImageContainer
          id="outer-1"
          className={`${current === 1 ? outerOutline : 'outline-none'}`}
        >
          <SmallImage
            id="1"
            style={{
              backgroundImage: 'url(/e-commerce/image-product-1-thumbnail.jpg)',
            }}
            onClick={changeBigImage}
          ></SmallImage>
        </ImageContainer>
        <ImageContainer
          id="outer-2"
          className={`${current === 2 ? outerOutline : 'outline-none'}`}
        >
          <SmallImage
            id="2"
            style={{
              backgroundImage: 'url(/e-commerce/image-product-2-thumbnail.jpg)',
            }}
            onClick={changeBigImage}
          ></SmallImage>
        </ImageContainer>
        <ImageContainer
          id="outer-3"
          className={`${current === 3 ? outerOutline : 'outline-none'}`}
        >
          <SmallImage
            id="3"
            style={{
              backgroundImage: 'url(/e-commerce/image-product-3-thumbnail.jpg)',
            }}
            onClick={changeBigImage}
          ></SmallImage>
        </ImageContainer>
        <ImageContainer
          id="outer-4"
          className={`${current === 4 ? outerOutline : 'outline-none'}`}
        >
          <SmallImage
            id="4"
            style={{
              backgroundImage: 'url(/e-commerce/image-product-4-thumbnail.jpg)',
            }}
            onClick={changeBigImage}
          ></SmallImage>
        </ImageContainer>
      </OtherImagesWrapper>
    </ShoeImagesWrapper>
  );
}

export default DesktopMainCarousel;
