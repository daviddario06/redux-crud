import React, { Component, Fragment } from 'react';
import {Provider} from 'react-redux'
import store from './store'
import Header from './components/Header';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Productos from './components/Productos';
import Formulario from './components/Formulario';

class App extends Component {
  render(){
    return (
      <Provider store = {store}>
        <BrowserRouter>
          <Fragment>
            <Header/>
              <div className = "container">
                <Switch>
                  <Route exact path="/" component = {Productos}/>
                  <Route exact path="/productos/nuevo" component = {Formulario}/> 
                  <Route exact path="/productos/editar/:id" component = {Formulario}/>  
                </Switch>
              </div>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

