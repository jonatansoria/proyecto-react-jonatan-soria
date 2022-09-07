import React from 'react'


const ItemDetail = ({data}) => {

  return (
       <div className='container'>
        <img src={data.image} alt="imagen" />
        <div>
        <h2>{data.title}</h2>  
        </div> 
        <div>
        <h3>precio:{data.price}</h3>  
        </div> 
       </div>       
    );
}


export default ItemDetail;