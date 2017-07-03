import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';
import ContactForm from './components/ContactForm'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      searchText:'Busqueda',
      nombre: '',
      apellido: '',
      telefono: '',
    };
  }
  handleSearchTextChange = (event) =>{
    this.setState({
      searchText: event.target.value
    });
  }
  handleNameChange = (event) =>{
    this.setState({
      nombre: event.target.value
    });
  }
  handleLastNameChange = (event) =>{
    this.setState({
      apellido: event.target.value
    });
  }
  handlePhoneChange = (event) =>{
    this.setState({
      telefono: event.target.value
    });
  }
  render() {
    return (
      <div>
        <Header title="Address Book"/>
        <div className="container">
          <div className="row">
              <div className="col-md-6">
                <SearchBox 
                value={this.state.searchText}
                onChange={this.handleSearchTextChange}/>
              </div>
              <div className="col-md-6">
                <h1>Nuevo contacto</h1>
                <ContactForm 
                nombre={this.state.nombre}
                apellido={this.state.apellido}
                telefono={this.state.telefono}
                handleNameChange={this.handleNameChange}
                handleLastNameChange={this.handleLastNameChange}
                handlePhoneChange={this.handlePhoneChange}
                />
              </div>
          </div>
        </div>
        Hola Mundo
        <Footer title="Copyright 2017 - PUCE"/>
      </div>
    );
  }
}

export default App;
