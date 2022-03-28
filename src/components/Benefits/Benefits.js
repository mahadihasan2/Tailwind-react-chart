import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';
const Benefits = (props) => {
    return (
        <div>
             <p className='flex items-center'>
                    <CheckCircleIcon className='w-4 h-4 text-green-700 mr-2 text-bold'></CheckCircleIcon>
                    {props.benefit}
                </p>
        </div>
    );
};

export default Benefits;