import React from "react"
import styled from 'styled-components'
import { connect } from 'react-redux'
import { login } from '../../actions/index'
import axios from 'axios'
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
            username: '',
            password:'',
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
         this.props.login(this.state.credentials)
         .then(() => this.props.history.push('/homepage'));
     }

    // register = e => {
    //     e.preventDefault();
    //     const URL = 'http://localhost:5000' 
    //     // let URL = 'https://pintereacher.herokuapp.com'
    //     const creds = this.state.credentials
    //     axios.post(`${URL}/api/register`, creds)
    //       .then(res => {
    //         this.setState({isRegistered:true})
    //         // localStorage.setItem("jwt", res.data.token);
    //         this.props.history.push('/homepage')
    //       }).catch(err => console.log(err));
    //     console.log("Credentials", this.state.credentials);
    //   };

     render() {
         return (
             <StyledPage>
                 <h1> Login </h1>
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

export default connect(mapStateToProps, {login})(Login)