import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addNewPerson} from '../../actions/index'
import styled from 'styled-components'
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
font-size: 2.4rem; 
color: white; 
padding: 1.5rem; 
margin-bottom: 2rem
`

 class AddPeopleToTripForm extends Component {

  state = {
    newPerson: {
      name: '',
      thumbnail: ''
      },
      currentTrip: []
  }
  componentDidMount() {

    this.setState({
      ...this.state,
      currentTrip: {
        ...this.props.currentTrip
      }
    })
  }


  handleChange = e => {
    this.setState({
        newPerson: {
            ...this.state.newPerson,
            [e.target.name]: e.target.value
        }
    })
  }

  addNewPerson = e => {
    let trips_id = this.state.currentTrip[0].id
    this.props.addNewPerson({
      ...this.state.newPerson,
      trips_id
    });
    this.props.history.push(`/tripgroup/${trips_id}`)
  }

  render() {
    // console.log("People Trip Form currentTrip:", this.props.currentTrip[0])
    // console.log("State current trip:", this.state.currentTrip)
    return (
      <>
        <div>
          <h1>Add People to Trip Form</h1>
          <StyledForm>
              <StyledInput
              type="text" 
              name="name"
              value={this.state.newPerson.name}
              placeholder="Name..." 
              onChange={this.handleChange} />
              <div/>
              <StyledInput
              type="text"
              name="thumbnail"
              value={this.state.newPerson.thumbnail}
              onChange={this.handleChange} 
              placeholder="Image thumbnail..."/>
              <div />
              <button style={{marginTop:'2rem'}} onClick={this.addNewPerson}>Submit New Person...</button>
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
    currentTrip: state.currentTrip
  }
}


export default connect(mapStateToProps, {addNewPerson})(AddPeopleToTripForm)