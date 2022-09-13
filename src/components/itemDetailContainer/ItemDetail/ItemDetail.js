import React from 'react'
import CardProd from '../../CardProducts/CardProd';


function itemDetail({data={}}) {
  return (
   
      <CardProd key={data.id} response ={data} />)
     
}

export default itemDetail;