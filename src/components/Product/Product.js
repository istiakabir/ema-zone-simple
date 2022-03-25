import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.allProduct)
    const {name, seller, price, ratings, img, quantity} = props.allProduct;
    return (
        <div className='product'>
        <img src={img} alt="" />
           <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <h4>Price: ${price}</h4>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Rating : {ratings} star</small></p>
           </div>
            <button onClick={() => props.handleToCart(props.allProduct)} className='product-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default Product;