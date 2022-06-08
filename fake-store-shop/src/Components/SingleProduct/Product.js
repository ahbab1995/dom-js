import React from 'react';
import ModalDetails from '../Modal/Modal';
import './Product.css'

const Product = ({product,setCartCount}) => {
   
    const {image,title,price,description,category} = product;
    return (
        <div className='col-md-4 '>
            <div className="product-cart border">
                <img className='w-50' src={image} alt="" />
                <div className="cart-">
                    <h5>{title.slice(0,10)}</h5>
                    <div className='d-flex justify-content-around'>
                    <button onClick={setCartCount} type="button" className="btn btn-primary ">Add to Cart</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                    <ModalDetails product = {product}></ModalDetails>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;