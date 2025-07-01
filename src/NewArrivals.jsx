import React from 'react';
import { TiStarOutline } from "react-icons/ti";
const NewArrivals = ({ newArr }) => {
  return (
    <div className='mt-10'>
      <div className='text-2xl font-light border-l-4 border-black pl-2'>
        New Arrivals
      </div>
      <div className='grid grid-cols-4 p-6 grid-rows-1 gap-6'>
        {
          newArr.map((item, index) => (
            <div
              key={index}
              className='w-full h-full '
            >

              <img src={item.image} alt="" className='w-full h-[250px]   m-auto mt-2 shadow-xl shadow-black/20' />
              <div className='  mt-2'>
                <div className='capitalize font-light text-xl'>{item.title}</div>
                <div className='flex items-items-center justify-between '>
                  <div className=' text-md text-black/60'>
                    {item.originalPrice}
                  </div>
                  <div className='flex '>
                    {
                      Array.from({ length: item.rating }, (_, i) =>
                        <TiStarOutline className='text-black/30 text-lg' />
                      )
                    }
                  </div>
                </div>

              </div>

            </div>
          ))
        }
      </div>
    </div>
  );
}

export default NewArrivals;
