import React from 'react';
import ParticipantAvatar from './ParticipantAvatar.js';

class SelectCompanions extends React.Component {
  state = {
    companionsAdded: false
  }
  render(){
    console.log(this.props)
    return(
      <h2>Select Companions</h2>
    )
  }
}

export default SelectCompanions