import react from 'react';
import Product from './Product';

import productData from './data/product.json';

class List extends react.Component{
    render(){
        const flowers=productData;
        return(
            <div>
                
                {flowers.map(item => (
                    <Product key={item.id} 
                            title={item.name} 
                            imageurl={item.imageurl}
                            price={item.price} 
                            color={item.color}
                            likes={item.likes} />
                ))}
            </div>
        );
    }
}

export default List;