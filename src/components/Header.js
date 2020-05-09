import React from 'react';
import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <nav className = "navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex">
            <h2>
               <Link to = {'/'} className = "text-light"> CRUD - React, Redux REST API & axios</Link>
            </h2>
            <Link to = {'/productos/nuevo'} className = "btn btn-danger nuevo-post btn-sm"> Agregar Producto&#43;</Link>
        </nav>
    );
};

export default Header;