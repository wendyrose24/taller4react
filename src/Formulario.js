import React, { Component } from 'react';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: '',
    };
  }

  handleChange = (event) => {
    this.setState({ numero: event.target.value });
    this.props.onNumeroChange(event.target.value); // Levantar el estado
  };

  render() {
    return (
      <input
        type="number"
        placeholder="Ingresa un número"
        value={this.state.numero}
        onChange={this.handleChange}
      />
    );
  }
}

export default Formulario;
