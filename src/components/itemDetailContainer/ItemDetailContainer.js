import React, {useEffect, useState} from 'react';
import {getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from './ItemDetail/ItemDetail';
import {Link,useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetailContainer.css";
import { useCartContext } from '../../CartContext';



  const ItemDetailContainer = () => {
  const [data, setData] = useState ({});
  const [seeCart,setSeeCart] = useState (false);
  const {addProduct} = useCartContext ();
 

 const onAdd = (quantity) => {
     setSeeCart(true) ;
     addProduct(data,quantity);

 }

  const {detalleId} = useParams ();

  useEffect (() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb,"MoviesProducts", detalleId)
    getDoc(queryDoc)
    .then( res => setData({id: res.id,...res.data()}) )  
  },[detalleId])

  return (
      <div className='flex-container'>
              <div key={data.id}>              
                <ItemDetail data= {data} />
              </div>  
              {
                seeCart
                ? <Link to= "/cart"><button className='btn btn-warning mx-3'>Ver Carrito</button><Link to= "/"><button className='btn btn-warning mx-3'>Seguir Comprando</button></Link></Link> 
               
                :<ItemCount initial ={1} stock= {6} onAdd={onAdd} />
              }
                  
         </div>
  );
};


export default ItemDetailContainer;


