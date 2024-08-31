import React from 'react'
import { Link } from 'react-router-dom'
import CANCELIMAGE from '../assest/cancel.webp'

const Cancel = () => {
    return (
        <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2 rounded'>
            <img
                src={CANCELIMAGE}
                alt='payment failed!'
                width={220}
                height={220}
                className=' mix-blend-multiply'

            />


            <p className='text-red-600 font-bold text-xl'>Payment Failed!</p>

            <Link to={"/cart"} className='p-2 px-3 mt-5 border-2 border-red-600 rounded font-semibold text-red-600 hover:bg-red-600 hover:text-white'>return to Cart</Link>

        </div>
    )
}

export default Cancel
