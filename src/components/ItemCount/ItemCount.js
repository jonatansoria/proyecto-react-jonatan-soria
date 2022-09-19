import React, {useState,useEffect} from 'react';
import './ItemCount.css';




function ItemCount ({initial, stock, onAdd}) {
     const [amount,setAmount] = useState(parseInt (initial));

     const decrease =() => {
      setAmount (amount -1);
     }

     const increase =() => {
      setAmount (amount +1);
     }
     useEffect (() =>{
      setAmount(parseInt(initial))
     },[initial])

     return(
       <div className="counter">
          <div className='text'>
            <div className='name'>
             <h3 className='amount'>Cantidad: {amount}</h3>
             <button className='btn btn-success mx-3' disabled ={amount <= 1} onClick={decrease}>-</button> 
             <button className='btn btn-danger mx-3' disabled ={amount >= stock} onClick={increase}>+</button>
             <button className='btn btn-warning mx-3' disabled ={stock <=0} onClick={() => onAdd(amount)}> Agregar al Carrito</button>             
             </div>
        </div>
      </div>

    )
} 
  



export default ItemCount;