import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/cart';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const initialProducts = useLoaderData();
    const [cart, setCart] = useState(initialProducts);

    const deleteCartItem = (productId) => {
        // Remove the specific item from the cart
        const updatedCart = cart.filter(item => item.id !== productId);
        removeFromDb(productId); // Assuming removeFromDb is responsible for removing the item from the database
        setCart(updatedCart);
    };

    const deleteEachItem = () => {
        // Delete each item in the cart individually
        cart.forEach(item => {
            removeFromDb(item.id);
        });
        setCart([]);
    };

    const deleteCart = () =>
    {
        deleteShoppingCart()
        setCart([])
    }

    useEffect(() => {
        // Update local state when the data changes
        setCart(initialProducts);
    }, [initialProducts]);

    return (
        <div className='py-10 flex gap-5 justify-center items-center'>
            <div className='text-2xl font-bold text-left p-10'>
                Cart: {cart.length}
            </div>
            <div className='cart-container w-[300px]'>
                <Cart cart={cart} deleteCartItem={deleteCartItem} />
                {/* Pass deleteCartItem function to the Cart component */}
            </div>
            <div className='flex flex-col gap-5 justify-center items-center'>
                <div
                    onClick={deleteEachItem}
                    className='bg-pink-600 px-2 py-4 text-white rounded-md cursor-pointer'
                >
                    Delete each item
                </div>
                <div
                    onClick={deleteCart}
                    className='bg-red-700 cursor-pointer text-white px-2 py-4 rounded-md'
                >
                    Delete Cart
                </div>
            </div>
        </div>
    );
};

export default Order;