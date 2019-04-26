import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledFooter = styled.div`
display: flex;
justify-content: space-evenly;
background: #C53360
bottom: 0;
width: 100%;
height: 5rem
padding-top: .5rem
position: fixed;
  bottom: 0;
  width: 100%;
`

 class Footer extends Component {

 

  render() {
    return (
      <StyledFooter>
        <i className="fas fa-car-side fa-2x"></i>
        <Link style={{color:'black'}} to='/tripgroup'>
            <i className="fas fa-users fa-2x"></i>
        </Link>
        <Link style={{color:'black'}} to='/tripevents'>
           <i className="fas fa-money-bill-wave fa-2x"></i>
        </Link>
      </StyledFooter>
    )
  }
}

export default Footer;