import { Typewriter } from "react-simple-typewriter";
import SocialButtons from "./reusable/socialButton";
import myPhoto from "../assets/my-photo.jpeg";

const Hero = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col md:gap-10 lg:gap-20 lg:h-[calc(100vh-64px)] h-full items-center">
        <div className="flex-1 flex flex-col justify-center text-center md:text-left text-white h-full order-2 md:order-1 xl:max-w-sm">
          <h3 className="md:text-4xl text-xl font-bold text-orange-500/80 my-1">
            Hom Narayan Amatya
          </h3>
          <div className="md:text-2xl md:mt-2 font-semibold text-themeColor">
            <Typewriter
              words={["UI/UX Developer"]}
              loop={Infinity} // Loop indefinitely
              typeSpeed={100} // Typing speed in milliseconds
              deleteSpeed={50} // Deleting speed in milliseconds
              delaySpeed={1000} // Delay between typing and deleting
            />
          </div>
          <div className="md:hidden flex">
            <SocialButtons />
          </div>
          <p className="mt-4 text-justify dark:text-gray-300 text-gray-700">
            I'm a UI/UX Developer who creates engaging and user-friendly
            interfaces. I blend design and development skills to deliver
            seamless, intuitive experiences. Passionate about turning ideas into
            elegant solutions.
          </p>
          <div className="hidden md:flex">
            <SocialButtons />
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 md:flex flex-col items-center justify-center order-1 md:order-2 lg:mt-0 mt-5 xl:max-w-md xl:ml-auto">
          <div className="rounded-t-lg h-40 overflow-hidden md:hidden">
            <img
              className="object-cover object-top w-full"
              src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Mountain"
            />
          </div>
          <img
            src={myPhoto}
            alt="Hom Narayan Amatya"
            className="mx-auto md:w-full md:h-full -mt-16 w-32 h-32 relative rounded-full object-cover border-4 border-white shadow-xl transition-transform transform hover:scale-105 duration-300"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
