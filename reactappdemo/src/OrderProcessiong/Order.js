import React from "react";

function Order(props) {
    return (
        <div className="text-center" style={{border: "1px solid gray", margin: "10px", padding: "10px"}}>
            
            <p><b>Order ID:</b> {props.id}</p>
            <p><b>Customer:</b> {props.customer_name}</p>
            <p><b>Product:</b> {props.productName} (ID: {props.productid})</p>
            <p><b>Quantity:</b> {props.quantity}</p>
            <p><b>Amount:</b> ₹{props.amount}</p>

        </div>
    );
}

export default Order;