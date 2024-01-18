import React from 'react';
import { MinusCircleFilled } from '@ant-design/icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteItem = ( { name } ) =>
{
    const notify = () =>
    {
        toast( `${name} ⛳️ ⛳️ product deleted from cart!`, {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        } );
    };    
    return (
        <div className='flex items-center justify-between px-2'>
            <div>
                {name}
            </div>
            <div>
                <MinusCircleFilled className='text-xl' onClick={notify}/>
            </div>
        </div>
    );
};

export default DeleteItem;