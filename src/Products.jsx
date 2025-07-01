import React from 'react'
import Navbar from './Navbar'
import NewArrivals from './NewArrivals.jsx'
import { arr, sale, today } from './constant.js'
const Products = () => {

  return (
    <>
      <Navbar />
      <div className='mt-18 w-full flex'>
        <div className='w-1/4 p-4'>
          <div className='bg-rod/80 p-4 Verticaldiv rounded-2xl h-[500px] shadow-xl shadow-black/20'>
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
                    <img src={item.img} alt="" className='w-[50px] h-[50px] rounded-full shadow-xl shadow-black/20' />
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
            <div className='bg-img w-full h-[320px] mt-10 shadow-xl shadow-black/20'>

            </div>
            <div className='border-b-[1px] border-black text-2xl py-4'>Sale Off</div>
            <div className='flex flex-col gap-8 mt-4'>
              {
                sale.map((item, index) => (
                  <div key={index}
                    className='flex gap-2 w-full items-center'>
                    <img src={item.img} alt="" className='w-[50px] h-[50px] rounded-full shadow-xl shadow-black/20' />
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
          <div className='bg-img1 h-[500px] rounded-2xl shadow-lg shadow-black/10'></div>
          <div className='h-[200px] mt-10 flex gap-4'>
            <div className='w-1/3 bg-img2 rounded-xl'>
              <div className='bg-black/30 h-[40px] mt-40 shadow-xl shadow-black/20 rounded-b-xl'>
                <ul className='list-disc flex flex-col items-center gap-2 justify-center h-full'>
                  <li className='text-white'>OFFICE BASIC</li>
                </ul>
              </div>


            </div>
            <div className='w-1/3 bg-img3 rounded-xl'>
              <div className='bg-black/30 h-[40px] mt-40 shadow-lg shadow-black/10 rounded-b-xl'>
                <ul className='list-disc flex flex-col items-center gap-2 justify-center h-full'>
                  <li className='text-white'>NOTEBOOK</li>
                </ul>
              </div>
            </div>
            <div className='w-1/3 bg-img4 rounded-xl'>
              <div className='bg-black/30 h-[40px] mt-40 shadow-lg shadow-black/10 rounded-b-xl'>
                <ul className='list-disc flex flex-col items-center gap-2 justify-center h-full'>
                  <li className='text-white'>STICKY NOTES</li>
                </ul>
              </div>
            </div>

          </div>
          <div className=' border-2 border-neutral-400 mt-10'>
            <div className='flex justify-center text-center -mt-6  '>
              <div className=' h-[40px] w-fit text-[1.5rem] font-light px-8 text-center bg-white'>
                Today Deals
              </div>
            </div>
            <div className='grid grid-cols-4 p-6 grid-rows-1 gap-6'>
              {
                today.map((item, index) => (
                  <div
                    key={index}
                    className='w-full h-full '
                  >
                    <div className='bg-rod p-2 text-center'>
                      <span className='text-black/60 pr-2'>valid until</span>
                      <span className='text-2xl font-light'>{item.time}</span>
                    </div>
                    <img src={item.image} alt="" className='w-[200px] h-[200px]  rounded-full m-auto mt-2 shadow-xl shadow-black/20' />
                    <div className='p-2 bg-black/10 mt-2'>
                      <div className='capitalize font-light text-xl'>{item.title}</div>
                      <div className='flex items-baseline gap-2'>
                        <div className='line-through text-md text-black/60'>
                          {item.originalPrice}
                        </div>
                        <div className='text-xl font-light'>
                          {item.discountPrice}
                        </div>
                      </div>
                      <button
                        className={` px-2 p-1 mt-2 w-full cursor-pointer active:opacity-30`}
                        style={{ backgroundColor: item.color }}
                      >Order Now!</button>
                    </div>

                  </div>
                ))
              }
            </div>
          </div>
          <NewArrivals
            newArr={today}
          />
        </div>
      </div>
      <div className='h-[30vh] w-full'></div>

    </>

  )
}

export default Products
