import React from 'react'
import EventTitleInput from './EventTitleInput.js'


function AddEventForm(props) {
  return (
    <div>
      <h1>Add Event</h1>
      <EventTitleInput 
        currentTrip={props.currentTrip}
      />
    </div>
  )
}

export default AddEventForm