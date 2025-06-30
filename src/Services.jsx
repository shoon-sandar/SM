import React from 'react'
import Navbar from './Navbar'
import a1 from './assets/Image/serviceImages/bdCake.jpg'
import a2 from './assets/Image/serviceImages/cakeAndflower.webp'
import a3 from './assets/Image/serviceImages/cakeGift.jpg'
import a4 from './assets/Image/serviceImages/custommug.webp'
import a5 from './assets/Image/serviceImages/giftPackaginService.jpg'
import Footer from './Footer.jsx'
const Services = () => {
    const servicesArr = [
        {
            title1: "Custom Birthday Cake Service",
            title2: "🎂Celebrate Your Day, You Way!",
            title3: "Make Birthdays unforgettable with our handcrafted custom cakes - designed to match your style, theme, and favorite flavors. Whether it's elegant, playful, or wildly unique, we bake every layer with love and decorate every detail to perfection.",
            title4: "✨ Pre-order your dream cake today!",
            title5: "📍S & M - Where Sweet Moments Begin.",
            image: a1
        },
        {
            title1: "Custom Birthday Cake Service",
            title2: "🎂Celebrate Your Day, You Way!",
            title3: "Make Birthdays unforgettable with our handcrafted custom cakes - designed to match your style, theme, and favorite flavors. Whether it's elegant, playful, or wildly unique, we bake every layer with love and decorate every detail to perfection.",
            title4: "✨ Pre-order your dream cake today!",
            title5: "📍S & M - Where Sweet Moments Begin.",
            image: a2
        },
        {
            title1: "Custom Birthday Cake Service",
            title2: "🎂Celebrate Your Day, You Way!",
            title3: "Make Birthdays unforgettable with our handcrafted custom cakes - designed to match your style, theme, and favorite flavors. Whether it's elegant, playful, or wildly unique, we bake every layer with love and decorate every detail to perfection.",
            title4: "✨ Pre-order your dream cake today!",
            title5: "📍S & M - Where Sweet Moments Begin.",
            image: a3
        },
        {
            title1: "Custom Birthday Cake Service",
            title2: "🎂Celebrate Your Day, You Way!",
            title3: "Make Birthdays unforgettable with our handcrafted custom cakes - designed to match your style, theme, and favorite flavors. Whether it's elegant, playful, or wildly unique, we bake every layer with love and decorate every detail to perfection.",
            title4: "✨ Pre-order your dream cake today!",
            title5: "📍S & M - Where Sweet Moments Begin.",
            image: a4
        },
        {
            title1: "Custom Birthday Cake Service",
            title2: "🎂Celebrate Your Day, You Way!",
            title3: "Make Birthdays unforgettable with our handcrafted custom cakes - designed to match your style, theme, and favorite flavors. Whether it's elegant, playful, or wildly unique, we bake every layer with love and decorate every detail to perfection.",
            title4: "✨ Pre-order your dream cake today!",
            title5: "📍S & M - Where Sweet Moments Begin.",
            image: a5
        },
    ]
    return (
        <>
            <Navbar />
            <div className='mt-20'>
                {
                    servicesArr.map((service, index) => (
                        <div className={`w-full flex items-center gap-30 justify-center p-10 ${index % 2 === 0 ? "bg-slate-200 flex-row-reverse" : ""} `}>
                            <div className='relative'>
                                <div className='flex text-white gap-2 items-center absolute -top-[25px]'>
                                    <div className='rounded-full bg-[#7c8e67]/70   w-[50px] h-[50px] flex items-center justify-center'>{
                                        "0" + (index + 1)
                                    }</div>
                                    <div className='bg-[#7c8e67]/70 rounded-2xl  px-2 py-1'>{service.title1}</div>
                                </div>
                                <img src={service.image} alt="" className='w-[300px] h-[300px] rounded-3xl' />
                            </div>

                            <div className='w-[50%] flex flex-col  gap-6 '>
                                <div className='text-2xl '>
                                    {service.title2}
                                </div>
                                <div className='text-black/50 text-justify mt-4'>
                                    {
                                        service.title3
                                    }
                                </div>


                                <div >{service.title4}</div>
                                <div>{service.title5}</div>
                                <button className='rounded-2xl bg-[#7c8e67] p-2 text-white w-[200px] cursor-pointer'>Order Now</button>

                            </div>

                        </div>


                    ))
                }
            </div>

            <Footer />

        </>

    )
}

export default Services
