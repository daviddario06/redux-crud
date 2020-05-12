import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {borrarPost} from '../actions/productosActions'


 class Producto extends Component {

//pepito
    eliminarProducto = () =>{
        this.props.borrarPost(this.props.info.id)
    }
//hola mundo
    render() {
        const {id, nombre, precio} = this.props.info

        return (
            <li className="list-group-item">
                <div className = "row justify-content-between align-items-center">
                    <div className  = "col-md-8 d-flex justify-content-between align-items-center">
                        
                        <p onChange = {this.props.onChange} className = "text-dark m-0 ">{nombre}</p>
                        <span onChange = {this.props.onChange} className = "badge badge-warning text-dark">$ {precio}</span>
                    
                    </div>
                    <div className = "col-md-4 d-flex justify-content-end acciones">

                        <Link to = {`/productos/editar/${id}`} className = "btn btn-primary mr-2">Editar</Link>
                        <button onClick = {this.eliminarProducto} type = "button" className ="btn btn-danger">Borrar</button>
                    </div>
                </div>
            </li>
        );
    }
}

export default connect(null, {borrarPost}) (Producto); 
