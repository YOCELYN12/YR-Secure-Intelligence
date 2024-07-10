import React from 'react'
import { useState, useEffect } from 'react'
import { Post } from '../Fetch/Fetch'
import Productos from './Productos'
import ListaProductos from './ListaProductos'
import { Delete } from '../Fetch/Fetch'
import { Get } from '../Fetch/Fetch'
import FormularioEditar from './FormularioEditar'



const InventarioCatalogo = () => {

    const [intProducto, setIntProducto] = useState("") 
    const [intPrecio, setIntePrecio] = useState("")
    const [intMarca, setIntMarca] = useState("")
    const [intDescripcion, setIntDescripcion] = useState("")
    const [intUnidades, setIntUnidades] = useState("")
    const [id,setID]=useState()
    const [prod, setProd] = useState([])

    //Evento del boton para poder ingresar los datos a la API 
    const ingresarproducto = async (e) => {
        e.preventDefault()
        let datos = {
            id:id,
            producto: intProducto,
            precio: intPrecio,
            marca: intMarca,
            descripcion: intDescripcion,
            unidades: intUnidades
        }

        await Post(datos, "productos")
    }
    const obtenerID=(id)=>{
        setID(id)
        console.log(id)
        console.log('holaaa');
    }
    useEffect(() => {
        const mostrarProducto = async () => {
            const data = await Get("productos")
            setProd(data)
        }
        mostrarProducto()

    }, [prod])

   
    return (
        <>
            <div>

                <input type="text" value={intProducto} onChange={(e) => setIntProducto(e.target.value)} placeholder='nombre del artirulo'/>
                <input type="text" value={intMarca} onChange={(e) => setIntMarca(e.target.value)} placeholder='marca'/>
                <input type="number" value={intPrecio} onChange={(e) => setIntePrecio(e.target.value)} placeholder='precio'/>
                <input type="texto" value={intDescripcion} onChange={(e) => setIntDescripcion(e.target.value)} placeholder='descripcion del producto'/>
                <input type="number" value={intUnidades} onChange={(e) => setIntUnidades(e.target.value)} placeholder='unidades disponibles'/>

                <button onClick={ingresarproducto}>Ingresar producto</button>               
                <ListaProductos  productosAPI={prod} editarBTN={obtenerID}/>
                {id && <FormularioEditar id={id}/>}
            </div>
        </>
    )
}
export default InventarioCatalogo
