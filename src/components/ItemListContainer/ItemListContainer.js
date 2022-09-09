import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ProductList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';



const Products = [
    {id: 1 ,image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", category:'menClothes', price:120,title: "Foldsack" },
    {id: 2 ,image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", category:'menClothes', price:150, title: "Slim Fit T-Shirts"},
    {id: 3 ,image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", category:'menClothes', price:1200, title: "Cotton Jacket"},
    {id: 4 ,image:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg", category:'jewelery', price:600, title: "Silver Dragon Station Chain Bracelet"},
    {id: 5 ,image:"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", category:'jewelery', price:180, title: "Solid Gold Petite"},
    {id: 6 ,image:"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg", category:'jewelery', price:100, title: "White Gold Plated Princess"}
]


   

const ItemListContainer = () => {
    const [data, setData] = useState ([]);
    
    const {categoriaId} = useParams ();

    useEffect (() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(Products) 
            }, 2000);
        });
        
    if (categoriaId) {
       getData.then(res => setData (res.filter(Product => Product.category === categoriaId)));
    }
    else {
        getData.then(res => setData(res));
    }

    },[categoriaId]);
  
    return (
        <div className='Card'>
          <ProductList data= {data} />
       </div>
    );
};

export default ItemListContainer;