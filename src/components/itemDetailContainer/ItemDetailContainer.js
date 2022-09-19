import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail/ItemDetail';
import {Link,useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetailContainer.css";
import { useCartContext } from '../../CartContext';


const Products = [
  {id: 1 ,image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", category:'menClothes', price:120,title: "Foldsack" },
  {id: 2 ,image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", category:'menClothes', price:150, title: "Slim Fit T-Shirts"},
  {id: 3 ,image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", category:'menClothes', price:1200, title: "Cotton Jacket"},
  {id: 4 ,image:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg", category:'jewelery', price:600, title: "Silver Dragon Station Chain Bracelet"},
  {id: 5 ,image:"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", category:'jewelery', price:180, title: "Solid Gold Petite"},
  {id: 6 ,image:"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg", category:'jewelery', price:100, title: "White Gold Plated Princess"}
];


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

      const getData = new Promise (resolve => {
          setTimeout(() => {
              resolve(Products) 
          }, 2000);
      });
      
      getData.then(res => {
        setData(res.find(Product => Product.id === parseInt(detalleId)))}); 

  },[detalleId])

  return (
      <div className='flex-container'>
              <div key={data.id}>              
                <ItemDetail data= {data} />
              </div>  
              {
                seeCart
                ? <Link to= "/cart"><button className='btn btn-warning mx-3'>Terminar Compra</button> </Link>
                :<ItemCount initial ={1} stock= {6} onAdd={onAdd} />
              }
                  
         </div>
  );
};


export default ItemDetailContainer;


