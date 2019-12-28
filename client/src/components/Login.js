import React, { Component } from 'react';
import axios from 'axios';
var passwordHash = require('password-hash');

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username:"",
            password:"",
          }
    }

    handleSubmit(e) {
        this.login()
        this.props.parentRegHandler(true);
    }

    handleNameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePassChange(event) {
        this.setState({password: event.target.value});
    }

    login() {

        axios.get('/UserRouter/login', { params : {
            username: this.state.username
          }})
        .then(res => {
            console.log("MADE IT !!!!!!!!!!!!")
            sessionStorage.setItem("currentUser", res.data.username);
            console.log(res.data.username);
        })
        .catch(err => console.log(err));
    }


    render(){

        return (
            <React.Fragment>
            <h3>Login Below</h3>
            <form onSubmit = {this.handleSubmit.bind(this)}>
            <label>
                Name:
                <input type = 'text' value = {this.state.username} onChange={this.handleNameChange.bind(this)} />
                <br />
                Password:
                <input type = 'text' value = {this.state.password} onChange={this.handlePassChange.bind(this)} />
            </label>
            <input type="submit" value="Submit" />
            </form>
            </React.Fragment>
        )
    }
}

export default Login;