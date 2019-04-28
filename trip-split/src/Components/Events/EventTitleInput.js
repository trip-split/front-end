import React from 'react';
import EventPriceInput from './EventPriceInput.js'

class EventTitleInput extends React.Component {
  state = {
    title: '',
    titleAdded: false
  }

  titleAddedToggle = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      titleAdded: true
    })
  }
  
  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }
  

  render(){
    return(
      <div>
        {this.state.titleAdded === false ?
          <form>
            <input
              type="text" 
              name="title"
              value={this.state.title}
              placeholder="Event..." 
              onChange={this.handleChange} 
            />
            {this.state.title.length > 0 ?
              <button onClick={this.titleAddedToggle}>
                Next
              </button>: <p className='fadedNext'>Next</p> }
          </form>: 
              <EventPriceInput 
                title={this.state.title} 
                peopleOnTrip={this.props.peopleOnTrip}
                currentTrip={this.props.currentTrip}
              />
        }
      </div>
    )
  }
  
}

export default EventTitleInput