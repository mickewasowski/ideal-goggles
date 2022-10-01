import { useContext } from 'react';
import { ECommerceContext } from '../../../../../contexts/e-commerce/ECommerceContext';
import {
  CartList,
  CartHeadingContainer,
  H3,
  CartContent,
  EmptyCartParag,
  CartItem,
  ImageThumbnailWrapper,
  ImageThumb,
  ItemDetails,
  Strong,
  CheckOutBtn,
} from './Cart.styles';
import imageThumbnail from '/e-commerce/image-product-1-thumbnail.jpg';
import deleteIcon from '../../../../../../public/e-commerce/icon-delete.svg';
import PropTypes from 'prop-types';

function Cart({ isCartOpen }) {
  const { itemsCount, clearCart } = useContext(ECommerceContext);

  return (
    <CartList className={`${isCartOpen ? 'block' : 'hidden'}`}>
      <CartHeadingContainer>
        <H3>Cart</H3>
      </CartHeadingContainer>
      <CartContent>
        {itemsCount > 0 ? (
          <>
            <CartItem className={'flex'}>
              <ImageThumbnailWrapper>
                <ImageThumb src={imageThumbnail} />
              </ImageThumbnailWrapper>
              <ItemDetails>
                <h5>Fall Limited Edition Sneakers</h5>
                <h5 id="items-price">
                  $125.00 x {itemsCount}
                  <Strong>${(itemsCount * 125).toFixed(2)}</Strong>
                </h5>
              </ItemDetails>
              <div className="delete-icon" onClick={clearCart}>
                <img src={deleteIcon} className="cursor-pointer" />
              </div>
            </CartItem>
            <CheckOutBtn className={'inline'}>Checkout</CheckOutBtn>
          </>
        ) : (
          <EmptyCartParag className={'inline'}>
            Your cart is empty.
          </EmptyCartParag>
        )}
      </CartContent>
    </CartList>
  );
}

Cart.propTypes = {
  isCartOpen: PropTypes.bool,
};

export default Cart;
