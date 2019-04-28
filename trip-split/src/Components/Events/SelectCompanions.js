import React from 'react';
import ParticipantAvatar from './ParticipantAvatar.js';
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

  addEvent(){
    console.log('event added')
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
              />
            ) 
          }
        )}
        {this.state.companionsAdded === false ?
            null : 
            <button onClick={this.bigSpender}>
              Next
            </button>
          }
        </div>
    )
  }
}

export default SelectCompanions