import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCard = ({model,carts, setCarts}) => {
    const [isSubscribed, setIsSubscribed]= useState(false)

    const handleSubscription = ()=>{
        setIsSubscribed(true)
     
        const isFound = carts.find(item => item.id === model.id)
         
        if(isFound) {
            toast.error('Item already in cart')
            return;
        }

        setCarts([...carts,model])
        toast.success(`Wow Your ${model.title} item added!`);
    }

    return (
        <div key={model.id} className='shadow-lg rounded-lg border overflow-hidden border-zinc-300' >
        <div className='flex justify-center items-center h-56 bg-zinc-200' >
        <img src={model.image} alt="" className='h-40 w-40 object-contain'/>
        </div>
        <div className='p-4 space-y-3'>
            <h2 className='text-2xl font-bold'>{model.title}</h2>
            <p >{model.description}</p>
            <div className='text-2xl font-bold'>
                ${model.price}/month
            </div>
            <button onClick={handleSubscription} className='btn w-full bg-red-500 text-white rounded-lg mt-5'>{isSubscribed ? "Subscribed" :"Subscribe Now"}</button>
        </div>
       
    </div>  
    );
};

export default ModelCard;