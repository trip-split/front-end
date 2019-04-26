import React, { Component } from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {getTrips, addTrip} from '../../actions/index'
import Footer from '../Footer/Footer'

const StyledForm = styled.div`
margin: 10% auto  
`

const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid gray;
    font-size: 2.4rem
` 

// const StyledButton = styled.div`
//   position: absolute; 
//   bottom: 30px; 
//   right: 30px; 
//   border-radius: 50%; 
//   background-color: #C53360;
//   font-size: 24px; 
//   color: white; 
//   padding: 15px; 
// `

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

class NewTripForm extends Component {

  state = {
      tripInfo: {
          date: '',
          location: '',
          image: '',
          isCurrent: true
      }
  }

  componentDidMount() {
    this.props.getTrips(localStorage.getItem('userId'));
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
    .then(() => this.props.history.push('/homepage'))
    ;
  }

  render() {
    
    return (
      <>
      <div>
        <StyledForm> 
{/* 
            <StyledButton><i class="fas fa-user-plus"></i></StyledButton> */}
            
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
            <button style={{marginTop:'2rem'}} onClick={this.addNewTrip}>Submit New Trip...</button>
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
    userTrips: state.userTrips,
    isAddingTrip: state.isAddingTrip
  }
}

export default connect(mapStateToProps, {addTrip, getTrips})(NewTripForm);
