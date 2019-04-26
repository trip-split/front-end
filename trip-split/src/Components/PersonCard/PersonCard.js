import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import axios from 'axios'; 
import {connect} from 'react-redux'
import {sendCurrentParticipantInfo} from '../../actions/index'

// Array of people 

const PersonCardContainer = styled.div`
      display: flex
      
      width: 90%
      margin: 0 auto
      margin-bottom: 3rem
      justify-content: space-between
    `

    const NameAndPhoto = styled.div`
      display: flex;
      width: 55%
      justify-content: flex-start
    `
    const Name = styled.p`
        align-self: center;
        margin-left: 1.5rem;
    `

    const ProfilePhoto = styled.img`
    width: 10%;
    height: auto;
    `

    const StyledImg = styled.img`
    width: 8rem;
    height: 100%;
    border-radius: 5rem
    `

    const EditAndDelete = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between
    `



 export class PersonCard extends Component {

    deletePerson = e => {
        console.log("Delete person fired")
        let participantId = this.props.participant.id;
        axios.delete(`http://localhost:5000/api/usertrips/delete-participant/${participantId}`, 
        { headers: {
            Authorization: localStorage.getItem('jwt')
        }})
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        })
        this.props.deletePerson(e, this.props.participant.id)
    }

    sendCurrentParticipantInfo = e => {
        console.log("This current participant props: ", this.props)
        this.props.sendCurrentParticipantInfo(this.props);
        console.log("Current participant in store: ", this.props.currentParticipant)
    }

  render() {
     
    return (
        
      <PersonCardContainer>
        <NameAndPhoto>
            <StyledImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-cCY80KrYwh5cK3TypEgKLh99L9GrjnLJp_-Mc1BXnaKWCEs" />
            <Name>{this.props.participant.name}</Name>
        </NameAndPhoto>

        <EditAndDelete>

            <Link to="/edit-people-in-trip">
                <i onClick={this.sendCurrentParticipantInfo} className="fas fa-pen fa-2x" ></i >
            </Link>

            <i onClick={this.deletePerson} className="fa fa-window-close fa-2x" aria-hidden="true"></i>
            
        </EditAndDelete>
      </PersonCardContainer>
    )
  }
}

const mapStateToProps = state => {
    return {
    currentParticipant: state.currentParticipant,
    currentTrip: state.currentTrip
    }
}

export default connect(mapStateToProps, {sendCurrentParticipantInfo})(PersonCard)
