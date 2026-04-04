import React from 'react';

class Order extends React.Component {
    render(){
        return(
                <div>
                    <h3>Order Details</h3>
                    <p>Customer Name:{this.props.customer_name}</p>
                    <p>Price : Rs{this.props.totalprice}</p>
                    <p>Product ID : {this.props.productid}</p>
                    <p>Quantity : {this.props.quantity}</p>
                </div>
        )
    }
}

export default Order;

