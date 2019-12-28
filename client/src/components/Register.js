import React, { Component } from 'react';
import axios from 'axios';
var passwordHash = require('password-hash');

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username:"",
          password:"",
        }

    }

    register() {

        let hashedPassword = passwordHash.generate(this.state.password);

        axios.post('/UserRouter', {
            username: this.state.username,
            password: hashedPassword
          })
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
        })

    };

    handleSubmit(e) {
        this.register();
        this.props.parentRegHandler(true);
        sessionStorage.setItem("currentUser", this.state.username);
    }

    handleNameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePassChange(event) {
        this.setState({password: event.target.value});
    }

    render(){

        let reg = this.props.registerUpdate;

        return (
            <React.Fragment>
            <h3>Registration happens here!</h3>
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

export default Register;