import React from 'react';
import AddEventForm from './AddEventForm.js';
import {connect} from 'react-redux';
import {getTrips} from '../../actions/index'
import axios from 'axios';
import styled from 'styled-components'

const StyledButton = styled.div`
position: fixed; 
bottom: 8rem; 
right: 3rem; 
border-radius: 50%; 
background-color: #C53360; 
font-size: 24px; 
color: white; 
padding: 15px; 
`



class ViewAllEvents extends React.Component {
  state = {
    addingEvent: false
  }
  componentDidMount() {

    this.props.getTrips(localStorage.getItem('userId'));

    if (!this.props.currentTrip[0]) {
      this.props.history.push(`/homepage`)
    } else {
      console.log(this.props.currentTrip);
      let tripId = this.props.currentTrip[0].id;
      console.log(tripId);
        axios
          .get(`http://localhost:5000/api/usertrips/participants/${tripId}`, 
            { headers: {
                 Authorization: localStorage.getItem('jwt')
              }})
          .then(res => {
              this.setState({
                currentTrip: this.props.currentTrip,
                peopleOnTrip: res.data.trip
              })})
          .catch(err => console.log(err));
          } 
    
  }
  addingEvent = e => {
    e.preventDefault()
    this.setState({
      addingEvent: true
    })
  }

  render() {
    return(
      <>
        <div>
        <h2>ViewAllEvents</h2>
        <button onClick={this.addingEvent}>Add Event</button>
        {this.state.addingEvent === false ? null: 
        <AddEventForm  
          peopleOnTrip={this.state.peopleOnTrip}
          currentTrip={this.state.currentTrip}
        /> }
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentTrip: state.currentTrip
  }
}

export default connect(mapStateToProps, {getTrips})(ViewAllEvents)