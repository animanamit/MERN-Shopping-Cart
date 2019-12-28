import React, { Component } from 'react';

import axios from 'axios';


class NewItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:"",
            price:"",
            description:"",
            quantity:"",
            photo:""
          }
    }

    handleSubmit(e) {
        
        axios.post('/ItemRouter/addnewitem', {
            title:this.state.title,
            price:this.state.price,
            quantity:this.state.quantity,
            description:this.state.description,
            photo:this.state.photo,
            owner : sessionStorage.getItem("currentUser")
        })
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    handleDescChange(event) {
        this.setState({description: event.target.value});
    }

    handlePriceChange(event) {
        this.setState({price: event.target.value});
    }

    handleQChange(event) {
        this.setState({quantity: event.target.value});
    }

    handlePChange(event) {
        this.setState({photo: event.target.value});
    }

    render() {
        return(
            <div>
            <h3>Add a New Item!</h3>

            <form onSubmit={this.handleSubmit.bind(this)}>
            Title: <input type = 'text' value = {this.state.title} onChange={this.handleTitleChange.bind(this)} />
            <br />
            Description: <input type = 'text' value = {this.state.description} onChange={this.handleDescChange.bind(this)} />
            <br />
            Price: <input type = 'text' value = {this.state.price} onChange={this.handlePriceChange.bind(this)} />
            <br />
            Quantity: <input type = 'text' value = {this.state.quantity} onChange={this.handleQChange.bind(this)} />
            <br />
            Add a link to a photo: <input type = 'text' value = {this.state.photo} onChange={this.handlePChange.bind(this)} />
            <br />
            <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }
}

export default NewItem;