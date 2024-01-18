import React from 'react';
import {MinusCircleFilled} from '@ant-design/icons';

const DeleteItem = ({name}) => {
    return (
        <div className='flex items-center justify-between px-2'>
            <div>
                {name}
            </div>
            <div>
                <MinusCircleFilled className='text-xl'/>
            </div>
        </div>
    );
};

export default DeleteItem;