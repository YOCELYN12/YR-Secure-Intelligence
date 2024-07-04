import React from 'react'
import { useState, useEffect } from 'react'
import { Post } from '../Fetch/Fetch'
import { set } from 'react-hook-form'
import { Delete } from '../Fetch/Fetch'
import Productos from './Productos'
import ListaProductos from './ListaProductos'
import { Get } from '../Fetch/Fetch'

const Catalogo = () => {

  const [intProducto, setIntProducto] = useState("")
  const [intPrecio, setIntePrecio] = useState("")
  const [intMarca, setIntMarca] = useState("")
  const [intDescripcion, setIntDescripcion] = useState("")
  const [intUnidades, setIntUnidades] = useState("")


  const [prod, setProd] = useState([])


  //Evento del boton para poder ingresar los datos a la API 
  const ingresarproducto = async (e) => {
    e.preventDefault()
    let datos = {
      producto: intProducto,
      precio: intPrecio,
      marca: intMarca,
      descripcion: intDescripcion,
      unidades: intUnidades
    }

    await Post(datos, "productos")
  }

  useEffect(() => {
    const mostrarProducto = async () => {
      const data = await Get("productos")
      setProd(data)
    }
    mostrarProducto()

  }, [prod])


  return (
    <>

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

        <a href="./Contacto" className='btn'><button>Contactenos</button></a>
      </header>


      <div>

        <input type="text" value={intProducto} onChange={(e) => setIntProducto(e.target.value)} placeholder='nombre del artirulo' />
        <input type="text" value={intMarca} onChange={(e) => setIntMarca(e.target.value)} placeholder='marca' />
        <input type="number" value={intPrecio} onChange={(e) => setIntePrecio(e.target.value)} placeholder='precio' />
        <input type="texto" value={intDescripcion} onChange={(e) => setIntDescripcion(e.target.value)} placeholder='descripcion del producto' />
        <input type="number" value={intUnidades} onChange={(e) => setIntUnidades(e.target.value)} placeholder='unidades disponibles' />


        <button onClick={ingresarproducto}>Ingresar producto</button>


      </div>


      <ListaProductos productosAPI={prod} />


      <div className='container-footer'>

        <footer className='footer'>

          <div className='container'>

            <div className='footer-row'>

              <div className='footer-links'>

                <h4>Empresa</h4>
                <ul>

                  <li><a href="#">Nosotos</a></li>
                  <li><a href="#">Politica de privacidad</a></li>
                  <li><a href="#">Afiliate</a></li>

                </ul>

              </div>


              <div className='footer-links'>

                <h4>Ayuda</h4>
                <ul>
                  <li><a href="#">Preguntas</a></li>
                  <li><a href="#">Compras</a></li>
                </ul>

              </div>

            </div>

          </div>

        </footer>
      </div>


    </>
  )
}

export default Catalogo
