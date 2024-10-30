import React, { Component } from 'react';
import ButtonClick from './ButtonClick'; // Asegúrate de que la ruta sea correcta
import FormularioUsuario from './FormularioUsuario';
import Formulario from './Formulario';
import Resultado from './Resultado';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: '',
    };
  }

  handleNumeroChange = (nuevoNumero) => {
    this.setState({ numero: nuevoNumero });
  };

  render() {
    return (
      <div>
        <h1>Ejercicios de React</h1>
        <ButtonClick /> 
        <FormularioUsuario />
        <Formulario onNumeroChange={this.handleNumeroChange} />
        <Resultado numero={this.state.numero} />
      </div>
    );
  }
}

export default App;

