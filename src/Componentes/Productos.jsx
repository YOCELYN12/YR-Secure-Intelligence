import React from 'react'
import Catalogo from './Catalogo'

const Productos = ({producto,precio,marca,descripcion,unidades}) => {
    

  return (
    <div>

      <h3>Nombre del producto{producto}</h3>
      <h3>Precio del producto{precio}</h3>
      <span>Marca del producto{marca}</span>
      <p>Descripcion del producto{descripcion}</p>
      <span>Cantidad de unidades {unidades}</span>

      

    </div>
  )
}

export default Productos
