import React from 'react';
import ParticipantAvatar from './ParticipantAvatar.js';
import SelectCompanions from './SelectCompanions.js';

class SelectBenefactor extends React.Component {
  state= {
    participants: [],
    whoPaid: null,
    paidAdded: false,
    userPaidBool: false
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
    if(index !== 0) {
      this.setState({
        ...this.state,
        userPaidBool: false,
        whoPaid: index
      })
    } else {
      this.setState({
        ...this.state,
        whoPaid: null,
        userPaidBool: true
      })
    }
  } 

  bigSpender = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      paidAdded: true
    })
  }
  
  render() {
    console.log(this.state)
    return(
      <div>
        {this.state.paidAdded === false ?
          <div>
            
            {this.state.participants.map((participant, i)=> {
            return (<ParticipantAvatar 
                     participant={participant} 
                     index={i}
                     key={i}
                     clickHandler={this.whoPaid}/>
            ) 
          }
        )}
        {this.state.whoPaid === undefined ?
          <p className='fadedNext'>Next</p>  : 
            <button onClick={this.bigSpender}>
              Next
            </button>
          }
        </div>: 
        <SelectCompanions
          participants={this.state.participants}
          whoPaid={this.state.whoPaid}
          userPaidBool={this.state.userPaidBool}
          title={this.props.title}
          total_price={this.props.total_price}
          currentTrip={this.props.currentTrip}
          peopleOnTrip={this.props.peopleOnTrip}
          whoPaid={this.state.whoPaid}
          user={this.props.user}
        />}
        
      </div>
    )
  }
  
}

export default SelectBenefactor