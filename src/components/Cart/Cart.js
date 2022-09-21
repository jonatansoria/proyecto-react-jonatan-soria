import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../CartContext';
import ItemCart from './ItemCart';
import "./Cart.css"

function Cart () {
  const {cart, totalPrice} = useCartContext();

  if (cart.length === 0) {
    
    return (
      <div>
        <p>El carrito esta vacio.</p>
        <Link to="/">Ir a Comprar.</Link>
      </div>
    )
  }

  return (
    
    <div>
      {
        cart.map(product => <ItemCart key={product.id} product ={product}/> )
      }
      <p className='total'>Precio Total : $ {totalPrice()}</p>
    </div>

  )
}

export default Cart;