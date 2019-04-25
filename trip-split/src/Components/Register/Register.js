import React from "react"
import styled from 'styled-components'
import { connect } from 'react-redux'
import { register } from '../../actions/index'
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
                    <button onClick={this.register}>Submit</button>
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