import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {

  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <img src={assets.header_bg_color} alt="" />
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>

        <a href='#top' className='text-2xl sm:text-2xl md:text-4xl font-medium font-outfit'>Mohan<span className='text-red-500'>.</span></a>

        <ul className={`gap-6 lg:gap-8 rounded-full items-center px-12 py-3 mt-1 hidden md:flex sm:text-[16px] font-ovo font-medium ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
          <li><a href='#top'>Home</a></li>
          <li><a href='#about'>About me</a></li>
          {/* <li><a href='#services'>Services</a></li> */}
          <li><a href='#work'>My Work</a></li>
          <li><a href='#contact'>Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>

          {/* <button>
            <img src={assets.moon_icon} className='w-6' alt="" />
          </button> */}

          <a href="#contact" className='hidden lg:flex font-ovo items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact <img className='w-3 h-3' src={assets.arrow_icon} alt="" /></a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <img src={assets.menu_black} className='w-6' alt="" />
          </button>
        </div>

        {/*----------------- Mobile Menu------------- */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 
    top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-ovo'>

          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <img src={assets.close_black} alt="" className='w-5 cursor-pointer' />
          </div>

          <li><a onClick={closeMenu} href='#top'>Home</a></li>
          <li><a onClick={closeMenu} href='#about'>About me</a></li>
          <li><a onClick={closeMenu} href='#services'>Services</a></li>
          <li><a onClick={closeMenu} href='#work'>My Work</a></li>
          <li><a onClick={closeMenu} href='#contact'>Contact me</a></li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar