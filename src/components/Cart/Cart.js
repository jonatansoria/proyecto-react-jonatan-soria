import {addDoc,collection,getFirestore} from "firebase/firestore";
import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../CartContext';
import ItemCart from './ItemCart';
import "./Cart.css"

function Cart () {
  const {cart, totalPrice} = useCartContext();

  const order = {
    client :{
          name:"Jonatan",
          email:"jonatansoria@gmail.com",
          phone:"13242546",
          address:"Madryn"
          },
      items: cart.map(product => ({id: product.id, title: product.Title, price: product.Price, quantity: product.quantity})),
      total: totalPrice(),    
  }
  const handleClick = () => {
        const db = getFirestore();
        const orderCollection = collection(db,"orders");
        addDoc(orderCollection,order)
        .then(({ id }) => alert(id))

  } 

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
      <button className='total' onClick={handleClick}>Confimar Compra</button>
    </div>

  )
}

export default Cart;