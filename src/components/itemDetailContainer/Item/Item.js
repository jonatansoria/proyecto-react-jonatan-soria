import React from 'react'
import {Link} from 'react-router-dom'


const Item = ({ info }) => {

  return (
        <Link to={`/detalle/${info.id}`} className="detail">
        <img src={info.image} alt="imagen" />
        <h2>{info.title}</h2> 
        <p>precio:{info.price}</p>
        </Link>       
    );
}


export default Item;