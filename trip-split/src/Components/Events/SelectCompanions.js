import React from 'react';
import ParticipantAvatar from './ParticipantAvatar.js';
import {addNewEvent} from '../../actions'
import {connect} from 'react-redux'
class SelectCompanions extends React.Component {
  state = {
    companionsAdded: false
  }

  componentDidMount(){
    let companions = this.props.participants.map(participant => {
      return participant = false
    })
    this.setState({
      companions: companions
    })
  }

  whoParticipated = (index) => {
    let temp = this.state.companions;
    temp[index] = !temp[index];
    let companionsAdded = false;
    for(let i = 0; i < temp.length; i++) {
      if (temp[i] === true) {
        companionsAdded = true;
        break;
      }
    }
    this.setState({
      companions: temp,
      companionsAdded: companionsAdded
    })
  } 
  
  addEvent = e => {
    e.preventDefault()
    console.log('event add fired')
    let participantString = '';
    let userParticipated = false;
    let pals = this.state.companions
    for(let i = 0; i < pals.length; i++) {
      if(pals[i] === true){
        if(i === 0) {
          userParticipated = true
        } else {
          if (participantString.length > 0) {
            participantString += ', ' + this.props.participants[i].id
          } else {
            participantString += this.props.participants[i].id
          }
          
        } 
      }
    }
    let event = {
      trips_id: this.props.currentTrip[0].id,
      title: this.props.title,
      total_price: Number(this.props.total_price),
      participants: participantString,
      userOnTrip: userParticipated,
      userPaid: this.props.userPaidBool,
      participantPaid: this.props.whoPaid
    }
    console.log(event);
    this.props.addNewEvent(event)
    .then(()=> this.props.history.push("/tripevents"))
  }

  render(){
    console.log(this.props)
    return(
      <div>
            
            {this.props.participants.map((participant, i)=> {
            return (
              <ParticipantAvatar 
                clickHandler={this.whoParticipated}
                participant={participant}
                index={i}
                key={i}
              />
            ) 
          }
        )}
        {this.state.companionsAdded === false ?
            <p className='fadedNext'>Next</p> : 
            <button onClick={(e) => this.addEvent(e)}>
              Next
            </button>
          }
        </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    isAddingEvent: state.isAddingEvent
  }
}

export default connect(mapStateToProps, {addNewEvent})(SelectCompanions);