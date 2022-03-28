import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricing = [
        {
            id: 1, name: "Free", price: 0, benefits: [
                'unlimited website',
                'life-time support',
                'free hosting',
                'every time support',
                'thinking yes'
            ]
        },
        {
            id: 1, name: "Regular", price: 9.99
            , benefits: [
                'unlimited website',
                'life-time support',
                'free hosting',
                'every time support',
                'thinking yes'
            ]
        },
        {
            id: 1, name: "premimum", price: 19.99
            , benefits: [
                'unlimited website',
                'life-time support',
                'free hosting',
                'every time support',
                'thinking yes'
            ]
        },

    ]
    return (
        <div className='bg-indigo-300 p-11 mt-5'>

            <h1 className='text-5xl p-5 mt-8 font-extralight'>Best deal of the town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis assumenda dolorem praesentium minima sapiente mollitia, veniam beatae, expedita sit quas totam vero, saepe molestiae necessitatibus quasi repellat reprehenderit vitae.</p>
            <div className='grid grid-cols-3 gap-3 mt-4'>
                {
                    pricing.map(pricing => <PricingOption
                        key={pricing.id}
                        pricing={pricing}

                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;