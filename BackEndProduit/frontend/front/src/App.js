import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Upload from './components/upload/upload';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header ></header>
        <Upload />
      </div>
    );
  }
}

export default App;
