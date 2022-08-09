import {ECommerceContext} from '../../../../contexts/e-commerce/ECommerceContext';
import {useState, useContext} from 'react';
import { IoIosArrowForward,IoIosArrowBack } from 'react-icons/io';

import {ShoeImagesWrapper, BigImage,OtherImagesWrapper, ImageContainer, SmallImage,ArrowsContainer,ArrowSpan} from './DesktopMainCarousel.styles';

function DesktopMainCarousel(){
    const windowWidth = window.outerWidth;

    const {toggleGallery} = useContext(ECommerceContext);
    const [current, setCurrent] = useState(1);

    const changeBigImage = (e) => {
        let id = Number(e.target.id);
        setCurrent(id)
    }

    const openGallery = () => {
      if (windowWidth < 1024) {
        return;
      } else {
        toggleGallery(true);
      }
    }

    const handleForward = () => {
      if ((current + 1) > 4) {
        return;
      } else {
       setCurrent(current + 1); 
      }
    }

    const handleBackward = () => {
      if ((current - 1) < 1) {
        return;
      } else {
        setCurrent(current - 1)
      }
    }

    return(
        <ShoeImagesWrapper>
          <div className="main-image">
            <BigImage 
                style={{display: "block"}} 
                src={`/e-commerce/image-product-${current}.jpg`}
                onClick={openGallery}
              />
            <ArrowsContainer>
              <ArrowSpan 
                className='w-[2rem] h-[2rem] bg-genericWhite rounded-full' 
                onClick={handleBackward}
                >
                <IoIosArrowBack className='scale-150 hover:fill-eComOrangeColor hover:cursor-pointer'/>
              </ArrowSpan>
              <ArrowSpan 
                className='w-[2rem] h-[2rem] bg-genericWhite rounded-full' 
                onClick={handleForward}
                >
                <IoIosArrowForward className='scale-150 hover:fill-eComOrangeColor hover:cursor-pointer'/>
              </ArrowSpan>
            </ArrowsContainer>
          </div>
          <OtherImagesWrapper>
            <ImageContainer>
              <SmallImage
                id="1" 
                style={{backgroundImage: "url(/e-commerce/image-product-1-thumbnail.jpg)"}}
                onClick={changeBigImage}
                >
              </SmallImage>
            </ImageContainer>
            <ImageContainer>
              <SmallImage
                id="2" 
                style={{backgroundImage: "url(/e-commerce/image-product-2-thumbnail.jpg)"}}
                onClick={changeBigImage}
                >
              </SmallImage>
            </ImageContainer>
            <ImageContainer>
              <SmallImage 
                id="3" 
                style={{backgroundImage: "url(/e-commerce/image-product-3-thumbnail.jpg)"}}
                onClick={changeBigImage}
                >
              </SmallImage>
            </ImageContainer>
            <ImageContainer>
              <SmallImage 
                id="4" 
                style={{backgroundImage: "url(/e-commerce/image-product-4-thumbnail.jpg)"}}
                onClick={changeBigImage}
                >
              </SmallImage>
            </ImageContainer>
          </OtherImagesWrapper>
        </ShoeImagesWrapper>
    )
}

export default DesktopMainCarousel;