import React from 'react'
import img1 from "./assets/Image/baking/baking.webp"
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaAward } from "react-icons/fa";
const Aboutus = () => {
    return (
        <div className=' px-4 py-10 flex gap-10'>

            <img src={img1} alt="" className='w-[350px] h-[400px] rounded-[3rem] ' />

            <div>
                <div className='flex justify-between w-[100%]'>
                    <div className='flex text-[1.5rem] '>
                        <IoCheckmarkOutline className='z-50 text-rod' />
                        <IoCheckmarkOutline className='-ml-[17px] text-black/40' />
                    </div>
                    <div>
                        About Us
                    </div>
                </div>


                <div className='text-4xl'>
                    Prioririzing health,
                </div>
                <div className='text-black/60 text-3xl'>
                    freshness in every slice.
                </div>
                <div className='text-black/40 text-2xl'>
                    We lovingly bake with only clean, safe, and hygienic ingredients to ensure every bite is as wholesome as it is delicious
                </div>
                <div className='flex justify-between'>
                    <div>
                        <FaAward className='text-rod'/>
                    </div>
                    <div>
                        The Bloom & Bake Excellence Award
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Aboutus