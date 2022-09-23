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
            <p>Item : {product.Title}</p>
            <p>Cantidad :{product.quantity} </p>
            <p>Precio : {product.Price}</p>
            <p>Subtotal : $ {product.quantity * product.Price}</p>
            <button onClick={()=> deleteProduct(product.id)}>Eliminar Producto</button>
        </div>

    </div>

    )
}

export default ItemCart