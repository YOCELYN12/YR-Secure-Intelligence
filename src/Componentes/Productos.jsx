import React, { useState } from 'react'
import { Delete } from '../Fetch/Fetch'
import FormularioEditar from './FormularioEditar'


const Productos = ({producto,precio,marca,descripcion,unidades,eliminar,editar}) => {

  const [mostrar,setMostrar] = useState(false)
  const [id,setID]=useState()
  const editarProducto = (id)=>{
    setMostrar (true)
    setID(id)
    console.log(id);
  }

  return (
    <div>

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
