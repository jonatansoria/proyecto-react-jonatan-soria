import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom';
import FreakyCat from '../Assets/img/FreakyCat.jpg';
import CartWidget from '../Cart/CartWidget';

const NavBar = () => {
  return (
   <nav className='NavBar'>     
          <ul>
            <img src={FreakyCat} alt="logo" />
            <NavLink to ="/" className="NavLink">Home</NavLink>
            <NavLink to = "/" className="NavLink">Contactos</NavLink>
            <NavLink to ="/category/menClothes" className="NavLink">Men Clothes</NavLink>
            <NavLink to ="/category/jewelery" className="NavLink">jewelery</NavLink>
            <NavLink className='Cart-logo' to="Cart"><CartWidget /></NavLink>
        </ul>
    </nav>
  )
}

export default NavBar;