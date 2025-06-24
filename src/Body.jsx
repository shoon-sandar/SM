import React from 'react'
import s1 from "./assets/Image/services/service1/breadLoaf.jpg"
import s2 from "./assets/Image/services/service1/butter.webp"
import s3 from "./assets/Image/services/service1/freshBaguette.jpg"
import s4 from "./assets/Image/services/service1/mozzarella.webp"
const Body = () => {
  return (
    <div>
      <div className='border-l-4 border-l-rod text-[1.5rem] font-light pl-4  ml-4 mt-4'>
        Your Sweet Options
      </div>

      <div className='w-full p-8 flex justify-between gap-2 ' >
        <div className='transition-all duration-150 cursor-pointer  w-[400px] h-[350px] shadow-black/20 shadow-2xl bg-black/10 rounded-[45px]   hover:shadow-md'>

          <div className='flex items-center gap-2 pl-5 pt-2'>
            <div className='w-[6px] h-[6px] rounded-full bg-rod'>

            </div>
            <div className='font-light text-[1.2rem]'>
              Gourmet Essentials
            </div>

          </div>

          <div className='bg-black/20 w-full h-[75%] rounded-2xl mt-2 grid grid-cols-2 grid-rows-2 gap-2 p-2'>
            <img src={s1} alt="" className='w-full  h-full rounded-xl' />
            <img src={s2} alt="" className='w-full  h-full rounded-xl' />
            <img src={s3} alt="" className='w-full  h-full rounded-xl' />
            <img src={s4} alt="" className='w-full h-full rounded-xl' />

          </div>

          <button className='ml-20 mt-5 text-center  w-[200px] cursor-pointer h-[40px] border-2 border-rod px-6 py-1 rounded-full bg-cinnamon/80 text-white hover:bg-cinnamon/100 active:bg-cinnamon/50'>View Collection</button>

        </div>
      </div>



       <div className='w-full p-8 flex justify-between gap-2 ' >
        <div className='transition-all duration-150 cursor-pointer  w-[400px] h-[350px] shadow-black/20 shadow-2xl bg-black/10 rounded-[45px]   hover:shadow-md'>

          <div className='flex items-center gap-2 pl-5 pt-2'>
            <div className='w-[6px] h-[6px] rounded-full bg-rod'>

            </div>
            <div className='font-light text-[1.2rem]'>
              Gourmet Essentials
            </div>

          </div>

          <div className='bg-black/20 w-full h-[75%] rounded-2xl mt-2 grid grid-cols-2 grid-rows-2 gap-2 p-2'>
            <img src={s1} alt="" className='w-full  h-full rounded-xl' />
            <img src={s2} alt="" className='w-full  h-full rounded-xl' />
            <img src={s3} alt="" className='w-full  h-full rounded-xl' />
            <img src={s4} alt="" className='w-full h-full rounded-xl' />

          </div>

          <button className='ml-20 mt-5 text-center  w-[200px] cursor-pointer h-[40px] border-2 border-rod px-6 py-1 rounded-full bg-cinnamon/80 text-white hover:bg-cinnamon/100 active:bg-cinnamon/50'>View Collection</button>

        </div>
      </div>




       <div className='w-full p-8 flex justify-between gap-2 ' >
        <div className='transition-all duration-150 cursor-pointer  w-[400px] h-[350px] shadow-black/20 shadow-2xl bg-black/10 rounded-[45px]   hover:shadow-md'>

          <div className='flex items-center gap-2 pl-5 pt-2'>
            <div className='w-[6px] h-[6px] rounded-full bg-rod'>

            </div>
            <div className='font-light text-[1.2rem]'>
              Gourmet Essentials
            </div>

          </div>

          <div className='bg-black/20 w-full h-[75%] rounded-2xl mt-2 grid grid-cols-2 grid-rows-2 gap-2 p-2'>
            <img src={s1} alt="" className='w-full  h-full rounded-xl' />
            <img src={s2} alt="" className='w-full  h-full rounded-xl' />
            <img src={s3} alt="" className='w-full  h-full rounded-xl' />
            <img src={s4} alt="" className='w-full h-full rounded-xl' />

          </div>

          <button className='ml-20 mt-5 text-center  w-[200px] cursor-pointer h-[40px] border-2 border-rod px-6 py-1 rounded-full bg-cinnamon/80 text-white hover:bg-cinnamon/100 active:bg-cinnamon/50'>View Collection</button>

        </div>
      </div>




      <div className='w-screen h-screen flex justify-evenly'>
        <div>
             <img src={s1} alt="" className='size-70 rounded-3xl' />
        </div>
        <div> 
          <p className='w-30 h-3.5  text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus sit eveniet asperiores nobis officia perferendis,alias tempore doloremque fuga quisquam. Natus quo ad inventore repudiandae,fugiat molestiae nostrum ullam labore!
          </p>
        </div>

      </div>



    </div>
  )
}

export default Body
