import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Cart from '../Cart/cart';

const Order = () =>
{
    const products = useLoaderData();

    return (
        <div className='py-10 flex gap-3 justify-center items-center'>
            <div className='text-2xl font-bold text-left p-10'>
                Cart:{products.length}
            </div>
            <div className='cart-container w-[300px]'>
                <Cart cart={products} />
            </div>
        </div>
    );
};

export default Order;