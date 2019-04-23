import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage'
import Login from '../src/Login/Login'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path = "/login" component={Login} />
          <Route path = "/homepage" component={Homepage} />
        </div>
      </Router>
    );
  }
}

export default App;
