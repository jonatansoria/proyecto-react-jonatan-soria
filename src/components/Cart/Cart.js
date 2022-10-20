import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../CartContext';
import ItemCart from './ItemCart';
import "./Cart.css"

function Cart () {
  const {cart, totalPrice} = useCartContext();



  if (cart.length === 0) {
    
    return (
      <div className='cart'>
        <p>El carrito esta vacio.</p>
        <Link to="/" className='go'>Ir a Comprar.</Link>
      </div>
    )
  }

  return (
    
    <div>
      {
        cart.map(product => <ItemCart key={product.id} product ={product}/> )
      }
      <p className='total'>Precio Total : $ {totalPrice()}</p>
      <Link to= "/Form"><button className='btn btn-warning mx-3'>Terminar Compra</button></Link>
      
    </div>

  )
}

export default Cart;