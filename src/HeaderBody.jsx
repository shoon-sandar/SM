import React from 'react'

const HeaderBody = () => {
  return (
    <div className='italiana pl-12 pt-32'>
      <div className='italiana text-white  text-4xl border-l-4 border-rod pl-4'>
        Where Flowers Meet Flour.
      </div>
      <div className='text-white text-2xl w-[22%] pt-6'>
        Savor the scent, taste the petals and let every bite bloom with beauty.
      </div>
      <div className='text-white/60 text-lg pt-6'>
        Step into a world where artisan baking is infused with the delicate charm of fresh bloom.
      </div>
      <div className='text-white text-lg flex gap-4 pt-4'>
        <div>
          Visit us today. Taste the differece nature makes.
        </div>
        <button className='border-2 border-rod px-6 py-1 rounded-full bg-rod/20 hover:bg-blacks'>Go</button>
      </div>
    </div>
  )
}

export default HeaderBody
