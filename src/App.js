import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';

import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';



const App = () => {
 
  return (
     <div>   
      <NavBar /> 
    <div className='App-container'>   
      <ItemDetailContainer />
      </div>
   </div>

  )

}

export default App;