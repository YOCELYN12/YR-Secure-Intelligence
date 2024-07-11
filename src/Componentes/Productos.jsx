import React, { useState } from 'react'
import { Delete } from '../Fetch/Fetch'
import ListaProductos from './ListaProductos'



const Productos = ({producto,precio,marca,descripcion,unidades,eliminar,editarProducto}) => {

  const [mostrar,setMostrar] = useState(false)
  
 

  return (
    <div className='cont-Padre'>
    <div className='contenedor-card'>
      
      
      <p>Producto: {producto}</p>
      <p>Precio:{precio}</p>
      <span>Marca:{marca}</span>
      <p>Descripcion:{descripcion}</p>
      <span>Unidades:{unidades}</span>

      <button className='btns-productos' onClick={eliminar}>Eliminar</button>
      <button className='btns-productos' onClick={editarProducto} >Editar</button>
      {mostrar && <FormularioEditar  nombre={producto}/>}

    </div>

    </div>
  )
}

export default Productos
