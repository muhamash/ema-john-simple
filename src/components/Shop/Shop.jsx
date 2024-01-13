import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../cart/cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () =>
{
    const [ shopState, setShopState ] = useState( {
        products: [],
        cart: [],
    } );

    console.log(shopState)
    useEffect( () =>
    {
        fetch( 'products.json' )
            .then( res => res.json() )
            .then( data => setShopState( prevState => ( { ...prevState, products: data } ) ) );
    }, [] );

    useEffect( () =>
    {
        const data = getShoppingCart();
        const quantityArray = Object.keys( data ).map( id =>
        {
            const product = shopState.products.find( p => p.id === id );
            console.log(product)
            return product ? { ...product, quantity: data[ id ] } : null;
        } ).filter( Boolean );
        
        setShopState( prevState => ( { ...prevState, cart: quantityArray } ) );
        console.log( setShopState )
        console.log(shopState)

    }, [ shopState.products ] );

    const handleAddToCart = ( product ) =>
    {
        const newCart = [ ...shopState.cart, product ];
        setShopState( prevState => ( { ...prevState, cart: newCart } ) );
        addToDb( product.id );
    };

    return (
        <div className='shop-container'>
            <div className="products-container">
                { shopState.products.map( product => (
                    <Product
                        key={ product.id }
                        product={ product }
                        handleAddToCart={ handleAddToCart }
                    />
                ) ) }
            </div>
            <div className="">
                <Cart cart={ shopState.cart } />
            </div>
        </div>
    );
};

export default Shop;