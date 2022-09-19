import React, { useContext, useState } from "react";

export const useCartContext =() => useContext(CartContext);

const CartContext = React.createContext ([]);

const CartProvider =({children}) => {

const [cart, setCart] = useState ([]);

const addProduct = (item,quantity) => {
    if (isInCart(item.id)){
      setCart(cart.map(product =>{
        return product.id === item.id ? {...product, quantity:product.quantity + quantity}:product

      }));
    } else {
      setCart([...cart,{...item, quantity}]);
    }
}

const clearCart = () => setCart([]);

const isInCart = (id) => cart.find(product => product.id === id)? true : false;

const deleteProduct = (id) => setCart(cart.filter(product =>product.id !== id));

    return (
        <CartContext.Provider value={{
          addProduct,
          clearCart,
          isInCart,
          deleteProduct
        }}>
          {children}
        </CartContext.Provider>    
    )
}
export default CartProvider;