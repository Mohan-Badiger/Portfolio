import { motion } from 'framer-motion'

export default function Services() {
    const services = [
        {
            name: 'Web design',
            icon: './assets/web-icon.png',
            description: 'Web development is the process of building, programming...',
            link: '',
        },
        {
            name: 'Mobile app',
            icon: './assets/mobile-icon.png',
            description: 'Web development is the process of building, programming...',
            link: '',
        },
        {
            name: 'UI/ UX design',
            icon: './assets/ui-icon.png',
            description: 'Web development is the process of building, programming...',
            link: '',
        },
        {
            name: 'Graphics design',
            icon: './assets/graphics-icon.png',
            description: 'Web development is the process of building, programming...',
            link: '',
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            id="services"
            className="w-full px-[12%] py-10 scroll-mt-20"
        >
            <motion.h4 variants={itemVariants} className="text-center mb-2 text-lg font-Ovo">What i offer</motion.h4>
            <motion.h2 variants={itemVariants} className="text-center text-5xl font-Ovo">My services</motion.h2>
            <motion.p variants={itemVariants} className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I am a frontend developer with experience in building high-quality web applications using modern technologies.
            </motion.p>

            <motion.div
                variants={containerVariants}
                className="grid grid-cols-auto gap-6 my-10"
            >
                {services.map((service) => (
                    <motion.div
                        key={service.name}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 cursor-pointer hover:bg-lightHover hover:shadow-lg duration-500 dark:hover:bg-darkHover dark:hover:shadow-white/20"
                    >
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        <a href={service.link} className="flex items-center gap-2 text-sm mt-5">
                            Read more <img src="./assets/right-arrow.png" alt="" className="w-4" />
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}