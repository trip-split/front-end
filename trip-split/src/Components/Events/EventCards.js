import React from 'react';
import SmallEventCard from './SmallEventCard'

class EventCards extends React.Component {
  state = {
    events:[]
  }
  componentDidMount(){
    this.setState({
      events: this.props.events
    })
  }
  render(){
    console.log(this.props)
    return(
      <div>
        <p>Event Cards</p>
        {this.state.events.map(event => {
          return (
            <SmallEventCard event={event} />
            )
        })}
      </div>
      
    )
  }
}

export default EventCards