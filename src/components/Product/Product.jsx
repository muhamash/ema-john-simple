import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Product.css';

const Product = (props) => {
  const { img, name, seller, ratings, price } = props.product;
  const handleAddToCart = props.handleAddToCart;

  const notify = () => {
    toast.success(`${name} added to the cart!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  return (
    <div className='product'>
      <div>
        <img src={img} alt='' />
        <div className='product-info'>
          <h6 className='text-orange-600'>{name}</h6>
          <p>Price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <p>Rating: {ratings} Stars</p>
        </div>
      </div>
      <div className='py-3 flex justify-center'>
        <button
          onClick={() => {
            handleAddToCart(props.product);
            notify();
          }}
          className='flex items-center gap-3 justify-center'
        >
          Add to Cart
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Product;