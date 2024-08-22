import { Typewriter } from "react-simple-typewriter";
import SocialButtons from "./socialButton";

const Hero = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col gap-20 mt-12 md:h-[calc(100vh-64px)] h-full">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center text-white h-full">
          <h3 className="text-4xl font-bold">Hi, I am</h3>
          <h3 className="text-4xl font-bold text-orange-500/80 my-1">
            Hom Narayan Amatya
          </h3>
          <div className="text-2xl mt-2 font-semibold">
            <span>I am a </span>
            <span className="text-skyBlue">
              <Typewriter
                words={["UI/UX Developer"]}
                loop={Infinity} // Loop indefinitely
                // cursor
                typeSpeed={100} // Typing speed in milliseconds
                deleteSpeed={50} // Deleting speed in milliseconds
                delaySpeed={1000} // Delay between typing and deleting
              />
            </span>
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
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/417544838_7281816731912373_4343179332867262888_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=9z2Z7mrUws8Q7kNvgG3iMbO&_nc_ht=scontent.fktm3-1.fna&oh=00_AYBTpoL7FTUwQMoXlcPCyMdCufqdpaPrrQtF_WATu8cESQ&oe=66C7A699"
            alt="Hom Narayan Amatya"
            className="rounded-full w-96 h-96"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
