import React from 'react'
import img1 from "./assets/Image/baking/baking.webp"
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaAward } from "react-icons/fa";
import baked from "./assets/Image/icon/freshbread.png"
import l1 from "./assets/Image/icon/calorie.png"
import l2 from "./assets/Image/icon/organic.png"
import l3 from "./assets/Image/icon/health.png"
const Aboutus = () => {
    return (
        <div className=' px-4 py-10 flex gap-10 w-[55vw]'>

            <img src={img1} alt="" className='w-[350px] h-[450px] rounded-[3rem] ' />

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


                <div className='text-2xl text-black/70 '>
                    Prioririzing health,
                </div>
                <div className='text-black/60 text-2xl text-right'>
                    freshness in every slice.
                </div>
                <div className='text-black/40 text-md mt-2 text-justify'>
                    We lovingly bake with only clean, safe, and hygienic ingredients to ensure every bite is as wholesome as it is delicious
                </div>
                <div className='flex gap-4 px-4  items-center bg-black/10 rounded-full mt-4 '>
                    <div className='text-2xl'>
                        🥇
                    </div>
                    <div className='text-black/30 text-md ml-2'>
                        The Bloom & Bake Excellence Award
                    </div>
                </div>



                <div className='flex gap-2 mt-6'>

                    <div className='bg-rod/30 p-4 rounded-full flex items-center gap-4 w-1/2'>
                        <div className=' bg-rod/60 rounded-full h-[50px] w-[50px] flex items-center justify-center'>
                            <img src={baked} alt="" className='w-[25px]' />
                        </div>
                        <div className='text-wrap'>
                            <div>100% </div>
                            <div>Freshness</div>
                        </div>
                    </div>


                    <div className='bg-amber-800/30 p-4 rounded-full flex items-center gap-4 w-1/2'>
                        <div className=' bg-bat-blood rounded-full h-[50px] w-[50px] flex items-center justify-center'>
                            <img src={l1} alt="" className='w-[25px]' />
                        </div>
                        <div className='text-wrap'>
                            <div>Balance </div>
                            <div>Calories</div>
                        </div>
                    </div>


                </div>


                <div className='flex gap-2 mt-2'>

                    <div className='bg-emerald-500/30 p-4 rounded-full flex items-center gap-4 w-1/2'>
                        <div className=' bg-emerald rounded-full h-[50px] w-[50px] flex items-center justify-center'>
                            <img src={l2} alt="" className='w-[25px]' />
                        </div>
                        <div className='text-wrap'>
                            <div>99.99% </div>
                            <div>Organic</div>
                        </div>
                    </div>


                    <div className='bg-fuchsia-700/30 p-4 rounded-full flex items-center gap-4 w-1/2'>
                        <div className=' bg-fuchsia-500 rounded-full h-[50px] w-[50px] flex items-center justify-center'>
                            <img src={l3} alt="" className='w-[25px]' />
                        </div>
                        <div className='text-wrap'>
                            <div>Healthy</div>

                        </div>
                    </div>



                </div>



            </div>

        </div>
    )
}

export default Aboutus
