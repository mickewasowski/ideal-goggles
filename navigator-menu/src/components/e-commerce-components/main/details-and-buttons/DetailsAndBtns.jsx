import {Details,SneakerH3, LimitedH1,DescriptionParag,Price,CurrentPriceWrapper,CurrentPriceParag,Discount,OriginalPriceWrapper,OriginalPriceParag, CartBtns,QuantityBtns,Btn,QuantityInput,AddToCartWrapper,CartImg,AddBtn} from './DetailsAndBtns.styles';

import { FiMinus,FiPlus } from 'react-icons/fi';

function DetailsAndBtns(){

    return(
        <section class="details-and-buttons-container">
          <Details>
            <div class="headings">
              <SneakerH3>Sneaker Company</SneakerH3>
              <LimitedH1>Fall Limited Edition Sneakers</LimitedH1>
            </div>
            <div class="description">
              <DescriptionParag>
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.
              </DescriptionParag>
            </div>
            <Price>
              <CurrentPriceWrapper>
                <CurrentPriceParag>$125.00</CurrentPriceParag>
                <Discount>50%</Discount>
              </CurrentPriceWrapper>
              <OriginalPriceWrapper>
                <OriginalPriceParag>$250.00</OriginalPriceParag>
              </OriginalPriceWrapper>
            </Price>
          </Details>
          <CartBtns>
            <QuantityBtns>
              <Btn>
                <FiMinus className='scale-150 text-eComOrangeColor hover:cursor-pointer'/>
              </Btn>
              <QuantityInput id="quantity" value="0" type="number" min="0" />
              <Btn>
                <FiPlus className='scale-150 text-eComOrangeColor hover:cursor-pointer'/>
              </Btn>
            </QuantityBtns>
            <AddToCartWrapper>
              <CartImg src="/e-commerce/icon-cart.svg" />
              <AddBtn onclick="addToCart()">
                Add to cart
              </AddBtn>
            </AddToCartWrapper>
          </CartBtns>
        </section>
    )
}

export default DetailsAndBtns;