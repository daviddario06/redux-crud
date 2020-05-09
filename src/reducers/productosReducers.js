import {MOSTRAR_PRODUCTOS, ELIMINARR_PRODUCTOS, AGREGAR_PRODUCTOS, MOSTRAR_PRODUCTO, EDITAR_PRODUCTOS} from '../actions/types'


const initialState = {
    productos:[]
}

export default function (state = initialState, action){
    switch(action.type){
        case MOSTRAR_PRODUCTOS: return {...state, productos: action.payload}
        case ELIMINARR_PRODUCTOS: return{...state, productos: state.productos.filter( prod => prod.id !==action.payload) }
        case AGREGAR_PRODUCTOS: return{...state, productos:[...state.productos, action.payload]}
        case MOSTRAR_PRODUCTO: return {...state, producto:action.payload }
        case EDITAR_PRODUCTOS: return {...state, producto: state.productos.map(prod => prod.id === action.payload.id? (prod = action.payload): prod )}
        default: return {state}
    }
}

