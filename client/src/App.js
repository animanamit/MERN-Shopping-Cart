import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Landing from './components/Landing.js';
import Home from './components/Home.js';
import NavBar from './components/NavBar.js';
import Cart from './components/Cart.js';
import Register from './components/Register';

class App extends Component {

  componentDidMount() {
    console.log("HERE AT THE BEGINNING");
    console.log(sessionStorage.getItem("currentUser"));
    
  }


  render() {
    return (
      <BrowserRouter>
      <NavBar />
      <Switch>
        
        {/* the exact path = ___ refers to whats gonna be in the URL 
          if you don't set that here, then even in other parts of code when you link to things
          the link won't go anywhere, you need to set up the linking to other pages in this section
          using Route */}
        <Route exact path = '/home' component = {Home} />
        <Route exact path ='/cart' component = {Cart} />
        <Route exact path ='/register' component = {Register} />
        {/* <Route exact path = '/' component = {Landing} /> */}
        <React.Fragment>
          <h1>HI! I AM GOING TO FINISH THIS PROJECT DW</h1>
        </React.Fragment>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
