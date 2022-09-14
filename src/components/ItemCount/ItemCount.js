import React, {useState} from 'react';
import './ItemCount.css';
import {Link} from "react-router-dom"


function ItemCount () {
     const [amount,setAmount] = useState(1);
     //const [showCart,setShowCart] = useState (); 
           
     return(
       <div className="counter">
          <div className='text'>
            <div className='name'>
             <h2 className='amount'>Cantidad: {amount}</h2>
             <button className='btn btn-success mx-3' onClick={()=> setAmount(amount + 1)} disabled ={amount >= 8} >+</button> 
             <button className='btn btn-danger mx-3' onClick={()=> setAmount(amount - 1)} disabled ={amount === 0}>-</button>
             <button className='btn btn-warning mx-3'> Agregar al Carrito</button>
             <Link to="/cart"> <button className='btn btn-warning mx-3'> Ver Carrito</button> </Link>
             
             </div>
        </div>
      </div>

    )

} 



export default ItemCount;