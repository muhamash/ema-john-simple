import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Cart from '../Cart/cart';

const Product = ( props ) =>
{

    const { img, name, seller, ratings, price } = props.product;
    const handleAddToCart = props.handleAddToCart;


    return (
        <div className='product'>
            <div>
                <img src={ img } alt="" />
                <div className='product-info'>
                    <h6 className='text-orange-600'>{ name }</h6>
                    <p>Price: ${ price }</p>
                    <p>Manufacturer: { seller }</p>
                    <p>Rating: { ratings } Stars</p>
                </div>
            </div>
            <div className='py-3 flex justify-center'>
                <button onClick={ () => handleAddToCart( props.product ) } className=' flex items-center gap-3 justify-center'>
                    Add to Cart
                    <FontAwesomeIcon icon={ faShoppingCart } />
                </button>
            </div>
        </div>
    );
};

export default Product;