import React from 'react'
import Logo from "./assets/Image/logo.jpg"
import { IoLogoFacebook } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className='bg-[#424141] p-6 px-12 '>

            <div className='flex justify-between'>
                <div>
                    <div className='flex gap-4 items-center '>
                        <img src={Logo} alt="" className=' w-[60px] h-[60px] rounded-full' />
                        <div className='text-[1.5rem] text-whitePearl fonartoFont flex flex-col'>
                            <div className=''>
                                <span className='text-emerald '>Shoon</span>
                                <span className=''> & </span>
                                <span className='text-rod '>Myint</span>
                            </div>
                        </div>
                    </div>


                    <div className="text-whitePearl fonartoFont text-lg mt-10 w-[70%]">

                        We beautifully combine handcrafted floral arrangements with freshly baked cake made from the finest ingredients.

                    </div>


                </div>

                <div className='flex gap-16'>
                    <div>
                        <div className='text-rod font-bold'>Products</div>
                        <div className='text-white mt-4'>Features</div>
                        <div className='text-white'>Pricing</div>
                        <div className='text-white'> Integrations</div>
                        <div className='text-white'>Changelog</div>
                    </div>
                    <div>
                        <div className='text-rod font-bold'>Resources</div>
                        <div className='text-white mt-4'>Raw Materials</div>
                        <div className='text-white'>Tutorilas</div>
                        <div className='text-white'>Collections</div>
                    </div>
                    <div>
                        <div className='text-rod font-bold'>Shop</div>
                        <div className='text-white mt-4'>Aout us</div>
                        <div className='text-white'>Carrers</div>
                        <div className='text-white'>Contact</div>
                        <div className='text-white'>Partners</div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div className='text-rod text-[1.5rem] flex gap-6 mt-6 '>
                    <IoLogoFacebook />
                    <LuInstagram />
                    <FaXTwitter />

                </div>
                <div>
                    <div className='text-white'>
                        New Letters Subscription
                    </div>
                    <div className='flex gap-2 items-center mt-2'>
                        <input type="text" className='bg-rod/40 border-2 rounded-xl h-[40px] border-rod outline-0  px-2 w-[320px] ' />
                        <button className='bg-black/30 border-2 cursor-pointer border-black w-[40px] h-[40px] text-rod rounded-lg'>Go</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-between text-rod/50 mt-8'>
                <div>
                    ©2025 Shoon & Myint All right reserved.
                </div>
                <div className='flex gap-6'>
                    <div>Privacy & Policy</div>
                    <div>Terms of services</div>
                </div>
            </div>
        </div>
    )
}

export default Footer