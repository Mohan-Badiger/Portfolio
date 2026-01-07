export default function About() {
  const tools = [
    { name: 'VS Code', icon: './assets/vscode.png' },
    { name: 'React', icon: './assets/react.png' },
    { name: 'JavaScript', icon: './assets/javascript.png' },
    { name: 'Node.js', icon: './assets/nodejs.png' },
    { name: 'MongoDB', icon: './assets/mongodb.png' },
    { name: 'Figma', icon: './assets/figma.png' },
    { name: 'Git', icon: './assets/git.png' },
    { name: 'AWS EC2', icon: './assets/EC2.png' },
    { name: 'Socket.IO', icon: './assets/socket.png' },
  ]

  const data = [
    {
      name: 'Languages',
      icon1: './assets/code-icon.png',
      icon2: './assets/code-icon-dark.png',
      description: 'HTML, CSS, JavaScript, React.js, Next.js',
    },
    {
      name: 'Education',
      icon1: './assets/edu-icon.png',
      icon2: './assets/edu-icon-dark.png',
      description: 'Bachelor of Computer Applications (BCA)',
    },
    {
      name: 'Projects',
      icon1: './assets/project-icon.png',
      icon2: './assets/project-icon-dark.png',
      description: 'Built multiple real-world web development projects',
    },
  ]

  return (
    <section
      id="about"
      aria-label="About Mohan Badiger"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* ✅ SEO-only invisible heading */}
      <h2 className="sr-only">
        About Mohan Badiger – Full Stack MERN Developer
      </h2>

      {/* Existing visible headings (unchanged) */}
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h3 className="text-center text-5xl font-Ovo">About me</h3>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-w-max mx-auto relative">
          <img
            src="./assets/user_image.jpg"
            alt="Mohan Badiger developer profile image"
            className="w-64 sm:w-80 rounded-3xl max-w-none"
          />
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I am Mohan Badiger, a passionate Frontend Developer with strong
            knowledge of HTML, CSS, JavaScript, and React.js. I enjoy building
            responsive, user-friendly web applications. As a BCA graduate and
            fresher, I am eager to grow my skills and contribute to real-world
            Full Stack and MERN development projects.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {data.map((item) => (
              <li
                key={item.name}
                className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50"
              >
                <img
                  src={item.icon1}
                  alt={`${item.name} icon`}
                  className="w-7 mt-3 dark:hidden"
                />
                <img
                  src={item.icon2}
                  alt={`${item.name} icon`}
                  className="w-7 mt-3 hidden dark:block"
                />
                <h4 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {item.name}
                </h4>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
            Tools I Use
          </h4>

          <ul className="grid grid-cols-5 md:flex items-center gap-3 sm:gap-5">
            {tools.map((tool) => (
              <li
                key={tool.name}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <img
                  src={tool.icon}
                  alt={`${tool.name} development tool`}
                  className="w-5 sm:w-7"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
