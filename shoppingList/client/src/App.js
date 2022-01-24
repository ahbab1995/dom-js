import React, { Component } from 'react';
import Appnevbar from "./components/Appnavbar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ShoppingList from './components/ShoppingList'

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Appnevbar/>
        <ShoppingList/>
      </div>
    )
  }
}

export default App;
