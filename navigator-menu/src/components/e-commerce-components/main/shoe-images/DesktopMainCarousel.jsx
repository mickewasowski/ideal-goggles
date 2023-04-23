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
  const smallImages = [
    { id: 1, backgroundImage: 'url(/src/assets/e-commerce/image-product-1-thumbnail.jpg)' },
    { id: 2, backgroundImage: 'url(/src/assets/e-commerce/image-product-2-thumbnail.jpg)' },
    { id: 3, backgroundImage: 'url(/src/assets/e-commerce/image-product-3-thumbnail.jpg)' },
    { id: 4, backgroundImage: 'url(/src/assets/e-commerce/image-product-4-thumbnail.jpg)' },
  ]
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
          src={`/src/assets/e-commerce/image-product-${current}.jpg`}
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
        {
          smallImages.map((x, i) => {
            return <ImageContainer
              key={i}
              id={`outer-${x.id}`}
              className={`${current === x.id ? outerOutline : 'outline-none'}`}
            >
              <SmallImage
                id={x.id}
                style={{
                  backgroundImage: x.backgroundImage,
                }}
                onClick={changeBigImage}
              ></SmallImage>
            </ImageContainer>
          })
        }
      </OtherImagesWrapper>
    </ShoeImagesWrapper>
  );
}

export default DesktopMainCarousel;
