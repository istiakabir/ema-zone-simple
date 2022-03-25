import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))


    },[])

    // click function work

    const [cartProduct, setCartProduct] = useState([]);

    const handleToCart = (product) => {
        const newCart = [...cartProduct, product]
        setCartProduct(newCart);
    }

    


    return (

        <div className='shop-container'>

            <div className='products-container'>
            {
                products.map(product => <Product 
                    key={product.id}
                    handleToCart={handleToCart}
                    allProduct ={product}
                    ></Product>)
            }

            </div>

            <div className='cart-container'>
                <Cart cart={cartProduct}></Cart>
            </div>
        </div>
            
        
    );
};

export default Shop;