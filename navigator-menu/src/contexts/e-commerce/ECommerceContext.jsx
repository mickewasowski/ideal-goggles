import { createContext, useState } from "react";

export const ECommerceContext = createContext();

export const ECommerceInfoProvider = ({
    children
}) => {
    const [itemsCount, setItemsCount] = useState(0);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    const clearCart = () => setItemsCount(0);

    const addToCart = (count) => setItemsCount(count);

    const toggleGallery = (state) => setIsGalleryOpen(state);

    return(
        <ECommerceContext.Provider value={{itemsCount, isGalleryOpen, clearCart, addToCart, toggleGallery}}>
            {children}
        </ECommerceContext.Provider>
    )
}