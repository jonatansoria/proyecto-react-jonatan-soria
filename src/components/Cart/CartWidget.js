import React from 'react';
import "./CartWidget.css"
import { useCartContext } from '../../CartContext';


export const CartWidget = () => {

    const {totalProducts} = useCartContext ();

    return (
        <>
        <i className='bi bi-cart4'></i>
        <span className='count'>{totalProducts() || ""}</span> 
        </>
    );
  }
  export default CartWidget;