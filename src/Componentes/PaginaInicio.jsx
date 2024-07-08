import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import RegistroPagina from '../Pages/RegistroPagina'
import LoginPagina from '../Pages/LoginPagina'

function PaginaInicio() {
  const navegar = useNavigate()

  return (
    <>

      <div className='container-button'>
        <h1>Bienvenido somos TechSolution</h1>
        <button className='button-registro' onClick={() => { navegar("/RegistroPagina") }}>Registro</button>
        <button className='button-login' onClick={() => { navegar("/LoginPagina") }}> Login</button>
      </div>
      
      <div className='contenedor-foto'>
        <figure>

          <div className='capa'>

            <p >Quienes somos:
              líderes en el desarrollo de aplicativos web y APIs con un enfoque incomparable en ciberseguridad avanzada. <br />
              En un mundo cada vez más interconectado, nuestra misión es proporcionar soluciones tecnológicas innovadoras <br />
              que no solo cumplen con los estándares de funcionalidad y rendimiento, sino que también garantizan la protección <br />
              integral de los datos y sistemas de nuestros clientes.
            </p>

          </div>

        </figure>

      </div>


      <img className='contac' src="src/img/login2.png" alt="" />


      <div className='identidad'>
        <div>
          <p className='parrafo'>
            Nuestro equipo de expertos no solo desarrolla <br />
            aplicativos web y APIs robustos y eficientes, sino que también los fortalece <br />
            con capas de protección casi impenetrables. Cada línea de código está diseñada <br />
            para resistir ataques y asegurar la integridad de tus datos y sistemas.
          </p>
        </div>
      </div>


    </>

  )
}

export default PaginaInicio
