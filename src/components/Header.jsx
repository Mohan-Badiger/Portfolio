import {assets} from './assets.js'

export default function Header() {

    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <img src="./assets/profile_img.jpg" alt="" className="rounded-full w-32" />
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi! I'm Mohan Badiger
                <img src="./assets/hand-icon.png" alt="" className="w-6 mb-1" />
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">Full-Stack Developer..</h1>
            <p className="max-w-2xl mx-auto font-Ovo">BCA Student | Passionate about Full-Stack Development</p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact"
                    className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent">
                    contact me <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </a>

                <a href="./assets/Mohan_FullStack Resume.pdf" download
                    className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white">
                    my resume <img src="./assets/download-icon.png" alt="" className="w-4 dark:invert" />
                </a>
            </div>
            <div className={`flex gap-6 opacity-90 dark:hidden`}>
                <a href="https://github.com/Mohan-Badiger" target='_blank'><img src={assets.github} alt="" className='w-8 mt-3 hover:opacity-70' /></a>
                <a href="https://www.linkedin.com/in/mohan-badiger" target='_blank'><img src={assets.linkedin} alt="" className='w-8 mt-3 hover:opacity-70' /></a>
                <a href="https://www.youtube.com/@MohanBadiger250" target='_blank'><img src={assets.youtube} alt="" className='w-8 mt-3 hover:opacity-70' /></a>
                <a href="https://www.instagram.com/mohan_badiger250" target='_blank'><img src={assets.instagram} alt="" className='w-8 mt-3 hover:opacity-70 ' /></a>
            </div>

            <div className={`gap-6 opacity-90 hidden dark:flex`}>
                   <a href="https://github.com/Mohan-Badiger" target='_blank'><img src={assets.githubdark} alt="" className='w-8 mt-3 hover:opacity-70 ' /></a>
                <a href="https://www.linkedin.com/in/mohan-badiger" target='_blank'><img src={assets.linkedindark} alt="" className='w-8 mt-3 hover:opacity-70 ' /></a>
                <a href="https://www.youtube.com/@MohanBadiger250" target='_blank'><img src={assets.youtubedark} alt="" className='w-8 mt-3 hover:opacity-70 ' /></a>
                <a href="https://www.instagram.com/mohan_badiger250" target='_blank'><img src={assets.instagramdark} alt="" className='w-8 mt-3 hover:opacity-70 ' /></a>
            </div>
     
        </div>
    )
}