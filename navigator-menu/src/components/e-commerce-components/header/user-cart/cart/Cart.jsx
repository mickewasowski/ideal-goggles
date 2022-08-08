import { useContext } from 'react';
import {ECommerceContext} from '../../../../../contexts/e-commerce/ECommerceContext';

import {CartList,CartHeadingContainer, H3,CartContent,EmptyCartParag,CartItem,ImageThumbnailWrapper,ImageThumb,ItemDetails,Strong,CheckOutBtn} from './Cart.styles';

import imageThumbnail from '/e-commerce/image-product-1-thumbnail.jpg';
import deleteIcon from '../../../../../../public/e-commerce/icon-delete.svg';

function Cart({isCartOpen}){
    const {itemsCount, clearCart} = useContext(ECommerceContext);

    return(
        <CartList style={isCartOpen ? {display: 'block'} : {display: 'none'}}>
            <CartHeadingContainer>
                <H3>Cart</H3>
            </CartHeadingContainer>
            <CartContent>
            {
                itemsCount.itemsCount > 0
                ?
                <>
                    <CartItem style={{display: 'flex'}}>
                        <ImageThumbnailWrapper>
                            <ImageThumb src={imageThumbnail} />
                        </ImageThumbnailWrapper>
                        <ItemDetails>
                            <h5>Fall Limited Edition Sneakers</h5>
                            <h5 id="items-price">$125.00 x {itemsCount.itemsCount}<Strong>${(itemsCount.itemsCount * 125).toFixed(2)}</Strong></h5>
                        </ItemDetails>
                        <div className="delete-icon" onClick={clearCart}>
                            <img src={deleteIcon} className="cursor-pointer" />
                        </div>
                    </CartItem>
                    <CheckOutBtn style={{display: 'inline'}}>Checkout</CheckOutBtn>
                </>
                :
                <EmptyCartParag style={{display: 'inline'}}>
                    Your cart is empty.
                </EmptyCartParag>
            }
            </CartContent>
        </CartList>
    )
}

export default Cart;