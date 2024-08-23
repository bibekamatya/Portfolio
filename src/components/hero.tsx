import { Typewriter } from "react-simple-typewriter";
import SocialButtons from "./reusable/socialButton";
import myPhoto from "../assets/my-photo.jpeg";

const Hero = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col gap-10 lg:gap-20 mt-16 md:h-[calc(100vh-64px)] h-full">
        <div className="flex-1 flex flex-col justify-center text-white h-full order-2 lg:order-1">
          <h3 className="md:text-4xl text-3xl font-bold text-orange-500/80 my-1">
            Hom Narayan Amatya
          </h3>
          <div className="md:text-2xl text-xl mt-2 font-semibold text-skyBlue">
            <Typewriter
              words={["UI/UX Developer"]}
              loop={Infinity} // Loop indefinitely
              typeSpeed={100} // Typing speed in milliseconds
              deleteSpeed={50} // Deleting speed in milliseconds
              delaySpeed={1000} // Delay between typing and deleting
            />
          </div>
          <p className="mt-4 text-justify text-gray-300">
            I'm a UI/UX Developer who creates engaging and user-friendly
            interfaces. I blend design and development skills to deliver
            seamless, intuitive experiences. Passionate about turning ideas into
            elegant solutions.
          </p>
          <SocialButtons />
        </div>

        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center order-1 lg:order-2 lg:mt-0 mt-8">
          <img
            src={myPhoto}
            alt="Hom Narayan Amatya"
            className="lg:rounded-full rounded-md object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
