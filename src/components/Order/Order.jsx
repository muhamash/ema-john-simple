import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import DeleteItem from './DeleteItem';
import { ToastContainer } from 'react-toastify';

const Order = () => {
    const initialProducts = useLoaderData();
    const [cart, setCart] = useState(initialProducts);

    const deleteCartItem = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        removeFromDb(productId);
        setCart(updatedCart);
    };

    const deleteEachItem = (productId) => {
        removeFromDb(productId);
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    };

    const deleteCart = () => {
        deleteShoppingCart();
        setCart([]);
    };

    useEffect(() => {
        setCart(initialProducts);
    }, [initialProducts]);

    return (
        <div className='py-10 flex gap-5 justify-center items-center'>
            <div className='text-2xl font-bold text-left p-10'>
                Cart: {cart.length}
            </div>
            <div className='cart-container w-[300px]'>
                <Cart cart={cart} deleteCartItem={deleteCartItem} />
            </div>
            <div className='flex flex-col gap-5 justify-center items-center'>
                {cart.map(item => (
                    <div
                        key={item.id}
                        onClick={() => deleteEachItem(item.id)}
                        className='bg-cyan-700 px-3 py-4 text-white rounded-md cursor-pointer w-[400px]'
                    >
                        <DeleteItem name={item.name}/>
                    </div>
                ) ) }
                <ToastContainer />
                <div
                    onClick={deleteCart}
                    className='bg-rose-700 cursor-pointer text-white px-3 py-4 rounded-md'
                >
                    Delete Cart
                </div>
            </div>
        </div>
    );
};

export default Order;