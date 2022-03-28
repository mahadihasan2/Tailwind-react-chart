
import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefits from '../Benefits/Benefits';

const PricingOption = (props) => {
    const {name,price,benefits} = props.pricing
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 rounded text-2xl font-bold'>{name}</h2>
            <p>
                <small className='text-5xl font-bold py-1'>{price}</small>
                <small className='text-xl font-bold text-gray-500'>/mo</small>
                
            </p>
            <div>
                <h3 className='text-xl text-left'>Benefits: </h3>
                {
                    benefits.map(benefit=><Benefits 
                        benefit={benefit}
                    ></Benefits>)
                }
            </div>
            <div>
                <button className='bg-green-500 flex justify-center py-3 w-full rounded mt-6 text-white font-bold hover:text-green-700'>
                    Buy Now <ArrowRightIcon className='w-6 h-6 ml-2'></ArrowRightIcon>
                </button>
            </div>
        </div>
    );
};

export default PricingOption;