import React, {Component, Fragment } from 'react';
import {connect} from 'react-redux'

import {mostrarProductos} from '../actions/productosActions'
import Producto from './Producto';

class Productos extends Component {


    componentDidMount(){
        this.props.mostrarProductos()
    }

    componentDidUpdate(prevProps){
        if(JSON.stringify(prevProps.productos) === JSON.stringify(this.props.productos)){
            this.props.mostrarProductos()
        }
    }
   render(){
        const {productos} = this.props
 
        return (
            <Fragment>
               <h2 className = "text-ceter my-5"> Listado de Productos </h2>
               <div className = "row justify-content-center">
                    <div className = "col-md-8">
                        <ul>
                            {productos && (productos.map( product => ( 
                                <Producto
                                    key = {product.id}
                                    info = {product}
                                />
                            )))}
                        </ul>
                    </div>
               </div>
            </Fragment>
        );
    }
};

const mapStateToProps = (state) => ({
    productos: state.productos.productos
})

export default connect(mapStateToProps, {mostrarProductos})  (Productos);