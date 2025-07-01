import React from 'react'
import Navbar from './Navbar'

import { arr, sale } from './constant.js'
const Products = () => {

    return (
        <>
            <Navbar />
            <div className='mt-18 w-full flex'>
                <div className='w-1/4 p-4'>
                    <div className='bg-rod/80 p-4 Verticaldiv rounded-2xl h-[500px]'>
                        <div className='text-2xl'>Vertical Menu</div>
                        <ul className='list-disc p-4 gap-2 flex flex-col text-black/70'>
                            <li>Cake</li>
                            <li>Strawberry Paradise Cake</li>
                            <li>Mango Cream Cake</li>
                            <li>Oreo Salted Cream Cake</li>
                            <li>White Grape Cream Cake</li>
                            <li>LV Bear Cake</li>
                            <li>Taro Lava Cake</li>
                            <li>Unicorn Cake</li>
                            <li>Tiramisu Cake</li>
                            <li>Pineapple Cake</li>
                            <li>Mix Fruit Cake</li>
                            <li>Chocolate Cake</li>
                            <li>Cheese Cake</li>
                        </ul>
                    </div>
                    <div className='FeatureProductDiv '>
                        <div className='border-b-[1px] border-black text-2xl py-4'>Features Products</div>
                        <div className='flex flex-col gap-8 mt-4'>
                            {
                                arr.map((item, index) => (
                                    <div key={index}
                                        className='flex gap-2 w-full items-center'>
                                        <img src={item.img} alt="" className='w-[50px] h-[50px] rounded-full ' />
                                        <div className='border-b-[1px] border-black/30 w-full flex justify-between pb-2'>
                                            <div className='flex flex-col gap-2' >
                                                <div>{item.name}</div>
                                                <div>{item.price}</div>
                                            </div>
                                            <button className='text-black/50'>Order</button>
                                        </div>


                                    </div>

                                ))
                            }
                        </div>
                        <div className='bg-img w-full h-[300px] mt-10'>

                        </div>
                        <div className='border-b-[1px] border-black text-2xl py-4'>Sale Off</div>
                        <div className='flex flex-col gap-8 mt-4'>
                            {
                                sale.map((item, index) => (
                                    <div key={index}
                                        className='flex gap-2 w-full items-center'>
                                        <img src={item.img} alt="" className='w-[50px] h-[50px] rounded-full ' />
                                        <div className='border-b-[1px] border-black/30 w-full flex justify-between pb-2'>
                                            <div className='flex flex-col gap-2' >
                                                <div>{item.name}</div>
                                                <div>{item.price}</div>
                                            </div>
                                            <button className='text-black/50'>Order</button>
                                        </div>


                                    </div>

                                ))
                            }
                        </div>
                    </div>

                </div>
                <div className='w-3/4 p-4 '>
                    <div className='bg-img1 h-[500px] rounded-2xl'></div>
                    <div className='h-[200px] mt-10 flex gap-4'>
                        <div className='w-1/3 bg-img2'>
                            <div className='bg-black/30 h-[40px] mt-40 '>
                                <ul className='list-disc flex flex-col items-center gap-2 justify-center h-full'>
                                    <li className='text-white'>NOTEBOOK</li>
                                </ul>
                            </div>


                        </div>
                        <div className='w-1/3 bg-img3'>
                            <div className='bg-black/30 h-[40px] mt-40 '>
                                <ul className='list-disc flex flex-col items-center gap-2 justify-center h-full'>
                                    <li className='text-white'>NOTEBOOK</li>
                                </ul>
                            </div>
                        </div>
                        <div className='w-1/3 bg-img4'>
                            <div className='bg-black/30 h-[40px] mt-40 '>
                                <ul className='list-disc flex flex-col items-center gap-2 justify-center h-full'>
                                    <li className='text-white'>NOTEBOOK</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className='bg-amber-50 h-[400px] border-2 mt-10 '>
                        <div className='flex justify-center text-center -mt-4 bg-white '>
                            <div className=' h-[40px] text-black '>
                                Today Deals
                            </div>
                        </div>





                    </div>
                </div>
            </div>
            <div className='h-[30vh] w-full'></div>

        </>

    )
}

export default Products