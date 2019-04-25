import React, { Component } from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
display: flex
width: 90%;
margin: 0 auto;
margin-top: 3rem;
border: 1px solid lightgray;
border-radius: .5rem
`

const ImgContainer = styled.div`
    width: 45%;
    `

const StyledImg = styled.img`
width: 12rem;
display: block;
height: 100%;
`

const MainContainer = styled.div`
display: flex;
flex-direction: column
align-items: flex-start;
width: 100%
margin-left: 2rem;
line-height: 2rem;

`

const Dates = styled.p`
color: gray
`


class PastTripCard extends Component {
  render() {
    return (
      <div>

        <StyledCard>
            <ImgContainer>
                <StyledImg src="https://upload.wikimedia.org/wikipedia/commons/6/64/BryceCanyon-Amphiteatre1.jpg" />
            </ImgContainer>
            <MainContainer>
                <h2>
                    {this.props.pastTrip.location}
                </h2>
                <Dates>{this.props.pastTrip.date}</Dates>
            </MainContainer>
        </StyledCard>
      </div>
    )
  }
}

export default PastTripCard;