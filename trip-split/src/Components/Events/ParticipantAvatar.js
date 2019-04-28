import React from 'react';

function ParticipantAvatar(props) {
  return(
    <div onClick={() => {props.clickHandler(props.index)}}>
      <img src={props.participant.thumbnail} alt='participant'/>
      <p>{props.participant.name}</p>
    </div>
  )
}

export default ParticipantAvatar