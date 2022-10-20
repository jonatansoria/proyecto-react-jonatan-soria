import * as React from 'react';
import {Link} from "react-router-dom"
import "./CardProd.css"

const CardProd = ({response}) => {
  return (

      <Link to={`/detail/${response.id}`}>
      
        <div className='card-container'>

            <img src={response.image} alt='producto' className='image'/>
            <h6 className='card-title'>{response.Title}</h6>  
            <p className='text1'>Descripcion : {response.Description}</p>  
            <p className='text2'>Precio : ${response.Price}</p> 
            <p className='text3'>Categoria: {response.Category}</p>
          </div>
        </Link>
  );
}
export default CardProd;