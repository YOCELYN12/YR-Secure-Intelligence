import React from 'react'
import { useState, useEffect } from 'react'
import { Post } from '../Fetch/Fetch'
import Productos from './Productos'
import ListaProductos from './ListaProductos'
import { Delete } from '../Fetch/Fetch'
import { Get } from '../Fetch/Fetch'
import FormularioEditar from './FormularioEditar'
import { Put } from '../Fetch/Fetch'


const InventarioCatalogo = () => {
    //Constantes para poder ingresar el producto, y sus caracteristicas.
    const [intProducto, setIntProducto] = useState("")
    const [intPrecio, setIntePrecio] = useState("")
    const [intMarca, setIntMarca] = useState("")
    const [intDescripcion, setIntDescripcion] = useState("")
    const [intUnidades, setIntUnidades] = useState("")
    const [id, setID] = useState()
    const [prod, setProd] = useState([])

    //Evento del boton para poder ingresar los datos a la API 
    const ingresarproducto = async (e) => {
        e.preventDefault()
        let datos = {
            id: id,
            producto: intProducto,
            precio: intPrecio,
            marca: intMarca,
            descripcion: intDescripcion,
            unidades: intUnidades
        }

        await Post(datos, "productos")
    }

    //Constante para poder mostrar la opcion de editar los productos. 
    const [producto, setProducto] = useState()
    const [precio, setPrecio] = useState()
    const [marca, setMarca] = useState()
    const [descripcion, setDescripcion] = useState()
    const [unidades, setUnidades] = useState()

    useEffect(()=>{
        const obtenerDatos=async()=>{
            const getDatos = await Get("productos")
            setProd(getDatos)
        }
        obtenerDatos()
    },[])

   //Funcion para el boton Editar, y que aparezca las opciones editables. 
   const validarPut = async (id) => {
        let actualizarDatos = {
            id:id,
            producto: producto,
            precio: precio,
            marca: marca,
            descripcion: descripcion,
            unidades: unidades
        }
            
        await Put(actualizarDatos,"productos")
    }

    return (
        <>
            <div className='Base'>

                <input type="text" value={intProducto} onChange={(e) => setIntProducto(e.target.value)} placeholder='nombre del artirulo' />
                <input type="text" value={intMarca} onChange={(e) => setIntMarca(e.target.value)} placeholder='marca' />
                <input type="number" value={intPrecio} onChange={(e) => setIntePrecio(e.target.value)} placeholder='precio' />
                <input type="texto" value={intDescripcion} onChange={(e) => setIntDescripcion(e.target.value)} placeholder='descripcion del producto' />
                <input type="number" value={intUnidades} onChange={(e) => setIntUnidades(e.target.value)} placeholder='unidades disponibles' />

                <button onClick={ingresarproducto}>Ingresar producto</button>
                <ListaProductos productosAPI={prod} editarBTN={validarPut} />
                
            {/* FORMULARIO EDITAR */}
            
            <input type="text"  onChange={(e) => setProducto(e.target.value)} placeholder='nombre del artirulo' />
                <input type="text"  onChange={(e) => setMarca(e.target.value)} placeholder='marca' />
                <input type="number"  onChange={(e) => setPrecio(e.target.value)} placeholder='precio' />
                <input type="texto"  onChange={(e) => setDescripcion(e.target.value)} placeholder='descripcion del producto' />
                <input type="number"  onChange={(e) => setUnidades(e.target.value)} placeholder='unidades disponibles' />
            </div>
        </>
    )
}
export default InventarioCatalogo
