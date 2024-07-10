import React from 'react'
import Productos from './Productos'
import { Delete } from '../Fetch/Fetch'


const ListaProductos = ({ productosAPI,editarBTN }) => {

    const deleteProducto = async (id) => {
        await Delete(id,"productos/")
    }

    return (
        <div className='centrar'>
            <div className='contenedor-productos'>
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
                    editarProducto={()=>editarBTN(produc.id)}
                    
            

                />

            ))}
        </div>
        </div>
    )
}

export default ListaProductos
