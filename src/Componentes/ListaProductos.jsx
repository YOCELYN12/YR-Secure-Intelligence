import React from 'react'
import Productos from './Productos'

const ListaProductos = ({ productosAPI }) => {
    return (
        <div>
            {productosAPI.map((produc, index) => (
                <Productos
                    key={index}
                    producto={produc.producto}
                    precio={produc.precio}
                    marca={produc.marca}
                    descripcion={produc.descripcion}
                    unidades={produc.unidades}
                />
            ))}
        </div>
    )
}

export default ListaProductos
