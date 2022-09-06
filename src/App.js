import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



const App = () => {
 
  return (
     <div>   
      <NavBar /> 
    <div className='App-container'>   
       <ItemListContainer />
      </div>
   </div>

  )

}

export default App;