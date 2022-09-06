import React from 'react';
import './NavBar.css'
import FreakyCat from '../Assets/img/FreakyCat.jpg';

const NavBar = () => {
  return (
   <nav className='NavBar'>     
          <ul>
            <img src={FreakyCat} alt="logo" />
            <li>Home</li>
            <li>Productos</li>
            <li>Contactos</li>
            <li>Nosotros</li>
        </ul>
    </nav>
  )
}

export default NavBar;