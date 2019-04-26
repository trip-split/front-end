import React from "react"
import styled from 'styled-components'
import { connect } from 'react-redux'
import { register } from '../../actions/index'
import {Link} from 'react-router-dom'

const StyledPage = styled.div`
background-color: #C53360;
height: 750px;
`

const StyledForm = styled.div`
margin: 10% auto
`

const StyledInput = styled.input`
    border: none;
    
    font-size: 2.4rem;
    margin: .5rem;
    text-align: center;
    background-color: #C53360
    color: white 
    border-bottom: 1px solid white;
    &::-webkit-input-placeholder {

        color: white;

    }
        
`

const StyledButton = styled.button`
    margin: 10px;
    padding: 1px 45px;
    border-radius: 5px;
    background: white;
    font-size: 2rem;
    `



class Register extends React.Component {

     state = {
        credentials: {
            username: '',
            password:'',
            email:''
                }, 
     }

     handleChange = e => {
         this.setState({
             credentials: {
                 ...this.state.credentials,
                [e.target.name]: e.target.value
             }
         })
     }

     register = e => {
         e.preventDefault();
         this.props.register(this.state.credentials)
            .then(() => this.props.history.push('/login'));
     }

    
// Don't need navigation links
     render() {
         return (
             <StyledPage>
                 <h1> Register </h1>
                 <StyledForm>
                    <StyledInput
                    type="text" 
                    name="username"
                    value={this.state.credentials.username}
                    placeholder="Enter username" 
                    onChange={this.handleChange} />
                    <br/>
                    <StyledInput
                    type="text"
                    name="password"
                    value={this.state.credentials.password}
                    placeholder="Enter password" 
                    onChange={this.handleChange} />
                    <br/>
                    <StyledInput 
                    type="text" 
                    name="email"
                    value={this.state.credentials.email}
                    placeholder="Enter email"
                    onChange={this.handleChange} />
                    <br/>
                    <StyledButton onClick={this.register}>Submit</StyledButton>
                    <p>Already a member? <Link to="/login">Log In</Link></p>
                </StyledForm>
            </StyledPage>
         )
     }
}

const mapStateToProps = state =>  {
    return {
        // isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {register})(Register)