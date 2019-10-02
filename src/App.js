import React, { Component } from 'react';
import Componentetitulo from './componentes/componentetitulo';
import Componentelist from './componentes/componentelist';
import './App.css';
//primero importo los componentes, Css, etc.
//
class App extends Component {
  constructor() {
    super();

    this.state = {
      lista: 'Escriba su tarea',
      listas: [],
      titulo: 'TODOS'

    }
    this.onChangelista = this.onChangelista.bind(this);
    this.saveItem = this.saveItem.bind(this);

  }

  onChangelista(e) {
    this.setState({
      lista: e.target.value
    })
  }
  saveItem = (e) => {
    e.preventDefault();
    let items = this.state.listas;
    items.push(this.state.lista);
    this.setState({
      listas: items,
      lista: '',
    })
  }

  render() {
    return (
      <>
        <Componentetitulo titulo={this.state.titulo} />
        <Componentelist lista={this.state.lista} onChangelista={this.onChangelista} saveItem={this.saveItem} todos={this.state.listas}/>
      </>
    );
  }
}

export default App;
