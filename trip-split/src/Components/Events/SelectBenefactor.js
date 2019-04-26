import React from 'react';
import ParticipantAvatar from './ParticipantAvatar.js';
import SelectCompanions from './SelectCompanions.js'

class SelectBenefactor extends React.Component {
  state= {
    participants: [],
    whoPaid: null
  }

  componentDidMount() {
    let array = this.props.peopleOnTrip;
    array.unshift(this.props.user)
    console.log(array)
    this.setState({
      participants: array,
      whoPaid: undefined
    })
  }
  
  whoPaid = (index) => {
    this.setState({
      ...this.state,
      whoPaid: index
    })
  } 

  bigSpender = e => {
    e.preventDefault()
    let who = this.state.whoPaid;
    console.log("Who value", who)
    if (who === 0) {
      this.props.userPaid(e)
    } 
    if (who > 0) {
      this.props.participantPaid(this.state.participants[who].id)
    }
    this.props.paidAddedToggle(e) 
  }
  
  render() {
    return(
      <div>
        {this.props.paidAdded === false ?
          <div>
            <h2>SelectBenefactor</h2>
            {this.state.participants.map((participant, i)=> {
            return (<ParticipantAvatar 
                     participant={participant} 
                     index={i}
                     whoPaid={this.whoPaid}/>
            )
          }
        )}
        {this.state.whoPaid === undefined ?
            null : 
            <button onClick={this.bigSpender}>
              Next
            </button>
          }
        </div>: <SelectCompanions />}
        
      </div>
    )
  }
  
}

export default SelectBenefactor