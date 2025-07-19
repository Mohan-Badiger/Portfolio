import { assets } from '../assets/assets'

const Header = () => {

  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-2 sm:gap-3.5 sm:leading-8 overflow-x-hidden'>
        <div><img src={assets.profile} alt="" className='rounded-full w-36' /></div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>Hi! I'am Mohan Badiger <img src={assets.hand_icon} alt="" className='w-6' /></h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>Frontend web developer.</h1>
        <p className='max-w-2xl mx-auto font-ovo'>BCA Student | Passionate about Full-Stack Development & Problem-Solving</p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>contact me <img src={assets.right_arrow_white} alt="" className='w-4'/></a>
            <a href="/Mohan_Resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume <img src={assets.download_icon} alt="" className='w-4'/></a>
        </div>

        <div className={`flex gap-6 opacity-90`}>
          <a href="https://github.com/Mohan-Badiger" target='_blank'><img src={assets.github} alt="" className='w-8 mt-3 hover:opacity-70'/></a>
          <a href="https://www.linkedin.com/in/mohan-badiger" target='_blank'><img src={assets.linkedin} alt="" className='w-8 mt-3 hover:opacity-70'/></a>
          <a href="https://www.youtube.com/@MohanBadiger250" target='_blank'><img src={assets.youtube} alt="" className='w-8 mt-3 hover:opacity-70'/></a>
          <a href="https://www.instagram.com/mohan_badiger250" target='_blank'><img src={assets.instagram} alt="" className='w-8 mt-3 hover:opacity-70'/></a>
        </div>
    </div>
  )
}

export default Header