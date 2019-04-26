import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage'
import Login from './Components/Login/Login'
import PrivateRoute from './Components/PrivateRoute'
import Register from './Components/Register/Register'
import NewTripForm from './Components/NewTripForm/NewTripForm'
import styled from 'styled-components'
import CurrentTripGroup from './Components/CurrentTripGroup/CurrentTripGroup';
import AddPeopleToTripForm from './Components/AddPeopleToTripForm/AddPeopleToTripForm'
import ViewAllEvents from './Components/Events/ViewAllEvents.js'
import EditPeopleInTrip from './Components/AddPeopleToTripForm/EditPeopleInTrip'
import {connect} from 'react-redux'


const StyledLink = styled(Link)`
font-size: 2rem;
text-decoration: none;
color: black;

`

const StyledContainer = styled.div`
font-size: 2rem;

`




class App extends Component {
  render() {
    return (
      <Router>
        <StyledContainer className="App">

          <StyledLink to="/login">Login</StyledLink>
          <div />
          <StyledLink to="/register">Register</StyledLink>
          <div />
          <StyledLink to="/homepage">Homepage</StyledLink>
          <div />
          <StyledLink to="/add-people-to-trip">Add People To Trip</StyledLink>
          <div />
          {/* {this.props.currentTrip ? (this.props.currentTrip.length === 0 ? <StyledLink to="/newtripform">Add New Trip</StyledLink>: null): null} */}
          <StyledLink to="/newtripform">Add New Trip</StyledLink>
          <Route path = "/newtripform" component={NewTripForm}></Route>
          <Route path = "/login" component={Login} />
          <Route path = "/register" component={Register} />
          <Route path = "/add-people-to-trip" component ={AddPeopleToTripForm} />
          <Route path = "/tripgroup" component ={CurrentTripGroup} />
          <Route path = "/tripevents" component ={ViewAllEvents} />
          <Route path = "/edit-people-in-trip" component = {EditPeopleInTrip}/>
          <PrivateRoute exact path = "/homepage" component={Homepage} />
        </StyledContainer>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentTrip: state.currentTrip
  }
}

export default connect(mapStateToProps, {})(App);
