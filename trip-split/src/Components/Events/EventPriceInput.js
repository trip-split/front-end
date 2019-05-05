import React from 'react';
import SelectBenefactor from './SelectBenefactor.js'
import {connect} from 'react-redux'

class EventPriceInput extends React.Component {
  state = {
    priceAdded: false,
    total_price: 0
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      total_price: e.target.value
    })
    // console.log('Event Price Input', this.state)
  }

  priceAddedToggle = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      priceAdded: true
    })
  }

  render() {
    // console.log(this.props)
    return(
      <div>
        {this.state.priceAdded === false ?
          <div>
            <p>{this.props.title}</p>
            <div>
              <label>$</label>
              <input
                type="number" 
                name="total_price"
                value={this.state.total_price}
                placeholder="Price in US dollars..." 
                onChange={this.handleChange} 
              />             
            </div>
            {this.state.total_price > 0 ?
              <button onClick={this.priceAddedToggle}>
                Next
              </button>: <p className='fadedNext'>Next</p> }
          </div>:
          <SelectBenefactor 
            // currentTrip={this.props.currentTrip}
            title={this.props.title}
            total_price={this.state.total_price}
            currentTrip={this.props.currentTrip}
            peopleOnTrip={this.props.peopleOnTrip}
            user={this.props.user}
            />
        }
      </div>
    )
  }
  
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {})(EventPriceInput)  