import React, { useState } from 'react'
import { Delete } from '../Fetch/Fetch'
import FormularioEditar from './FormularioEditar'
import ListaProductos from './ListaProductos'


const Productos = ({producto,precio,marca,descripcion,unidades,eliminar,editarProducto}) => {

  const [mostrar,setMostrar] = useState(false)
  
 

  return (
    <div className='contenedor-card'>

      <h3>Nombre del producto{producto}</h3>
      <h3>Precio del producto{precio}</h3>
      <span>Marca del producto{marca}</span>
      <p>Descripcion del producto{descripcion}</p>
      <span>Cantidad de unidades {unidades}</span>

      <button onClick={eliminar}>Eliminar</button>
      <button onClick={editarProducto} >Editar</button>
      {mostrar && <FormularioEditar  nombre={producto}/>}

    </div>
  )
}

export default Productos
