import Item from './Items';
import data from '../data/cart.json';

function Cart(){
    
    const cartitems = data;

    return(
        <div className="text-center">
            <h2>Product Details</h2> 
            {
                data.map(item => (
                    <Item
                        key={item.id} 
                        title={item.name}
                        imageurl={item.imageurl}
                        unitprice={item.price}
                        quantity={item.quantity}
                    />
                ))
            }
        </div>
    );
}

export default Cart;