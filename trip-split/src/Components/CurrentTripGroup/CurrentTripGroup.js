import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
    Navbar,
    } from 'reactstrap';
import styled from 'styled-components'
import axios from 'axios'
import {viewTripParticipants} from '../../actions/index.js'
import {Link} from 'react-router-dom'


 class CurrentTripGroup extends Component {
  state = {
      peopleOnTrip: [],
      currentTrip: {}
  }
  


  componentDidMount() {
    if (!this.props.currentTrip[0]) {
      this.props.history.push(`/homepage`)
    } else {
      this.setState({
        ...this.state,
        ...this.props.currentTrip
        
      })
      console.log(this.state.currentTrip)
  
          let tripId = this.props.currentTrip[0].id
          console.log(tripId)
          axios
            .get(`http://localhost:5000/api/usertrips/participants/${tripId}`, 
            { headers: {
                 Authorization: localStorage.getItem('jwt')
              }})
            .then(res => {
    
              this.setState({
                peopleOnTrip: res.data.trip
              })
            }).catch(err => console.log(err));
    }
    
  }

  render() {
    return (
      <div>
        <h1>People On Trip</h1>
        {this.state.peopleOnTrip.map(participant => {
                return (
                <>
                  <p>{participant.name}</p>
                  <Link to='/edit-people-in-trip'>
                    <i class="fas fa-pen"/>
                  </Link>
                </>
                )
        })}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentTrip: state.currentTrip,
    peopleOnTrip: state.peopleOnTrip
  }
}

export default connect(mapStateToProps, {viewTripParticipants})(CurrentTripGroup)