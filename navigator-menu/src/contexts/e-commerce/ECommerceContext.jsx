import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ECommerceContext = createContext();

export const ECommerceInfoProvider = ({ children }) => {
  const [itemsCount, setItemsCount] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const clearCart = () => setItemsCount(0);

  const addToCart = (count) => setItemsCount(itemsCount + count);

  const toggleGallery = (bool) => setIsGalleryOpen(bool);

  return (
    <ECommerceContext.Provider
      value={{ itemsCount, isGalleryOpen, clearCart, addToCart, toggleGallery }}
    >
      {children}
    </ECommerceContext.Provider>
  );
};

ECommerceInfoProvider.propTypes = {
  children: PropTypes.object,
};
