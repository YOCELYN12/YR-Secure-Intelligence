import React, { useState } from 'react'
import { Put } from '../Fetch/Fetch'
import Productos from './Productos'
import InventarioCatalogo from './InventarioCatalogo'

const FormularioEditar = ({id}) => {

    const [producto, setProducto] = useState()
    const [precio, setPrecio] = useState()
    const [marca, setMarca] = useState()
    const [descripcion, setDescripcion] = useState()
    const [unidades, setUnidades] = useState()


    const validarPut = async () => {
        let actualizarDatos = {
            id:id,
            producto: producto,
            precio: precio,
            marca: marca,
            descripcion: descripcion,
            unidades: unidades
        }
        await Put(actualizarDatos, "productos")
    }

   

    return (
        <div>

            <div className='contenedorEditar'>

                <input className='inpEditar' type="text" onChange={(e) => setProducto(e.target.value)} placeholder='producto' />
                <input className='inpEditar' type="number" onChange={(e) => setPrecio(e.target.value)} placeholder='precio' />
                <input className='inpEditar' type="text" onChange={(e) => setMarca(e.target.value)} placeholder='marca' />
                <input className='inpEditar' type="text" onChange={(e) => setDescripcion(e.target.value)} placeholder='descripcion' />
                <input className='inpEditar' type="number" onChange={(e) => setUnidades(e.target.value)} placeholder='unidades' />

            </div>

            <button onClick={validarPut}>Editar Producto</button>
        </div>
    )
}

export default FormularioEditar
