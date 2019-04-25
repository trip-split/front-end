import React, { Component } from 'react'
import styled from 'styled-components'
import {endTrip, getTrips} from '../../actions/index'
import {connect} from 'react-redux'

    const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    margin-top: 3rem;
    `

    const MainContainer = styled.div`
    display: flex
    border-radius: .25rem .25rem 0 0;
    `;

    const CardImgContainer = styled.div`
    width: 45%;
    `;

    const CardContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 3rem;
    line-height: 2rem;
    `;

    const StyledButton = styled.button`
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #DEAA56;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 2rem;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    border-radius: 0 0 .5rem .5rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    `

    const StyledCardText = styled.p`
    color: gray;
    `

    const MoneySpent = styled.p`
    color: #A0B775
    `

    const StyledImg = styled.img`
    width: 12rem;
    display: block;
    height: 100%;
    border-radius: .5rem 0 0 0
    `

    

 class CurrentTripCard extends Component {

  endTrip = e => {
    e.preventDefault();
    console.log(this.props)
    // send user id and id to action so we can find the user in the get and then change the isCurrent var to 0. 
    this.props.endTrip(this.props.currentTrip.id)
    .then(() => this.props.getTrips(localStorage.getItem('userId')))
  }

  render() {
    return (
      <div>
        <StyledCard>
            <MainContainer>
                <CardImgContainer>
                    <StyledImg src={this.props.currentTrip.image} />
                </CardImgContainer>
                <CardContentContainer>
                    <h2>{this.props.currentTrip.location}</h2>
                    <StyledCardText> Trip Start Date: {this.props.currentTrip.date}</StyledCardText>
                    <StyledCardText> X people</StyledCardText>
                    <MoneySpent>$ spent</MoneySpent>
                </CardContentContainer>
            </MainContainer>
            <StyledButton onClick={this.endTrip}>X END TRIP</StyledButton>
        </StyledCard>
      </div>
    )
  }
}

export default connect(null, {endTrip, getTrips})(CurrentTripCard);