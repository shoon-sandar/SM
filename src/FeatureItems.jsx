import React from 'react'

const FeatureItems = ({fitems}) => {
  return (
    <div className='w-full h-full p-8'>
        <div className='mb-5'>
            ⭐️ Best Seller Items
        </div>
    <div className='w-full flex justify-between'>
        {
            fitems.map((item,index)=>(
                <div key={index} className='bg-black w-[250px] h-[300px]'>

                    <img src={item.image} alt="" className='w-[250px] h-[250px] rounded-t-2xl' />
                    <div className='bg-white p-2'>
                    <div className=' rounded-b-2xl shadow-lg shadow-black/30 '>
                        {item.title}
                    </div>
                    <div>
                       ⭐️ 
                    </div>
                    </div>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default FeatureItems