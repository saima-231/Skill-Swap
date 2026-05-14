import React, { useEffect, useState } from 'react';
import ProviderData from './ProviderData';

const TopProviders = () => {
    const [provider,setProvider]=useState([]);
    useEffect(()=>{
        fetch('/topProvider.json')
        .then(res=>res.json())
        .then(data=>setProvider(data))
    },[])
    return (
        <div className='bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 rounded-sm'>
             <div className='text-center mb-10 p-4 mt-2'>

                <h2 className='text-4xl font-bold text-gray-800'>
                    Top Rated Providers
                </h2>

                <p className='text-gray-600 mt-3 max-w-2xl mx-auto'>
                    Meet our highly rated instructors and mentors helping learners
                    improve their skills with real experience and guidance.
                </p>

            </div>
             <div className=' grid grid-cols-2 md:grid-cols-3 gap-8 my-4 p-4 rounded-sm'>
            {
                provider.map(provider=>
                <ProviderData key={provider.skillId} provider={provider}></ProviderData>)
            }
        </div>
        </div>
       
    );
};

export default TopProviders;