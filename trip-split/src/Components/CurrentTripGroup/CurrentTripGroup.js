import React, { Component } from 'react'
import {connect} from 'react-redux'
// import {
//     Navbar,
//     } from 'reactstrap';
import styled from 'styled-components'
import axios from 'axios'
import {viewTripParticipants, getTrips} from '../../actions/index.js'
// import {Link} from 'react-router-dom'
import PersonCard  from '../../Components/PersonCard/PersonCard'
import Footer from '../Footer/Footer'


const StyledButton = styled.button`
position: fixed; 
bottom: 8rem; 
right: 3rem; 
border-radius: 50%; 
background-color: #C53360; 
font-size: 24px; 
color: white; 
padding: 15px; 
border: none
    `
    

 class CurrentTripGroup extends Component {

  state = {
      peopleOnTrip: [],
      currentTrip: {}
  }
  


  componentDidMount() {

    this.props.getTrips(localStorage.getItem('userId'));

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
            .get(`https://back-end-trip-split-pg.herokuapp.com/api/usertrips/participants/${tripId}`, 
            { headers: {
                 Authorization: localStorage.getItem('jwt')
              }})
            .then(res => {
              let peopleOnTrip = res.data.trip
              console.log(peopleOnTrip)
              peopleOnTrip.unshift(this.props.user)
              this.setState({
                peopleOnTrip: peopleOnTrip
              })
            }).catch(err => console.log(err));
          } 
    
  }

  deletePerson = (e, componentId) => {
    e.preventDefault();
     const updatedPeopleOnTrip = this.state.peopleOnTrip.filter(person => {
      return person.id !== componentId
     })
      this.setState({
        peopleOnTrip: updatedPeopleOnTrip
      })
    }
  

  render() {
    return (
      <div>
        <div style={{marginBottom:'17.5rem'}}>
          
          <h1>People On Trip</h1>
          {this.state.peopleOnTrip.map(participant => {
            return <PersonCard participant={participant} deletePerson = {this.deletePerson} />
          })}
        </ div>
        <StyledButton style={{marginTop:'4rem'}} ><i class="fas fa-user-plus"></i></StyledButton>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentTrip: state.currentTrip,
    peopleOnTrip: state.peopleOnTrip,
    user: state.user
  }
}

export default connect(mapStateToProps, {viewTripParticipants, getTrips})(CurrentTripGroup)