import React from 'react'

const FeatureItems = ({ fitems }) => {
    return (
        <div className='w-full h-full p-8'>
            <div className='mb-5'>
                ⭐️ Best Seller Items
            </div>
            <div className='w-full flex justify-between'>
                {
                    fitems.map((item, index) => (
                        <div key={index} className=' w-[250px] h-[300px] shadow-lg shadow-black/30 '>

                            <img src={item.image} alt="" className='w-[250px] h-[250px] rounded-t-2xl' />
                            <div className='bg-white p-2  rounded-b-2xl'>
                                <div className=' rounded-b-2xl font-light'>
                                    {item.title}
                                </div>

                                <div className='flex justify-between items-center'>
                                    <div className='font-light text-black/50'>
                                        Rating
                                    </div>
                                    <div>
                                        ⭐️⭐️⭐️⭐️
                                    </div>
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