import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom';
import FreakyCat from '../Assets/img/FreakyCat.jpg';
import CartWidget from '../Cart/CartWidget';
import MenuCategory from '../Category/Category';


const NavBar = () => {
  return (
   <nav className='NavBar'>     
          <ul>
            <img src={FreakyCat} alt="logo" />
            <NavLink to ="/" className="NavLink">Home</NavLink>
            <MenuCategory className="NavLink"/>
            <NavLink className='Cart-logo' to="Cart"><CartWidget /></NavLink>
            <NavLink to = "/Form" className="NavLink">Check in</NavLink>
        </ul>
    </nav>
  )
}

export default NavBar;