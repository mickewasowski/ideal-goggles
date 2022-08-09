import {ECommerceContext} from '../../../../contexts/e-commerce/ECommerceContext';
import {useState, useContext} from 'react';

import {ShoeImagesWrapper, BigImage,OtherImagesWrapper, ImageContainer, SmallImage} from './DesktopMainCarousel.styles';

function DesktopMainCarousel(){
    const {toggleGallery} = useContext(ECommerceContext);
    const [current, setCurrent] = useState(1);

    const changeBigImage = (e) => {
        let id = Number(e.target.id);
        setCurrent(id)
    }

    const openGallery = () => {
      toggleGallery(true);
    }

    return(
        <ShoeImagesWrapper>
          <div className="main-image">
            <BigImage 
                style={{display: "block"}} 
                src={`/e-commerce/image-product-${current}.jpg`}
                onClick={openGallery}
              />
            <div id="arrows" style={{display: 'none'}}>
              <span id="previous-image">
                <svg id="prev-img" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 1 3 9l8 8" fillRule="nonzero" />
                </svg>
              </span>
              <span id="next-image">
                <svg id="next-img" xmlns="http://www.w3.org/2000/svg">
                  <path d="m2 1 8 8-8 8" fillRule="nonzero" />
                </svg>
              </span>
            </div>
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