import React from 'react';
import EventPriceInput from './EventPriceInput.js'

function EventTitleInput(props) {
  return(
    <div>
      <h2>Event Title</h2>
      {props.titleAdded === false ?
        <form>
          <input
            type="text" 
            name="title"
            value={props.title}
            placeholder="Event..." 
            onChange={props.handleChange} 
          />
          {props.title.length > 0 ?
            <button onClick={props.titleAddedToggle}>Next</button>: null
          }
        </form>: 
            <EventPriceInput 
               handleChange={props.handleChange}
               newEvent={props.newEvent}
               priceAdded={props.priceAdded}
               paidAdded={props.paidAdded}
               priceAddedToggle={props.priceAddedToggle}
               paidAddedToggle={props.paidAddedToggle}
               user={props.user}
               peopleOnTrip={props.peopleOnTrip}
               userPaid={props.userPaid}
               participantPaid={props.participantPaid}
               total_price={props.total_price}
             />
       
      }
      
    </div>
  )
}

export default EventTitleInput