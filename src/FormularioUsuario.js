import React, { Component } from 'react';

class FormularioUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
    };
  }

  handleChange = (event) => {
    this.setState({ nombre: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nombre ingresado: ${this.state.nombre}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={this.state.nombre}
          onChange={this.handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default FormularioUsuario;
