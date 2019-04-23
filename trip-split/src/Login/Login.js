import React from "react"
import styled from 'styled-components'
import { connect } from 'react-redux'
const StyledPage = styled.div`

`

const StyledForm = styled.div`
margin: 20% auto
`

const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid gray;
    font-size: 2.4rem
`

class Login extends React.Component {

     state = {
       email:'',
       username: '',
       password:''
     }

     handleChange = e => {
         this.setState({
             [e.target.name]: e.target.value
         })
     }

//    handleEmail(text)
//    {
//      this.ListeningStateChangedEvent({ email: text.target.value })
//    }

//    handleUsername(text)
//    {
//      this.ListeningStateChangedEvent({ username: text.target.value })
//    }

//    handlePassword(text)
//    {
//      this.ListeningStateChangedEvent({ password: text.target.value})
//    }

//    login() {
//      let obj = {}
//      obj.email = this.state.email;
//      obj.username = this.state.username;
//      obj.password = this.state.password

//      fetch('http:localhost//',
//      {
//       header: {
//         "content-type": "application/json"
//       },
//       method: 'POST',
//       body:JSON.stringify({obj})
//      }

//      ).then
//     }

    //  console.warn("all-state")

     render() {
         return (
             <StyledPage>
                 <h1> Login </h1>
                 <StyledForm>
                    <StyledInput
                    type="text" 
                    name="email"
                    value={this.state.email}
                    placeholder="Enter email"
                    onChange={this.handleChange} />
                    <br/>
                    <StyledInput 
                    type="text" 
                    name="username"
                    value={this.state.username}
                    placeholder="Enter username" 
                    onChange={this.handleChange} />
                    <br/>
                    <StyledInput
                    type="text"
                    name="password"
                    value={this.state.password}
                    placeholder="Enter password" 
                    onChange={this.handleChange} />
                    <br/>
                    <button>Submit</button>
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

export default connect(mapStateToProps, {})(Login)