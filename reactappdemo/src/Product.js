import React from 'react';
import Counter from './Counter';

class Product extends React.Component {

    constructor(props){
        super(props);
        //initializing state by taking value from property
        this.state = {likes:props.likes};
        // Event binding in react is done in the constructor 
        // of the class component.
        // this handler is the callback function that 
        // is passed to the counter component.
        this.handler = this.handler.bind(this);
    }


    // Callback function 
    handler(data){
        // here data is the value that is passed from 
        // the counter component and it is used to 
        // update the state of the product component
        this.setState({likes:data});

        // this changes the valu of likes in the product component 
        // and then the updated value is passed to the counter 
        // component as a property and then the counter component 
        // re-renders with the updated value of likes
    }

    render(){
        return(
            <div>
                <h3>Product Details</h3>
                    {/* this.props.title , etc.. are databinding expressions*/}
                    {/* props is an object that contains all the properties passed to the component */}
                    {/* Get the value from the .json file it gets stored in the props (properties)and 
                    then gets binded with the p of 'title' */}
                    <p>Title:{this.props.title}</p>
                    {/* get image url and bind it with the image src */}
                    <img src={this.props.imageurl} width="100" height="100"/>
                    <p>Price : Rs{this.props.price}</p>
                    <p>Color : {this.props.color}</p>
                    <p>Likes : {this.props.likes}</p>
                    {/* here count is the property of Counter , that is passed to 
                    the counter component */}
                    <Counter count={this.props.likes} handler={this.handler}></Counter>
                <br/>
                <button>Add to Cart</button>

            </div>
        );
    }
}

export default Product;
