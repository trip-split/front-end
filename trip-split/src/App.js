import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage'
import Login from '../src/Login/Login'
import PrivateRoute from './Components/PrivateRoute'
import styled from 'styled-components'

const StyledLink = styled(Link)`
font-size: 2rem
`

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <StyledLink to="/login">Login</StyledLink>
          <div />
          <StyledLink to="/homepage">Homepage</StyledLink>
          <Route path = "/login" component={Login} />
          <PrivateRoute exact path = "/homepage" component={Homepage} />
        </div>
      </Router>
    );
  }
}

export default App;
