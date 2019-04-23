import React, { Component } from 'react'
import styled from 'styled-components'
import {
    Navbar,
    } from 'reactstrap';

import CurrentTripCard from '../CurrentTripCard/CurrentTripCard';
import PastTripCard from '../PastTripCard/PastTripCard'
import Footer from '../Footer/Footer'

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
        currentTrips: [
            {
                title: 'Italy 2018',
                daysSinceTripStart: 5,
                peopleOnTrip: 7,
                totalSpent: 1038
            }
        ],
        pastTrips: [
            {
                title: 'Bryce Canyon',
                tripStart: 'June 5',
                tripEnd: 'June 10, 2018'
            }
        ]
    }
  render() {
    return (
        <div>
            <StyledNavbar color="light">
                <h1>Trips</h1>
            </StyledNavbar>
            
            {this.state.currentTrips.map(currentTrip => {
                return <CurrentTripCard currentTrip={currentTrip} />
            })}

            {/* <CurrentTripCard /> */}

           
            
            <PastTrips>Past Trips</PastTrips>
            
            {this.state.pastTrips.map(pastTrip => {
                return <PastTripCard pastTrip={pastTrip} />
            })}
            {/* <PastTripCard /> */}
            <Footer />
        </div>
    )
  }
}

export default Homepage