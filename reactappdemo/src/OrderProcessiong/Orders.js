import React from "react";
import Order from "./Order";
import data from "../data/order.json";
import products from "../data/product.json";

function Orders() {
    const orders = data;

    const getProductName = (productId) => {
        const product = products.find((item) => item.id === productId);
        return product ? product.name : `Product #${productId}`;
    };

    return (
        <div className="text-center">
            <h2>Orders List</h2>

            {
                orders.map(order => (
                    <Order
                        key={order.id}
                        id={order.id}
                        customer_name={order.customer_name}
                        productid={order.productid}
                        productName={getProductName(order.productid)}
                        quantity={order.quantity}
                        amount={order.totalprice}
                    />
                ))
            }
        </div>
    );
}

export default Orders;