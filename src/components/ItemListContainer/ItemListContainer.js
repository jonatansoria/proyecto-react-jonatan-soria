import React, { useState, useEffect } from 'react';
import {getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import './ItemListContainer.css'
import ProductList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';



   

const ItemListContainer = () => {
    const [data, setData] = useState ([]);
    
    const {categoriaId} = useParams ();

    useEffect (() => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb,"MoviesProducts") 
       
    if (categoriaId) {
       const queryCategory = query(queryCollection,where("Category", "==",categoriaId))
      getDocs(queryCategory)
       .then( res =>setData (res.docs.map(product => ({id: product.id,...product.data()}))))
    }
    else {
        getDocs(queryCollection)
       .then( res =>setData (res.docs.map(product => ({id: product.id,...product.data()}))))
    }

    },[categoriaId]);
  
    return (
        <div className='flex-container'>
          <ProductList data= {data} />
       </div>
    );
};

export default ItemListContainer;