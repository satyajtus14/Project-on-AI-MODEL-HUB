
import React, { use} from 'react';
import ModelCard from './ModelCard';

const Model = ({modelPromise,carts,setCarts}) => {
    const modelData = use(modelPromise);
    console.log(modelData);




    return (
        <div className='py-20 max-w-7xl  mx-auto'>
            <div className='text-center'>
            <h2 className='font-bold text-5xl'>Choose Your AI Model</h2>
            <p className='font-semibold text-gray-400'>One subscription gives you access to all frontier AI models</p>
            </div>

            <div  className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    modelData.map(model=> 
                    <ModelCard key={model.id} model={model} carts={carts}setCarts={setCarts}/>  

                    )
                }
            </div>
        </div>
    );
};

export default Model;