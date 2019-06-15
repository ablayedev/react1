import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Component1 from './components/kebe'

class App extends Component {
  state ={
    carac:[
      {
        'nom':'kebe',
        'prenom':'mouhamed'
      },
      {
        'nom':'abdoulaye',
        'prenom':'diaw'
      }
    ]
  }
  render() { 
    console.log(this.state)
    return ( 
      <div className="App" style={{display:'none'}}>
        <p>VOici la liste des utilistaurs</p>
        <Component1  moi={this.state}/>
       </div>
     );
  }
}
 
export default App;

