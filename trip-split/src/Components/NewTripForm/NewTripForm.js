import React, { Component } from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {getTrips, addTrip} from '../../actions/index'

const StyledForm = styled.div`
margin: 10% auto
`

const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid gray;
    font-size: 2.4rem
`

class NewTripForm extends Component {

  state = {
      tripInfo: {
          date: '',
          location: '',
          image: '',
          isCurrent: true
      }
  }

  handleChange = e => {
    this.setState({
        tripInfo: {
            ...this.state.tripInfo,
            [e.target.name]: e.target.value
        }
    })
  }

  addNewTrip = e => {
    console.log("AddNewTrip Fired")
    e.preventDefault()
    this.props.addTrip(this.state.tripInfo, localStorage.getItem('userId'))
    .then(() => this.props.getTrips(localStorage.getItem('userId')))
    .then(() => this.props.history.push('/tripgroup'))
    ;
  }

  render() {
    
    return (
      <div>
        <StyledForm>
            <StyledInput
            type="text" 
            name="location"
            value={this.state.tripInfo.location}
            placeholder="Location..." 
            onChange={this.handleChange} />
            <br/>
            <StyledInput
            type="date"
            name="date"
            value={this.state.tripInfo.date}
            
            onChange={this.handleChange} />
            <br/>
            <StyledInput 
            type="text" 
            name="image"
            value={this.state.tripInfo.image}
            placeholder="Image of location..."
            onChange={this.handleChange} />
            <br/>
            <button onClick={this.addNewTrip}>Submit New Trip...</button>
        </StyledForm>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    userTrips: state.userTrips,
    isAddingTrip: state.isAddingTrip
  }
}

export default connect(mapStateToProps, {addTrip, getTrips})(NewTripForm);
