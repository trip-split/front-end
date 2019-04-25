import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
    Navbar,
    } from 'reactstrap';
import styled from 'styled-components'

 class CurrentTripGroup extends Component {
  render() {
    return (
      <div>
        <h1>People On Trip</h1>
        
        
        <div></div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentTrip: state.currentTrip
  }
}

export default connect(mapStateToProps, {})(CurrentTripGroup)