import React, { Component } from 'react'
import styled from 'styled-components'
import {
    Navbar,
    } from 'reactstrap';

import CurrentTripCard from '../CurrentTripCard/CurrentTripCard';
import PastTripCard from '../PastTripCard/PastTripCard'
import Footer from '../Footer/Footer'
import {getTrips} from '../../actions/index'
import {connect} from 'react-redux'
const StyledNavbar = styled(Navbar)`
`

const PastTrips = styled.div`
background: lightgray;
color: gray;
margin-top: 2rem;
margin-bottom: 2rem;
font-size: 2rem;
`

const CurrentTripContainer = styled.div`
`

class Homepage extends Component {

    state = {
        currentTrips: {

        },

        pastTrips: [
            {
                title: 'Bryce Canyon',
                tripStart: 'June 5',
                tripEnd: 'June 10, 2018'
            }
        ]
    }

    componentDidMount(){
        
        this.props.getTrips(localStorage.getItem('userId'));
    }

  render() {
      console.log("Homepage current trip:", this.props.currentTrip)
    return (
        <div>
            <StyledNavbar color="light">
                <h1>Trips</h1>
            </StyledNavbar>

            {this.props.currentTrip.length > 0 ? <CurrentTripCard currentTrip={this.props.currentTrip[0]} />:null}

            <PastTrips>Past Trips</PastTrips>
            
            {this.props.pastTrips.map(pastTrip => {
                return <PastTripCard pastTrip={pastTrip} />
            })}
        </div>
    )
  }
}

const mapStateToProps = state => {
    return{
        userTrips: state.userTrips,
        pastTrips: state.pastTrips,
        currentTrip: state.currentTrip
    }
}

export default connect(mapStateToProps, {getTrips})(Homepage)