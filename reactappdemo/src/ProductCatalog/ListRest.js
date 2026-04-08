import React ,{useState,useEffect}from "react";
import Product from './Product';
import productsData from '../data/product.json';

function RestList(){
    const [products,setProducts]=useState([]);
    const [errorMessage,setErrorMessage]=useState("");

    useEffect(()=>{
        // Temporarily use local data instead of API call
        try {
            // Map the local JSON data to match component expectations
            const mappedProducts = productsData.map(item => ({
                id: item.id,
                title: item.name,
                description: item.color,
                imageurl: item.imageurl,
                price: item.price,
                color: item.color,
                likes: item.likes
            }));
            setProducts(mappedProducts);
        } catch (error) {
            setErrorMessage(error.toString());
            console.log("There was an error loading local data: " + error);
        }
    }, []);
    

    return (
        
        <div className="text-center">
            {errorMessage &&<p>{errorMessage}</p>}
            {
                products.map(item => (
                    <Product
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        imageurl={item.imageurl}
                        price={item.price}
                        color={item.color}
                        likes={item.likes}
                    />
                ))
            }
        </div>
    );
}

export default RestList;