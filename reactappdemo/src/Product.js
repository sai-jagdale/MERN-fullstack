import React from 'react';

class Product extends React.Component {

    render(){
        return(
            <div>
                <h3>Product Details</h3>
                    {/* this.props.title , etc.. are databinding expressions*/}
                <p>Title:{this.props.title}</p>
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
