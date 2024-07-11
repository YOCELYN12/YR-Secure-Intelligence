import React, { useState } from 'react'
import { Delete } from '../Fetch/Fetch'
import ListaProductos from './ListaProductos'
import { Card } from 'react-bootstrap'


const Productos = ({producto,precio,marca,descripcion,unidades,eliminar,editarProducto}) => {

  const [mostrar,setMostrar] = useState(false)
  
 

  return (
    <div className='contenedor-card'>
      
      
      <p>Producto: {producto}</p>
      <p>Precio:{precio}</p>
      <span>Marca:{marca}</span>
      <p>Descripcion{descripcion}</p>
      <span>Unidades {unidades}</span>

      <button  onClick={eliminar}>Eliminar</button>
      <button onClick={editarProducto} >Editar</button>
      {mostrar && <FormularioEditar  nombre={producto}/>}

    </div>
  )
}

export default Productos
