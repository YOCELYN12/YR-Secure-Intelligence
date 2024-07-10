import React from 'react'
import { useNavigate } from 'react-router-dom'
import Contacto from '../Pages/Contacto'


const Header = () => {
  const navegar = useNavigate()

  return (
    <>
    <div>
      
      <header className='header'>

        <div className='logo'>
          <img src="src/img/LogoTech.png" alt="" />
        </div>

        <nav>

          <ul className='nav-links'>

            <li><a href="./Home">Services</a></li>
            <li><a href="./Home">Projects</a></li>
            <li><a href="./Catalogo">Productos</a></li>

          </ul>

        </nav>

        <button onClick={() => {navegar("/Contacto") }} >Contactenos</button> 

      </header>

    
    </div>

    </>
  )
}

export default Header
