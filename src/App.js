import React, { Component } from 'react';

import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

//const API_URL= 'https://address-book-api-kfpkaqtghu.now.sh';
const API_URL= 'http://localhost:8000';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      searchText:'',
      name: '',
      age: '',
      breed: '',
      pets:[],
    };
  }

  componentDidMount(){
    this.getPets();
  }

  getPets = () => {
    axios({
      method: 'GET',
      url: API_URL + '/api/pets',
      /*headers: {
        'Api-Key':'1719069385',
      }*/
    })
    .then((response)=>{
      console.log(response);
      this.setState({
      pets: response.data
    });
      console.log(this.state.pets);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  handleSearchTextChange = (event) =>{
    this.setState({
      searchText: event.target.value
    });
  }
  handleNameChange = (event) =>{
    this.setState({
      name: event.target.value
    });
  }
  handleageChange = (event) =>{
    this.setState({
      age: event.target.value
    });
  }
  handlebreedChange = (event) =>{
    this.setState({
      breed: event.target.value
    });
  }

  saveContact = (pet) =>{
    axios({
      method: 'POST',
      url: API_URL + '/api/pets',
      headers: {
        //'Api-Key':'1719069385',
        'Content-Type': 'application/json',
      },
      data:{
        name: pet.name,
        age: pet.age,
        breed: pet.breed,
      }
    }).then((response) =>{
        console.log(response);
        this.getPets();
    });
  }

  render() {
    const pets = this.state.pets.filter((pet, index)=>{
    //  if(this.state.searchText === pet.name){
    //    return true;
    //  }
     if(pet.name.indexOf(this.state.searchText) > -1){
       return true;
     }
     if(pet.breed.indexOf(this.state.searchText) > -1){
       return true;
     }
     return false;
    });
    return (
      <div>
        <Header title="Address Book"/>
        <div className="container">
          <div className="row">
              <div className="col-md-12">
                 <h1>New pet</h1>
                <ContactForm 
                name={this.state.name}
                age={this.state.age}
                breed={this.state.breed}
                handleNameChange={this.handleNameChange}
                handleageChange={this.handleageChange}
                handlebreedChange={this.handlebreedChange}
                saveContact={this.saveContact}
                />
              </div>
          </div>
          <div className="row">
              <div className="col-md-12">
                <SearchBox 
                value={this.state.searchText}
                onChange={this.handleSearchTextChange}/>
                <ContactList pets={pets}/>
              </div>
          </div>
        </div>
        <Footer title="Copyright 2017 - PUCE"/>
      </div>
    );
  }
}

export default App;
