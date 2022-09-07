import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail/ItemDetail'

const ProdDetail = {id: 1 ,image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}, price:109, title: "Fjallraven-Foldsack"}

function ItemDetailContainer() {
 const [data, setData] = useState ({});

 useEffect(() => {
   const getData = new Promise(resolve => {
    
      setTimeout(() => {
          resolve(ProdDetail)
      }, 2000);

   })
      
      getData.then(res => setData (res));

      }, [])
 

  return (
    <ItemDetail data= {data} />
  )
}

export default ItemDetailContainer;