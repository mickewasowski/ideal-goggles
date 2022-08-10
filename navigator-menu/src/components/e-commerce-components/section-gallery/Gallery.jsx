import { useState, useContext } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { IoIosArrowForward,IoIosArrowBack } from 'react-icons/io';

import {ECommerceContext} from '../../../contexts/e-commerce/ECommerceContext';

import {Wrapper, GalleryContainer,ArrowsContainer,ArrowSpan,CurrentBig,ThumbnailImgsContainer,ThumbImgContainer,ThumbImg} from './Gallery.styles';

function Gallery(){
    const [current, setCurrent] = useState(1);

    const {isGalleryOpen, toggleGallery} = useContext(ECommerceContext);

    const handleChangeBigImage = (e) => {
      let id = Number(e.target.id);
      setCurrent(id);
    }

    const handleCloseGallery = () => {
      toggleGallery(false);
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
      <Wrapper style={isGalleryOpen ? {display: "block"} : {display: 'none'}}>
        <GalleryContainer>
          <div className="current-image-container">
          <MdOutlineClose 
            className='relative top-7 left-[38.5rem] scale-150 hover:fill-eComOrangeColor hover:cursor-pointer laptop:top-1/5 laptop:left-full'
              onClick={handleCloseGallery}
            />
            <ArrowsContainer>
              <ArrowSpan id="previous-icon" onClick={handleBackward}>
                <IoIosArrowBack className='scale-150 hover:fill-eComOrangeColor hover:cursor-pointer'/>
              </ArrowSpan>
              <ArrowSpan id="next-icon" onClick={handleForward}>
                <IoIosArrowForward className='scale-150 hover:fill-eComOrangeColor hover:cursor-pointer'/>
              </ArrowSpan>
            </ArrowsContainer>
            <CurrentBig id="1" 
              className="current-image" 
              style={{display: "block"}} 
              src={`/e-commerce/image-product-${current}.jpg`} 
            />
          </div>
          <ThumbnailImgsContainer>
            <ThumbImgContainer>
              <ThumbImg 
                id="1"
                style={{backgroundImage: "url(/e-commerce/image-product-1-thumbnail.jpg)"}}
                onClick={handleChangeBigImage}
                >
              </ThumbImg>
            </ThumbImgContainer>
            <ThumbImgContainer>
              <ThumbImg 
                id="2" 
                style={{backgroundImage: "url(/e-commerce/image-product-2-thumbnail.jpg)"}}
                onClick={handleChangeBigImage}
                >
              </ThumbImg>
            </ThumbImgContainer>
            <ThumbImgContainer>
              <ThumbImg 
                id="3" 
                style={{backgroundImage: "url(/e-commerce/image-product-3-thumbnail.jpg)"}}
                onClick={handleChangeBigImage}
                >
              </ThumbImg>
            </ThumbImgContainer>
            <ThumbImgContainer>
              <ThumbImg 
                id="4" 
                style={{backgroundImage: "url(/e-commerce/image-product-4-thumbnail.jpg)"}}
                onClick={handleChangeBigImage}
                >
              </ThumbImg>
            </ThumbImgContainer>
          </ThumbnailImgsContainer>
        </GalleryContainer>
      </Wrapper>
    )
}

export default Gallery;