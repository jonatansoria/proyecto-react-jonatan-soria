import React from 'react'
import { useCartContext } from '../../CartContext'
import "./ItemCart.css"

function ItemCart({product}) {
    const {deleteProduct} = useCartContext();

  return (

    <div className='cart-container'>
        <div>
            <img src={product.image} alt ={product.title}/>
        </div>
        <div>
            <p>Item : {product.title}</p>
            <p>Cantidad :{product.quantity} </p>
            <p>Precio : {product.price}</p>
            <p>Subtotal : $ {product.quantity * product.price}</p>
            <button onClick={()=> deleteProduct(product.id)}>Eliminar Producto</button>
        </div>

    </div>

    )
}

export default ItemCart