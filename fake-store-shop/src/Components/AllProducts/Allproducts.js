import React, { useEffect , useState} from 'react';
import Product from '../SingleProduct/Product';
import './Allproducts.css';

const Allproducts = ({setCartCount}) => {
    const [products,setProducts] = useState([]);

     useEffect(()=>{
        fetch(' https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
    },[products]);
    return (
        <div className='row container mx-auto pt-2'>
            {
                products.map(product => <Product 
                key={product.id} 
                product = {product}
                setCartCount = {setCartCount}
                > </Product>)
            }
        
        </div>
    );
};

export default Allproducts;