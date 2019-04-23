import React, { Component } from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
display: flex;
justify-content: space-evenly;
background: #C53360
position: absolute;
bottom: 0;
width: 100%;
height: 3rem
`

 class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <i class="fas fa-car-side fa-3x"></i>
        <i class="fas fa-users fa-3x"></i>
        <i class="fas fa-money-bill-wave fa-3x"></i>
      </StyledFooter>
    )
  }
}

export default Footer;