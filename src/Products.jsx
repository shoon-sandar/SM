import React from 'react'
import Navbar from './Navbar'
const Products = () => {
    return (
        <>
            <Navbar />
            <div className='mt-18 w-full h-[70vh] bg-black flex'>
                <div className='w-1/4 bg-amber-400'></div>
                <div className='w-3/4 bg-green-500'></div>
            </div>
            <div className='h-[30vh] w-full bg-red-500'></div>

        </>

    )
}

export default Products