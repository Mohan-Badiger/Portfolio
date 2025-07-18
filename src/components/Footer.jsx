import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <a href='#top' className='text-2xl sm:text-2xl md:text-4xl font-medium font-outfit mb-2'>Mohan Badiger<span className='text-red-500'>.</span></a>
            
            <div className='w-max flex items-center gap-2 mx-auto'>
                <img src={assets.mail_icon} alt="" className='w-6'/>
                 mohanbadiger250@gmail.com               
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
          <p>&copy; 2025 Mohan Badiger. All rights reserved.</p>
          <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/Mohan-Badiger">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/mohan-badiger/">LinkedIn</a></li>
            <li><a target='_blank' href="https://www.youtube.com/@MohanBadiger250">YouTube</a></li>
          </ul>
        </div>

    </div>
  )
}

export default Footer