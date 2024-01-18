import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import { ToastContainer, toast } from 'react-toastify';

const Shop = () =>
{
  const [ shopState, setShopState ] = useState( {
    products: [],
    cart: [],
  } );

  console.log( shopState.cart );

  useEffect( () =>
  {
    fetch( 'products.json' )
      .then( ( res ) => res.json() )
      .then( ( data ) => setShopState( ( prevState ) => ( { ...prevState, products: data } ) ) )
      .catch( ( error ) => console.error( 'Error fetching products.json:', error ) );
  }, [] );

  useEffect( () =>
  {
    const data = getShoppingCart();
    const quantityArray = Object.keys( data ).map( ( id ) =>
    {
      const product = shopState.products.find( ( p ) => p.id === id );
      return product ? { ...product, quantity: data[ id ] } : null;
    } ).filter( Boolean );

    setShopState( ( prevState ) => ( { ...prevState, cart: quantityArray } ) );
  }, [ shopState.products ] );

  const handleAddToCart = ( product ) =>
  {
    const newCart = [ ...shopState.cart, product ];
    setShopState( ( prevState ) => ( { ...prevState, cart: newCart } ) );
    addToDb( product.id );
  };

  return (
    <div className='shop-container'>
      <div
        className="products-container">
        { shopState.products.map( ( product ) => (
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
      <ToastContainer />
    </div>
  );
};

export default Shop;
