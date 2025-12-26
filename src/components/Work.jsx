export default function Work() {
    const work = [
        {
            name: 'BNT Temples',
            icon: './assets/work-1.png',
            description: 'Full Stack',
            link: 'https://kds-temple-frontend.vercel.app',
        },
        {
            name: 'Easy Share',
            icon: './assets/work-2.png',
            description: 'Web-Application',
            link: 'https://easysharefiles.vercel.app',
        },
        {
            name: 'Vishwakarma',
            icon: './assets/work-3.png',
            description: 'Front-End',
            link: 'https://vishwakarma-temple-website.vercel.app',
        },
        {
            name: 'HireNext',
            icon: './assets/work-4.png',
            description: 'Exam for Hiring',
            link: 'https://hirenext-frontend-mohan.vercel.app',
        }
    ];
    return (
        <div id="work" className="w-full px-[16%] sm:px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I have experience building responsive websites using HTML, CSS, JavaScript, and React.js. I worked on creating clean designs, interactive components.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  my-10 gap-5 dark:text-black">
                {work.map((work) => (
                    <div key={work.name} className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group" style={{ backgroundImage: `url(${work.icon})` }}>
                        <a href={work.link} target="_blank" className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold">{work.name}</h2>
                                <p className="text-sm text-gray-700">{work.description}</p>
                            </div>
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src="./assets/send-icon.png" alt="" className="w-5" />
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            <a href="#" className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white">
                Show more
                <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
            </a>

        </div>
    )
}