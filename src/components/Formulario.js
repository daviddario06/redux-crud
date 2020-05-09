import React, { Component } from 'react';
import {connect} from 'react-redux'
import {agregarProducto, mostrarProducto, editarProducto} from '../actions/productosActions'

class Formulario extends Component{

    state = {
        precio:'',
        nombre:'',
        error:false,
        isNew:false
    }


    componentDidMount(){
        this.isNewProduct()
    }

    componentDidUpdate(prevProps){
        if(prevProps.producto !==this.props.producto){
            this.setState({
                nombre:this.props.producto.nombre,
                precio: this.props.producto.precio 
            })
        }
    }

    isNewProduct= () =>{
        const result = this.props.match.path.replace("/productos/","") === "nuevo"
        this.setState({isNew:result})
        if(!result){
            const {id} = this.props.match.params;
            this.props.mostrarProducto(id)
        }        
    }

    handleChange = ({target}) =>{
        const {value, id} = target
        this.setState({
            [id]:value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        
        const {nombre, precio} = this.state
        
        if (!nombre || !precio){
            this.setState({error:true})
            return null;
        }
        if(this.state.isNew){
            this.setState({error:false})
            this.props.agregarProducto({nombre,precio})
            this.props.history.push('/')}
        else{
            const {id} = this.props.producto
            this.setState({error:false})
            this.props.editarProducto({id,nombre,precio})
            this.props.history.push('/')}
        }
    


    render(){
        const {error} = this.state
        return (
            <div className="row justify-content-center mt-5">
      <div className="col-md-8">
          <div className="card">
              <div className="card-body">
                  <h2 className="text-center">Agregar Nuevo Producto</h2>
                  <form onSubmit = {this.handleSubmit}>
                      <div className="form-group">
                          <label>Titulo</label>
                          <input onChange = {this.handleChange} id = "nombre" type="text" className="form-control" placeholder="Titulo" defaultValue = {this.state.nombre}/>
                      </div>
                      <div className="form-group">
                          <label>Precio del Producto</label>
                          <input onChange = {this.handleChange} id = "precio" type="text" className="form-control" placeholder="Precio" defaultValue = {this.state.precio}/>
                      </div>
                      <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                  </form>
                    {error && (<div className = "font-weight-bold alert alert-danger text-center mt-4"> 
                        Todos los campos son obligatorios
                     </div>)}
              </div>
          </div>
      </div>
  </div>
        );
    }
};

function mapStateToProps(state) {
    return {producto: state.productos.producto}
}

export default connect(mapStateToProps, {agregarProducto, mostrarProducto, editarProducto}) (Formulario); 

