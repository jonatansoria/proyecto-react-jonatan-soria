import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
              <h5>FreakyCat s.a</h5>
           <ul className='list'>
               <li>Dir: Pto. Madryn/Chubut</li>
               <li>Tel: 280-4559988</li>
               <li>Mail:freakycat@gmail.com</li>
           </ul> 
          </div>
          <div className='col'>
               <h5>Categorias</h5>
            <ul>
               <li className='list'><Link to = "/category/Laminas" className='list'>Laminas</Link></li>
               <li className='list'><Link to = "/category/Remeras" className='list'>Rmeras</Link></li>
               <li className='list'><Link to = "/category/Tazas" className='list'>Tazas</Link></li>
            </ul>
          </div>
          <div className='col'>
             <h5>Secciones</h5>
            <ul >
              <li className='list'><Link to ="/" className='list'>Home</Link></li> 
              <li className='list'><Link to="/Cart" className='list'>Ver Carrito</Link></li>
              <li className='list'><Link to = "/Form" className='list'>Check in</Link></li>
            </ul>
          </div>
        </div>
        <div className='row'>
            <p className='legal'>
                 &copy;{new Date().getFullYear()} | FreakyCat s.a | Todos los derechos reservados.
           </p>
        </div>
     </div>
  </div>
  )
}

export default Footer