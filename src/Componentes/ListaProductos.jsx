import React from 'react'
import Productos from './Productos'
import { Delete } from '../Fetch/Fetch'


const ListaProductos = ({ productosAPI }) => {

    const deleteProducto = async (id) => {
        await Delete(id,"productos/")
    }

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
                    
                    eliminar={() => {
                        deleteProducto(produc.id)
                    }}

                />

            ))}
        </div>
    )
}

export default ListaProductos
