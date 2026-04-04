import React from 'react';
import Order from './Order';
import Orderdata from './data/order.json';

class Orders extends React.Component {
    render(){
        const orders = Orderdata;

        return(
            <div>
                {orders.map(item => (
                    <Order key={item.id} 
                            customer_name={item.customer_name}
                            totalprice={item.totalprice}
                            productid={item.productid}
                            quantity={item.quantity} />
                ))}
            </div>
        )
    }
}

export default Orders;