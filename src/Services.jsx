import React from 'react'
import Navbar from './Navbar'
import a1 from './assets/Image/serviceImages/bdCake.jpg'
const Services = () => {
    return (
        <>
            <Navbar />
            <div className='mt-30'>
                <div className='w-full flex items-center gap-30 justify-center'>
                    <div className='relative'>
                        <div className='flex text-white gap-2 items-center absolute -top-[25px]'>
                            <div className='rounded-full bg-[#7c8e67] w-[50px] h-[50px] flex items-center justify-center'>01</div>
                            <div className='bg-[#7c8e67] rounded-2xl h-[30px] px-4'>Custom Birthday Cake Service</div>
                        </div>
                        <img src={a1} alt="" className='w-[300px] h-[300px] rounded-3xl' />
                    </div>

                    <div className=' flex-col gap-6 bg-amber-700'>
                        <div className='text-2xl '>
                            🎂Celebrate Your Day, You Way!
                        </div>
                        <div className='text-black/50 text-justify mt-4'>
                            Make Birthdays unforgettable with our handcrafted custom cakes - designed to match your style, theme, and favorite flavors. Whether it's elegant, playful, or wildly unique, we bake every layer with love and decorate every detail to perfection.
                        </div>


                        <div >✨ Pre-order your dream cake today!</div>
                        <div>📍S & M - Where Sweet Moments Begin.</div>
                        <button className='rounded-2xl bg-[#7c8e67] p-2 text-white w-[200px] cursor-pointer'>Order Now</button>

                    </div>

                </div>


            </div>

        </>

    )
}

export default Services