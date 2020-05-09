import {MOSTRAR_PRODUCTOS, ELIMINARR_PRODUCTOS, AGREGAR_PRODUCTOS, MOSTRAR_PRODUCTO, EDITAR_PRODUCTOS} from './types'
import axios from 'axios'


export const mostrarProductos = () => async dispatch=> {
    const response = await axios.get(`http://localhost:5000/productos`)
    
        dispatch ({
            type:MOSTRAR_PRODUCTOS,
            payload: response.data
        })
}

export const  borrarPost = (id) => async dispatch =>{

    await axios.delete(`http://localhost:5000/productos/${id}`)

    dispatch ({
        type:ELIMINARR_PRODUCTOS,
        payload: id
    })
}

export const agregarProducto = post => async dispatch =>{

    const respuesta = await  axios.post(`http://localhost:5000/productos`,post)
    dispatch({
        type:AGREGAR_PRODUCTOS,
        payload: respuesta.data
    })
}

export const mostrarProducto = id => async dispatch =>{
    const respuesta = await axios.get(`http://localhost:5000/productos/${id}`)
    console.log(respuesta);
    dispatch({
        type:MOSTRAR_PRODUCTO,
        payload:respuesta.data
    })
}

export const editarProducto = product => async dispatch =>{
    
    const respuesta = await axios.put(`http://localhost:5000/productos/${product.id}`,product)
    console.log(respuesta);
    dispatch({
        type:EDITAR_PRODUCTOS,
        payload:respuesta.data
    })
}