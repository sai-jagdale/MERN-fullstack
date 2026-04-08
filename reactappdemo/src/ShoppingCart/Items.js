import React from 'react';

function Items(props){

    const [quantity, setQuantity] = React.useState(props.quantity);

    return( 
        <div>
            <h3>Item Details</h3>
            <hr />

            <p>Title : {props.title}</p>
            <img src={props.imageurl} width="100" height="100" alt="item" />
            <p>Quantity: {quantity}</p>
            <p>Unit Price: {props.unitprice}</p>
            <p>Amount: {props.unitprice * quantity} Rs.</p>
            <br />

            <button>Remove</button>
        </div>
    );
}

export default Items;