import React, { Component } from 'react';
import './App.css';
import './components/counter'
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component{
 render(){
  return (
    <NavBar/>
    <main className ="container">
<Counters/>
    </main>
  );
 }
}

export default App;
