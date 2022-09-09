import React from 'react';
import CardProd from '../../CardProducts/CardProd';



const ProductList = ({data =[]}) => {
  
    return (
        data.map(Products => <CardProd key={Products.id} response ={Products} />)
    );
}

export default ProductList;