import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addNewPerson, getTrips} from '../../actions/index'
import styled from 'styled-components'
import axios from 'axios'
import Footer from '../Footer/Footer'



const StyledForm = styled.div`
margin: 10% auto
`

const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid gray;
    font-size: 2.4rem
`

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

 class EditPeopleInTrip extends Component {
  state = {
    peopleOnTrip: [],
    currentTrip: {},
    personInfo: {
      name: '',
      thumbnail: ''
    }
  }


  componentDidMount() {
    
    this.props.getTrips(localStorage.getItem('userId'));
    console.log("Current Trips array", this.props.currentTrip)
  }

  handleChange = e => {
    this.setState({
        personInfo: {
            ...this.state.personInfo,
           [e.target.name]: e.target.value
        }
    })
}


  editPerson = e => {
    let personId = this.props.currentParticipant.id
    
    axios
    .put(`http://localhost:5000/api/usertrips/edit-participant/${personId}`, 
    {
      name: this.state.personInfo.name, thumbnail: this.state.personInfo.thumbnail 
    },
    { headers: {
         Authorization: localStorage.getItem('jwt')
      }})
    .then(res => {
      this.setState({
        personInfo: res.data.edits
      })
    }).catch(err => console.log(err));

    this.props.history.push(`/tripgroup/${this.props.currentParticipant.trips_id}`)
  }

  render() {
    console.log("Edit people in trips current participant", this.props.currentParticipant)
    return (
      <>
        <div> 
          <h1>Edit People in the Trip</h1>
          <StyledForm>
              <StyledInput
              type="text" 
              name="name"
              value={this.state.personInfo.name}
              placeholder="Name..." 
              onChange={this.handleChange} />
              <div/>
              <StyledInput
              type="text"
              name="thumbnail"
              value={this.state.personInfo.thumbnail}
              onChange={this.handleChange} 
              placeholder="Image thumbnail..."/>
              <div />
              <button onClick={this.editPerson}>Submit Edit</button>
          </StyledForm>
        </div>
        <StyledButton><i className="fas fa-calendar-plus"></i></StyledButton>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = state => {
  return{
    currentTrip: state.currentTrip,
    peopleOnTrip: state.peopleOnTrip,
    currentParticipant: state.currentParticipant
  }
}


export default connect(mapStateToProps, {addNewPerson, getTrips})(EditPeopleInTrip)

