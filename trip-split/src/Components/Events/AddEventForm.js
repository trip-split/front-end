import React, { Component } from 'react'
import {connect} from 'react-redux'
// import {addNewEvent} from '../../actions/index'
import EventTitleInput from './EventTitleInput.js'


 class AddEventForm extends Component {

  state = {
      title: '',
      total_price: 0,
      participants: '',
      userOnTrip: false,
      userPaidBool: false,
      paticipantPaid: '',
      titleAdded: false,
      priceAdded: false,
      paidAdded: false,
      currentTrip: {},
      user: {}
  }
  componentDidMount() {
    this.setState({
      ...this.state,
      currentTrip: {
        ...this.props.currentTrip
      },
      user: {
        ...this.props.user
      },
      peopleOnTrip:[
        ...this.props.peopleOnTrip
      ]
    })
  }
  titleAddedToggle = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      titleAdded: true
    })
  }

  priceAddedToggle = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      priceAdded: true
    })
  }

  paidAddedToggle = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      paidAdded: true
    })
  }

  userPaid = e => {
    console.log("userPaid fired")
    e.preventDefault();
    console.log(this.state.userPaidBool)
    this.setState({
      ...this.state,
       userPaidBool: true
      })
    console.log(this.state.userPaidBool)
  }

  participantPaid = (id) => {
    this.setState({
      ...this.state,
     paticipantPaid: id
      
    })
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  // addNewTrip = e => {
  //   let trips_id = this.state.currentTrip[0].id
  //   this.props.addNewPerson({
  //     ...this.state.newPerson,
  //     trips_id
  //   });
  //   this.props.history.push(`/tripgroup/${trips_id}`)
  // }

  render() {
    return (
      <div>
        <h1>Add Event</h1>
        <EventTitleInput 
          handleChange={this.handleChange}
          // newEvent={this.state.newEvent}
          titleAdded={this.state.titleAdded}
          priceAdded={this.state.priceAdded}
          paidAdded={this.state.paidAdded}
          titleAddedToggle={this.titleAddedToggle}
          priceAddedToggle={this.priceAddedToggle}
          paidAddedToggle={this.paidAddedToggle}
          user={this.state.user}
          total_price={this.state.total_price}
          peopleOnTrip={this.state.peopleOnTrip}
          userPaid={this.userPaid}
          participantPaid={this.participantPaid}
          title={this.state.title}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    user: state.user
  }
}


export default connect(mapStateToProps, {})(AddEventForm)