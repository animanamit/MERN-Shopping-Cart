import React, { Component } from 'react';

import axios from 'axios';

import Item from './Item.js';
import Register from './Register.js';
import Login from './Login.js';
import NewItem from './NewItem.js';

class Home extends Component {

constructor(props) {
    super(props)
    this.state = { 
        items:[],
        isCartEmpty : false,
        isLoggedIn: false,
        currentUser: ""
    }

    this.handleReg = this.handleReg.bind(this);
}

componentDidMount() {
    // getting all items and adding them to product array
    axios.get('/ItemRouter')
   .then(res => {
       this.setState({items : res.data})
    })

    if (sessionStorage.getItem("currentUser") != null) {
        this.setState({isLoggedIn:true, currentUser:sessionStorage.getItem("currentUser")})
    }


}

handleReg(bool) {
       this.setState( {
           isLoggedIn : bool
       })
}

handleLogoutSubmit() {
    console.log('made it to log out');
    sessionStorage.clear();
    this.handleReg(false)
}

render() {

    let reg;
    let log;
    let newIt;

    let logout;

    let allItems;

    if (this.state.isLoggedIn === false) {
        reg = <Register parentRegHandler = {this.handleReg} />
        log = <Login />
        
    }

    if (this.state.isLoggedIn === true) {
        newIt = <NewItem />
        logout = <button onClick={this.handleLogoutSubmit.bind(this)}>Logout</button>
        allItems = this.state.items.map((item) => {
            return(
             <Item title={item.title} price={item.price} description = {item.description} quantity = {item.quantity} 
            photo={item.photo} id={item._id} owner={item.owner} />
            );   
        })
    }

return(
    <div className="container">
        {reg}
        {log}
        {logout}
        {newIt}
        <div className = 'all'> 
            <h3>PRODUCTS FOR SALE</h3>
            {allItems}
        </div>
    </div>
    )
}
}

export default (Home);