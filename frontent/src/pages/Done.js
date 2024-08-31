import React from 'react'
import { Link } from 'react-router-dom'
import SUCCESSIMAGE from '../assest/success.gif'

const Done = () => {
    return (
        <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2 rounded'>
            <img
                src={SUCCESSIMAGE}
                alt='successimage'
                width={220}
                height={220}
            />


            <p className='text-green-600 font-bold text-xl'>Payment Successfull!</p>
            <p className='text-green-600 font-bold text-xl' > Your Order is on the way!</p>

            <Link to={"/order"} className='p-2 px-3 mt-5 border-2 border-green-600 rounded font-semibold text-green-600 hover:bg-green-600 hover:text-white'>See Orders</Link>

        </div>
    )
}

export default Done
