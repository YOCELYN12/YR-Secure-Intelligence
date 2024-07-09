import React, { useState } from 'react'
import { Put } from '../Fetch/Fetch'
import Productos from './Productos'
import InventarioCatalogo from './InventarioCatalogo'

const FormularioEditar = () => {

    const [producto, setProducto] = useState()
    const [precio, setPrecio] = useState()
    const [marca, setMarca] = useState()
    const [descripcion, setDescripcion] = useState()
    const [unidades, setUnidades] = useState()


    const validarPut = async () => {

       
}

export default FormularioEditar
