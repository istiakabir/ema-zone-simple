import React, { useEffect, useState } from 'react';
import { addToDb, getStoredData } from '../../utilities/fakedb';
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

    useEffect(() => {
       const storedProduct = getStoredData();
       const savedcart = [];
       for(const id in storedProduct){
           let addedProduct = products.find(product => product.id === id);

           if (addedProduct){
               const quantity =storedProduct[id];
               addedProduct.quantity = quantity;
               savedcart.push(addedProduct);
           }
           setCart(savedcart);
       }
    }, [products])

    // click function work

    const [cart, setCart] = useState([]);

    const handleToCart = (selectedProduct) => {
        let newCart =[];
        const exits = cart.find(product => product.id === selectedProduct.id)
        
        if(!exits){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exits.quantity += 1 ;
            newCart = [...rest, exits];
        }


       
        setCart(newCart);
        addToDb(selectedProduct.id)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
            
        
    );
};

export default Shop;