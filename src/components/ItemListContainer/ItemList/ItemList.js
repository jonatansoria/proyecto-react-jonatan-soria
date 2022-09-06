import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CardProd from '../../CardProducts/CardProd';
import './ItemList.css'


const ProductList = () => {
    const [product, setProduct] = useState ([]);
    const [Loading,setLoading] =useState ()

    useEffect (() => {
        

    axios('https://fakestoreapi.com/products?limit=6').then((res) =>
    setProduct(res.data)
    );
    setTimeout(() => {
       setLoading(true) 
    }, 2000);

    },[] );
  
    return (
        <div className='Card'>
            {product.map((prod) => {
                return (
               <div key={prod.id}>
                 {Loading ? <CardProd response={prod} /> :null}
               </div>
               );    
            })}
       </div>
    );
};

export default ProductList;