import {ECommerceContext} from '../../../../contexts/e-commerce/ECommerceContext';
import {useState, useContext} from 'react';
import { IoIosArrowForward,IoIosArrowBack } from 'react-icons/io';

import {ShoeImagesWrapper,MainImageContainer, BigImage,OtherImagesWrapper, ImageContainer, SmallImage,ArrowsContainer,ArrowSpan} from './DesktopMainCarousel.styles';

function DesktopMainCarousel(){
    const windowWidth = window.outerWidth;

    const {toggleGallery} = useContext(ECommerceContext);
    const [current, setCurrent] = useState(1);

    const changeBigImage = (e) => {
        let id = Number(e.target.id);
        setCurrent(id);

        let outers = Array.from(document.getElementById('small-images').children);
        
        for (let outer of outers) {
          outer.style.outline = 'none';
        }

        let outerContainer = document.getElementById(`outer-${id}`);
        outerContainer.style.outline = '2px solid #ff7d1a';
    }

    const openGallery = () => {
      if (windowWidth >= 1024) {
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
          <MainImageContainer>
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
          </MainImageContainer>
          <OtherImagesWrapper id='small-images'>
            <ImageContainer id='outer-1'>
              <SmallImage
                id="1" 
                style={{backgroundImage: "url(/e-commerce/image-product-1-thumbnail.jpg)"}}
                onClick={changeBigImage}
                >
              </SmallImage>
            </ImageContainer>
            <ImageContainer id='outer-2'>
              <SmallImage
                id="2" 
                style={{backgroundImage: "url(/e-commerce/image-product-2-thumbnail.jpg)"}}
                onClick={changeBigImage}
                >
              </SmallImage>
            </ImageContainer>
            <ImageContainer id='outer-3'>
              <SmallImage 
                id="3" 
                style={{backgroundImage: "url(/e-commerce/image-product-3-thumbnail.jpg)"}}
                onClick={changeBigImage}
                >
              </SmallImage>
            </ImageContainer>
            <ImageContainer id='outer-4'>
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