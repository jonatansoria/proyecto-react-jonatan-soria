import React from 'react'
import { useCartContext } from '../../CartContext'
import "./ItemCart.css"

function ItemCart({product}) {
    const {deleteProduct} = useCartContext();

  return (

    <table className="custon">
      <tr>
        <th>Item</th>
        <th>cantidad</th>
        <th>precio</th>
        <th>SubTotal</th>
        <th className="deleteAll">Eliminar</th>
      </tr>
     
      <tr>
        <td className="info">{product.Title} </td> 
        <td className="info">{product.quantity} </td>
        <td className="info">$ {product.Price} </td>  
        <td className="info"> $ {product.quantity * product.Price} </td>
        <td ><button className="delete" onClick={()=> deleteProduct(product.id)}>Borrar</button> </td>     
      </tr>    
</table>
    )
}

export default ItemCart