import { createContext, useState } from "react";

export const ECommerceContext = createContext();

const initialState = {
    itemsCount: 0
}

export const ECommerceInfoProvider = ({
    children
}) => {
    const [itemsCount, setItemsCount] = useState(initialState);

    const clearCart = () => setItemsCount(initialState);

    const addToCart = (count) => setItemsCount({
        itemsCount: count
    });

    return(
        <ECommerceContext.Provider value={{itemsCount, clearCart, addToCart}}>
            {children}
        </ECommerceContext.Provider>
    )
}