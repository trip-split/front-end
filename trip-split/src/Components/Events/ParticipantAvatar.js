import React from 'react';

function ParticipantAvatar(props) {
  return(
    <div onClick={() => {props.whoPaid(props.index)}}>
      <img src={props.participant.thumbnail} alt='participant'/>
      <p>{props.participant.name}</p>
    </div>
  )
}

export default ParticipantAvatar