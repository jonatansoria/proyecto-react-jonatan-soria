import React from 'react'
import Item from '../Item/Item'

function itemDetail({data =[]} ) {
  return (
   
       data.map(Products => <Item key={Products.id} info ={Products} />)
     
  )
}

export default itemDetail;