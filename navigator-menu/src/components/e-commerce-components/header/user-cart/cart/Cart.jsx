import {CartList,CartHeadingContainer, H3,CartContent,EmptyCartParag,CartItem,ImageThumbnailWrapper,ImageThumb,ItemDetails,Strong,CheckOutBtn} from './Cart.styles';

import imageThumbnail from '../../../../../assets/e-commerce/image-product-1-thumbnail.jpg';
import deleteIcon from '../../../../../../public/e-commerce/icon-delete.svg';

function Cart({isCartOpen}){

    return(
        <CartList style={isCartOpen ? {display: 'block'} : {display: 'none'}}>
            <CartHeadingContainer>
                <H3>Cart</H3>
            </CartHeadingContainer>
            <CartContent>
                <CartItem style={{display: 'flex'}}>
                    <ImageThumbnailWrapper>
                        <ImageThumb src={imageThumbnail} />
                    </ImageThumbnailWrapper>
                    <ItemDetails>
                        <h5>Fall Limited Edition Sneakers</h5>
                        <h5 id="items-price">$125.00 x 3 <Strong>$375.00</Strong></h5>
                    </ItemDetails>
                    <div className="delete-icon">
                        <img src={deleteIcon} className="cursor-pointer" />
                    </div>
                </CartItem>
                <CheckOutBtn style={{display: 'inline'}}>Checkout</CheckOutBtn>
                <EmptyCartParag style={{display: 'none'}}>
                    Your cart is empty.
                </EmptyCartParag>
            </CartContent>
        </CartList>
    )
}

export default Cart;