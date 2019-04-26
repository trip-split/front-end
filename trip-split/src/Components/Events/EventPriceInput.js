import React from 'react';
import SelectBenefactor from './SelectBenefactor.js'

function EventPriceInput(props) {
  return(
    <div>
      <h2>Event Price</h2>
      {props.priceAdded === false ?
        <form>
          <p>{props.title}</p>
          <input
            type="number" 
            name="total_price"
            value={props.total_price}
            placeholder="Price in US dollars..." 
            onChange={props.handleChange} 
          />
          {props.total_price > 0 ?
            <button onClick={props.priceAddedToggle}>Next</button>: null
          }
        </form>:
        <SelectBenefactor 
          handleChange={props.handleChange}
          paidAdded={props.paidAdded}
          paidAddedToggle={props.paidAddedToggle}
          user={props.user}
          peopleOnTrip={props.peopleOnTrip}
          userPaid={props.userPaid}
          participantPaid={props.participantPaid}
        />
      }
      
    </div>
  )
}

export default EventPriceInput