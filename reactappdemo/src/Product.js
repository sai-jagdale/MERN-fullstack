import React from 'react';

class Product extends React.Component {
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
                <br/>
                <button>Add to Cart</button>

            </div>
        );
    }
}

export default Product;
