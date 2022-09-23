import React from 'react';
import CardProd from '../../CardProducts/CardProd';
import "./ItemList.css"



const ProductList = ({data =[]}) => {
  
    return (
        
          <div className='Card'>{data.map(Products => <CardProd key={Products.id} response ={Products} />)}</div>  
      
        
    );
}

export default ProductList;