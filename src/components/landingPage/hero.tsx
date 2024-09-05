import { Typewriter } from "react-simple-typewriter";
import myPhoto from "../../assets/my-photo.jpeg";
import SocialButtons from "../socialButton";
import { motion } from "framer-motion";

const textVariants = {
  hidden: (direction: any) => ({
    opacity: 0,
    x: direction === "left" ? -200 : direction === "right" ? 200 : 0,
    y: direction === "top" ? -200 : direction === "bottom" ? 200 : 0,
    scale: 0.8,
    rotate: direction === "rotate" ? 45 : 0,
    transition: {
      duration: 0.8, // Increased duration
      type: "spring",
      stiffness: 40, // Adjusted stiffness
      damping: 15, // Adjusted damping
    },
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.2, // Increased duration
      type: "spring",
      stiffness: 40, // Adjusted stiffness
      damping: 15, // Adjusted damping
    },
  },
};

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col md:gap-10 lg:gap-20 lg:h-[calc(100vh-64px)] h-full items-center">
      <motion.div
        className="flex-1 flex flex-col justify-center text-center md:text-left text-white h-full order-2 md:order-1 xl:max-w-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }} // Increased duration
      >
        <motion.h3
          custom="top"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }} // Adjusted delay
          className="md:text-4xl text-xl font-bold text-red-500/80 my-1"
        >
          Hom Narayan Amatya
        </motion.h3>
        <motion.div
          custom="bottom"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }} // Adjusted delay
          className="md:text-2xl md:mt-2 font-semibold text-themeColor"
        >
          <Typewriter
            words={["UI/UX Developer"]}
            loop={Infinity} // Loop indefinitely
            typeSpeed={100} // Typing speed in milliseconds
            deleteSpeed={50} // Deleting speed in milliseconds
            delaySpeed={1000} // Delay between typing and deleting
          />
        </motion.div>
        <motion.p
          custom="right"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }} // Adjusted delay
          className="mt-4 text-justify dark:text-gray-300 text-gray-700"
        >
          I'm a UI/UX Developer who creates engaging and user-friendly
          interfaces. I blend design and development skills to deliver seamless,
          intuitive experiences. Passionate about turning ideas into elegant
          solutions.
        </motion.p>
        <div className="md:hidden flex">
          <SocialButtons />
        </div>
        <div className="hidden md:flex">
          <SocialButtons />
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex-1 md:flex flex-col items-center justify-center order-1 md:order-2 lg:mt-0 mt-5 xl:max-w-md xl:ml-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.7 }} // Increased duration and delay
      >
        <div className="rounded-t-lg h-40 overflow-hidden md:hidden">
          <img
            className="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <motion.img
          src={myPhoto}
          alt="Hom Narayan Amatya"
          className="mx-auto md:w-full md:h-full -mt-16 w-32 h-32 relative rounded-full object-cover border-4 border-white shadow-xl transition-transform transform hover:scale-105 duration-300"
          initial={{ scale: 0.8, rotate: 10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }} // Increased duration
        />
      </motion.div>
    </div>
  );
};

export default Hero;
