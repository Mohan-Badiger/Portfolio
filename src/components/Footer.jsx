export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                                     <p className='text-2xl sm:text-2xl md:text-4xl font-medium font-outfit dark:hidden'>Mohan<span className='text-purple-500'>.</span></p>
                     <p className='text-2xl sm:text-2xl md:text-4xl font-medium font-outfit hidden dark:block'>Mohan<span className='text-purple-500'>.</span></p>


                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="mailto:contact@prebuiltui.com">mohanbadiger250@gmail.com</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© {new Date().getFullYear()} <a href="https://prebuiltui.com">Mohan Badiger</a>. All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a target='_blank' href="https://github.com/Mohan-Badiger">GitHub</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/mohan-badiger">LinkedIn</a></li>
                    <li><a target='_blank' href="">Twitter</a></li>
                </ul>
            </div>
        </div>
    )
}