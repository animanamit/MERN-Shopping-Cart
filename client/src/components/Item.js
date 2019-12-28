import React, { Component } from 'react';
import axios from 'axios';

class Item extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title:"",
      price:"",
      description:"",
      photo:"",
      quantity:"",
      comments:[],
      reviews:[],
      id:"",
      commentWriting:"",
      reviewWriting:""
    }

  }

  componentDidMount() {
    this.loadItems();
  }

  loadItems() {

    axios.get('/ItemRouter/getitem', {params : { title : this.props.title }} )
    .then(res => {
      console.log(res.data) 
      this.setState( { comments : res.data.comments , reviews : res.data.reviews});
    })
    .catch(err => console.log(err));
  }

  deleteItem() {
    console.log("gonna delete this!");
    axios.delete('/ItemRouter/deleteitem', { params : {title : this.props.title} })
  }

  handleDeleteSubmit(e) {
    this.deleteItem();
  }

  addComment() {
    console.log("gonna add a comment!")
    axios.put('/ItemRouter/addcomment', { title : this.props.title, comment : this.state.commentWriting })
    .then(res => {
      this.setState({
        comments : res.data.comments
      })
    })
  }

  addReview() {
    console.log("gona add a review");
    console.log(this.props.title)
    console.log(this.state.reviewWriting)
    axios.put('/ItemRouter/addreview', { title:this.props.title, review : this.state.reviewWriting})
    .then(res => {
      this.setState({
        reviews : res.data.reviews
      })
    })
  }

  addToCart() {
    console.log("gonna add this to cart!!")

    console.log(sessionStorage.getItem("currentUser"));
    console.log(this.props.id);
    console.log(this.props.title)
    console.log(this.props.price)
    console.log(this.props.quantity)
    console.log(this.props.photo)
    console.log(this.props.description)

    axios.put('/UserRouter/addtocart', { username : sessionStorage.getItem("currentUser"), body : {
      
      title: this.props.title,
      price: this.props.price,
      description: this.props.description,
      photo: this.props.photo,
      quantity: this.props.quantity,
      comments:[],
      reviews:[],
      id:this.props.id }})
    .then(console.log("finished"))
    .catch(err => console.log(err));

  }
  

  handleCommentSubmit(e) {
    this.addComment();
  }

  handleReviewSubmit(e) {
    this.addReview();
  }

  handleNewReviewChange(event) {
    this.setState({reviewWriting : event.target.value})
  }

  handleNewCommentChange(event) {
    this.setState({commentWriting : event.target.value})
  }


  handleAddToCartSubmit(e) {
    this.addToCart();
  }
  render() {

    let del;
    console.log(this.props.owner)
    console.log(sessionStorage.getItem("currentUser"))
    if (this.props.owner === sessionStorage.getItem("currentUser")) {
      del = <button onClick = {this.handleDeleteSubmit.bind(this)}>Delete Listing?</button>
    }
    

    return(
      <div>
        <div>
        {this.props.title}
        <br />
        Price : ${this.props.price}
        <br />
        <img src={this.props.photo} alt = "..."></img>
        </div>
        <div>
        {del}
        </div>

        <div>
        <button onClick = {this.handleAddToCartSubmit.bind(this)}>Add to Cart?</button>
        </div>

        <h4>User Comments</h4>
        {this.state.comments.map(comment => {
          return(<p>{comment}</p>)
        })}


        <div>
        <form onSubmit = {this.handleCommentSubmit.bind(this)}>
        Add a Comment:
        <input type = 'text' value = {this.state.commentWriting} onChange={this.handleNewCommentChange.bind(this)}></input>
        <input type="submit" value="Submit" />
        </form>
        </div>

        <h4>User Reviews</h4>
        {this.state.reviews.map(review => {
          return(<p>{review}</p>)
        })}
        
        <div>
        <form onSubmit = {this.handleReviewSubmit.bind(this)}>
        Add a Review:
        <input type = 'text' value = {this.state.reviewWriting} onChange={this.handleNewReviewChange.bind(this)}></input>
        <input type="submit" value="Submit" />
        </form>
        </div>
      
      

      </div>

    )
}


}


export default Item;