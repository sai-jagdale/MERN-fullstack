import react from 'react';
import Product from './Product';

class List extends react.Component{
    render(){
        return(
            <div>
                <h3>List of Products</h3>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
        );
    }
}

export default List;