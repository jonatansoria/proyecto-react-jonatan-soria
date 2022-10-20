import React from "react";
import {useState } from "react";
import {useCartContext } from '../../CartContext';
import {db} from '../../firebase/config'
import { addDoc, collection} from "firebase/firestore";
import  Alerts from "../Alert/Alert"
import "./Form.css"




 
    
    const Form = () => { 
        const {cart, totalPrice} = useCartContext()
        const [ordersID, setOrdersID]= useState ("");
        
    const order = {
                fullName:"",
                email:"",
                address: "",
                city: "",
   
        items: cart.map (product => ({id: product.id, title: product.Title, price: product.Price, quantity: product.quantity})),
            total: totalPrice()
        }
    
  const [values, setValues] = useState(order);
    
    const handleOnchange = (e) => {
        const {value, name} = e.target;
        setValues({...values,[name]:value})
    };   

    const onSubmit= async (e) =>{
        e.preventDefault();
        const buy = await  addDoc( collection (db, 'orders'),{
            values,
            
        });
        setOrdersID(buy.id)
        setValues(order)
    }    
    return (
            <div className="formContainer">
        <h3 className="title">Necesitamos tus datos para confirmar la compra:</h3>

        <form onSubmit={onSubmit}> 
            <h5>Formulario</h5>
        <div>
        <label>Nombre Completo</label>
        <input
            type="text"
            name="fullName"
            value={values.fullName}
            onChange={handleOnchange}
            />
            </div>
        <div>
        <label>Email</label>        
        <input 
            type="email"
            name="email"
            value={values.email}
            onChange={handleOnchange}
            />
            </div>
        <div>
        <label>Direccion</label>        
       <input
            type="text"
             name="address"
             value={values.address}
             onChange={handleOnchange}
             />
            </div>
        <div>
        <label>Ciudad</label>
        <input
            type="text"
            name="city"
            value={values.city}
            onChange={handleOnchange}
            />
            </div>
        <input type="submit" className="btn btn-warning mb-3" value="Confirmar compra"/>
        {ordersID && <Alerts ordersID={ordersID}/>}
        </form>
    </div>
    )
   } 
            

export default Form;