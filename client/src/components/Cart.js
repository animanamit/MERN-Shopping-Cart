// import { Link } from 'react-router-dom'
import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import axios from 'axios';

class Cart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cart:[],
            
          }
    }

    componentDidMount() {
        console.log("MOUNTED CART");

        this.setState({
            cart:[]
        });

        this.loadCart()
    }

    loadCart() {

        let u = sessionStorage.getItem("currentUser")

        axios.get('/UserRouter/getcartids', {params : { username: u }})
        .then(res => {
            this.setState({
                cart : res.data.cartItems
            })
            console.log(this.state.cart)
        })
        .catch(err => console.log(err));
    }

    handleSubmit(e) {
        console.log('at submission');
        this.deleteItemFromCart();
    }

    deleteItemFromCart() {

        console.log('at delete');


    }

    render(){
        let total = 0;

        {this.state.cart.map(item => {
            total = total + parseFloat(item.price);
        })}
        return (
            <React.Fragment>
            <h1>Items in Your Cart</h1>

            {this.state.cart.map(item => {
                return(
                    <div>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <button onClick={this.handleSubmit.bind(this)}>Delete?</button>

                    <h3>Your total is: ${total}</h3>
                    </div>
                    
                )
            })}
            </React.Fragment>
        )
    }
}


export default Cart;