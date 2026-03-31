import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({carts,setCarts}) => {
    const totalPrice = carts.reduce((sum,item) => sum + item.price,0)

  const handlePayment = () =>{
    setCarts([])
    toast.success(`Payment completed`);
  }

  const handleDelete =(item) => {
          
     const filterCartItem = carts.filter(cartItem => cartItem.id !== item.id )
       setCarts(filterCartItem)
       toast.success(`Your item deleted!`);
  }
    
    return (
        <div className='p-10 max-w-7xl  mx-auto'>
            <h2 className='text-2xl font-bold'> Your Cart </h2>

            {
                carts.length === 0 ? <p className='text-2xl text-center p-5'> Cart is Empty</p> : 
                <>
         <div className='space-y-5 mt-4'>
         {
                carts.map(item => <div key={item.id} className='flex items-center justify-between border rounded-2xl p-3'>
                     
                  <div className='flex items-center gap-3'>
                  <div>
                        <img src={item.image}  className='h-20 w-20 object-contain' />
                     </div>
                    
                    <div>
                        <h2 className='text-xl font-bold'>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                  </div>
                  <div className='flex gap-10'>
                  <div className='text-2xl font-bold'>${item.price}/month</div>
                  <button onClick={()=> handleDelete(item)} className='btn rounded-full font-bold text-xl btn-error'>X</button>
                    </div>
                    
                  </div>
                 
                    )
            }
         </div>
           <div className='flex justify-between bg-black text-white p-5 mt-5 rounded-lg font-bold text-3xl'>
             <div>Total</div>
             <div> ${totalPrice}</div>
       
           </div>
           <button onClick={handlePayment} className='btn w-full mt-5 bg-red-500 text-white text-2xl rounded-lg'>Proceed to Checkout</button>
                </>

            }


        </div>
    );
};

export default Cart;