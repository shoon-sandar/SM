import React from 'react'
import img1 from "./assets/Image/baking/baking.webp"
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaAward } from "react-icons/fa";
const Aboutus = () => {
    return (
        <div className=' px-4 py-10 flex gap-10'>

            <img src={img1} alt="" className='w-[350px] h-[400px] rounded-[3rem] ' />

            <div>
                <div className='flex gap-2 items-center'>
                    <div className='flex text-[1.5rem]'>
                        <IoCheckmarkOutline className='z-50 text-rod' />
                        <IoCheckmarkOutline className='-ml-[17px] text-black/40' />
                    </div>
                    <div className='text-[1rem]'>
                        About Us
                    </div>
                </div>


                <div className='text-4xl '>
                    Prioririzing health,
                </div>
                <div className='text-black/60 text-3xl ml-43'>
                    freshness in every slice.
                </div>
                <div className='text-black/40 text-xl w-[50%] mt-2'>
                    We lovingly bake with only clean, safe, and hygienic ingredients to ensure every bite is as wholesome as it is delicious
                </div>
                <div className='flex gap-2 items-center bg-black/10 rounded-2xl mt-4 w-[50%] h-[10%]'>
                    <div>
                        <FaAward className='text-rod ml-4 ' />
                    </div>
                    <div className='text-black/30 text-2xl ml-5'>
                        The Bloom & Bake Excellence Award
                    </div>
                </div>


                <div className='flex justify-between w-[50%] mt-10'>
                    <div className='bg-amber-400 w-[25%]'>
                        100% Fresh
                        Freshness
                    </div>
                    <div className='bg-bat-blood w-[25%]'>
                        Balance Calories
                    </div>
                    <div className='bg-blue-500'>
                        99.99% Organic
                    </div>
                    <div className='bg-emerald-400'>
                        Healthy
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Aboutus