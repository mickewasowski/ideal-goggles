import {ECommerceContext} from '../../../../contexts/e-commerce/ECommerceContext';

import {Details,SneakerH3, LimitedH1,DescriptionParag,Price,CurrentPriceWrapper,CurrentPriceParag,Discount,OriginalPriceWrapper,OriginalPriceParag, CartBtns,QuantityBtns,Btn,QuantityInput,AddToCartWrapper,CartImg,AddBtn} from './DetailsAndBtns.styles';

import { FiMinus,FiPlus } from 'react-icons/fi';
import { useContext, useState } from 'react';

function DetailsAndBtns(){
    const {addToCart} = useContext(ECommerceContext);
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    }

    const decrement = () =>{
      if ((count - 1) < 0) {
        setCount(0)
      }else{
        setCount(count - 1);
      }
    }

    const handleAddToCart = () => {
      addToCart(count);
      setCount(0);
    }

    return(
        <section className="details-and-buttons-container">
          <Details>
            <div className="headings">
              <SneakerH3>Sneaker Company</SneakerH3>
              <LimitedH1>Fall Limited Edition Sneakers</LimitedH1>
            </div>
            <div className="description">
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
              <Btn onClick={decrement}>
                <FiMinus className='scale-150 text-eComOrangeColor hover:cursor-pointer'/>
              </Btn>
              <QuantityInput id="quantity" value={count} type="number" min="0" onChange={() => {}}/>
              <Btn onClick={increment}>
                <FiPlus className='scale-150 text-eComOrangeColor hover:cursor-pointer'/>
              </Btn>
            </QuantityBtns>
            <AddToCartWrapper onClick={handleAddToCart}>
              <CartImg src="/e-commerce/icon-cart.svg" />
              <AddBtn>
                Add to cart
              </AddBtn>
            </AddToCartWrapper>
          </CartBtns>
        </section>
    )
}

export default DetailsAndBtns;