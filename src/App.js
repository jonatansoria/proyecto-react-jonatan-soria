import React from 'react';
import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './CartContext';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';






const App = () => {
 
  return (
     <div>  
      <BrowserRouter> 
      <CartProvider>
      <NavBar /> 
       <Routes>
         <Route path='/' element ={<ItemListContainer />} />
         <Route path='/category/:categoriaId' element ={<ItemListContainer />} />
           <Route path='/detail/:detalleId' element ={<ItemDetailContainer />} />
            <Route path='/cart' element ={ <Cart />}/>
            <Route path='/Form' element ={ <Form />}/>  
       </Routes>
       <Footer />
     </CartProvider> 
    </BrowserRouter> 
  </div>

  )

}

export default App;