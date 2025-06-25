import React from 'react'
import Logo from "./assets/Image/logo.jpg"
import { Link } from 'react-router-dom'
const Navbar = () => {
  const navItems = [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'Services',
      path: '/services'
    },
    {
      label: 'Products',
      path: '/products'
    },
    {
      label: 'Contact Us',
      path: '/contact-us'
    },
    {
      label: 'About Us',
      path: '/about-us'
    },

  ]
  return (
    <nav className='flex justify-between items-center px-8 py-2 fixed top-0 w-full blurr z-50'>
      <div className='flex items-center gap-2'>
        <img src={Logo} alt="" className='w-[60px] h-[60px] rounded-full' />
        <div className='text-[1.5rem] text-whitePearl fonartoFont flex flex-col'>
          <div className=''>
            <span className='text-emerald '>S</span>
            <span className=''> & </span>
            <span className='text-rod  '>M</span>
          </div>
          <span className='text-[0.8rem] '>Floral & Cake</span>
        </div>
      </div>
      <div className='text-white italiana'>
        {
          navItems.map((nav) => (
            <Link to={nav.path} key={nav.path} className='px-4 py-1 hover:bg-amber-50 rounded-2xl hover:text-black active:bg-amber-50/50'>{nav.label}</Link>
          ))
        }
      </div>
    </nav >
  )
}

export default Navbar