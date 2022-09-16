/*import React, { useState, useContext } from "react";


export const CartContext = createContext {};

const CartProvider =({children}) => {

const [cart, setCart] = useState ({});

const addProdcut = (item, NewAmount) => {
    const newCart= cart.filter(prod => prod.id !== item.id);
    newCart.push({...item,amount: NewAmount});
    setCart(newCart)
}

const clearCart = () => setCart({});

const isCart = () => cart.find(product => product.id === id)? true : false;

const deleteProduct = (id) => setCart(cart.filter(product =>product.id !== id));

    return (
        <CartContext.Provider value={{
          addProdcut,
          clearCart,
          isCart,
          deleteProduct
        }}>
          {children}
        </CartContext.Provider>    
    )
}
export default CartProvider;*/