import React from 'react'
import Logo from "./assets/Image/logo.jpg"
import { Link } from 'react-router-dom'
const Navbar = () => {
     const navItems=[
    {
      label:'Home',
      path:'/'
    },
    {
      label:'Services',
      path:'/services'
    },
    {
      label:'Products',
      path:'/products'
    },
    {
      label:'Contact Us',
      path:'/contact-us'
    },
    {
      label:'About Us',
      path:'/about-us'
    },

  ]
  return (
    <nav className='flex justify-between items-center px-8 py-2 fixed top-0 w-full blurr hover:bg-amber-50'>
          <div>
            <img src={Logo} alt="" className='w-[70px] h-[70px] rounded-full'/>
          </div>
          <div className='text-white italiana'>
            {
              navItems.map((nav)=> (
                  <Link to={nav.path} key={nav.path} className='px-4 py-1 '>{nav.label}</Link>
              ))
            }
          </div>
        </nav>
  )
}

export default Navbar