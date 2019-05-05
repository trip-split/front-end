import React from 'react';
import AddEventForm from './AddEventForm.js';
import {connect} from 'react-redux';
import {getTrips} from '../../actions/index'
import axios from 'axios';
import styled from 'styled-components'
import EventCards from './EventCards'

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
    if (!this.props.currentTrip[0]) {
      this.props.history.push(`/homepage`)
    } else {
      console.log(this.props.currentTrip);
      let tripId = this.props.currentTrip[0].id;
      console.log(tripId);
        axios
          .get(`https://back-end-trip-split-pg.herokuapp.com/api/usertrips/events/${tripId}`, 
            { headers: {
                 Authorization: localStorage.getItem('jwt')
              }})
          .then(res => {
             console.log(res)
              this.setState({
                peopleOnTrip: this.props.peopleOnTrip,
                currentTrip: this.props.currentTrip,
                eventsOnTrip: res.data.event
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
    console.log(this.state, this.props)
    return(
      <>
        <div>
        <h2>ViewAllEvents</h2>
        
        <button onClick={this.addingEvent}>Add Event</button>
        {this.state.addingEvent === false ? 
        this.state.eventsOnTrip ?
        <EventCards events={this.state.eventsOnTrip} peopleOnTrip={this.props.peopleOnTrip}/>:
        <p>Loading events...</p>: 
        <AddEventForm  
          currentTrip={this.state.currentTrip}
        /> }
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentTrip: state.currentTrip,
    isAddingEvent: state.isAddingEvent,
    isFetchingEvents: state.isFetchingEvents,
    fetchEventsError: state.fetchEventsError,
    user: state.user
  }
}

export default connect(mapStateToProps, {getTrips})(ViewAllEvents)