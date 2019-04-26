import React, { Component } from 'react'
import styled from 'styled-components'
import {
    Navbar,
    NavItem,
    NavbarBrand,
    NavLink
    } from 'reactstrap';

import CurrentTripCard from '../CurrentTripCard/CurrentTripCard';
import PastTripCard from '../PastTripCard/PastTripCard'
import Footer from '../Footer/Footer'
import {getTrips} from '../../actions/index'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// const StyledNavbar = styled(Navbar)`

// `

const PageContainer = styled.div`
    position: relative;
    min-height: 100vh;
    margin-bottom: 17.5rem;
`
const StyledButton = styled.div`
position: fixed; 
bottom: 8rem; 
right: 3rem; 
border-radius: 50%; 
background-color: #C53360; 
font-size: 2.4rem; 
color: white; 
padding: 1.5rem; 
`

const ContentWrap = styled.div`
    padding-bottom: 2.5rem
`

const PastTrips = styled.div`
background: lightgray;
color: gray;
margin-top: 2rem;
margin-bottom: 2rem;
font-size: 2rem;
`

// const CurrentTripContainer = styled.div`
// `


class Homepage extends Component {

    state = {
        loading: true
    }

    componentDidMount(){
        console.log('CDM ran');
        this.props.getTrips(localStorage.getItem('userId'));
        this.setState({
            loading: false
        })
    }

    Logout = e => {
        localStorage.clear();
    }
    
    render() {
        if(this.props.isFetching){
          return <div> Is Loading... </div>
        } else {
      console.log("Homepage current trip:", this.props.currentTrip)
    

    // Logout Button, Add New Trip

    return (

        <>
        <PageContainer>
            <ContentWrap>
                <Navbar style={{backgroundColor: '#C53360'}}  className="shadow-lg">
                    <NavbarBrand style={{fontSize: '2.8rem'}}>
                    Trips
                    </NavbarBrand>
                    
                    <Link to="/login" style={{textDecoration:'none', color: 'black'}}>
                        <NavLink onClick={this.Logout} style={{fontSize: '2.8rem'}}>
                            Logout
                        </NavLink>
                    </Link>
                   
                </Navbar> 


                {this.props.currentTrip.length > 0 ? <CurrentTripCard currentTrip={this.props.currentTrip[0]} />:null}

                <PastTrips>Past Trips</PastTrips>
                
                {this.props.pastTrips.map((pastTrip, i) => {
                    return <PastTripCard pastTrip={pastTrip} key={i}/>
                })}
            </ContentWrap>
        </PageContainer>
        <StyledButton><i className="fas fa-calendar-plus"></i></StyledButton>
        <Footer />
        </>
        
    )
        }
  }
}

const mapStateToProps = state => {
    return{
        userTrips: state.userTrips,
        pastTrips: state.pastTrips,
        currentTrip: state.currentTrip,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, {getTrips})(Homepage)