import React from "react"
import styled from 'styled-components'
import { connect } from 'react-redux'
import { register } from '../actions/index'
const StyledPage = styled.div`

`

const StyledForm = styled.div`
margin: 10% auto
`

const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid gray;
    font-size: 2.4rem
`

class Login extends React.Component {

     state = {
        credentials: {
            email:'',
            username: '',
            password:''
                }
     }

     handleChange = e => {
         this.setState({
             credentials: {
                [e.target.name]: e.target.value
             }
         })
     }

     register = e => {
         e.preventDefault();
         this.props.register(this.state.credentials)
     }

     render() {
         return (
             <StyledPage>
                 <h1> Login </h1>
                 <StyledForm>
                    <StyledInput
                    type="text" 
                    name="email"
                    value={this.state.credentials.email}
                    placeholder="Enter email"
                    onChange={this.handleChange} />
                    <br/>
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
                    <button onClick={this.register}>Submit</button>
                </StyledForm>
            </StyledPage>
         )
     }
}

const mapStateToProps = state =>  {
    return {
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {register})(Login)