import cv from "../assets/CV-Hom Narayan Amatya.pdf";
import Icon from "./Icons";

const socialLinks = [
  { icon: "github", url: "https://github.com/bibekamatya", title: "GitHub" },
  { icon: "gitlab", url: "https://gitlab.com/bamatya", title: "GitLab" },
  {
    icon: "linkedIn",
    url: "https://www.linkedin.com/in/bibek-amatya-50006815a/",
    title: "LinkedIn",
  },
];

const SocialButtons = () => {
  return (
    <div className="flex gap-4 items-center mt-6 mx-auto md:mx-0">
      {socialLinks.map((link, index) => (
        <a
          href={link.url}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          title={link.title}
        >
          <button className="h-10 w-10 flex items-center justify-center bg-transparent border-2 border-themeColor rounded-full p-2 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-sky-400 hover:to-cyan-600 hover:shadow-md hover:shadow-sky-500/50 group relative">
            <Icon
              icon={link.icon}
              className="h-5 w-5 text-themeColor group-hover:text-gray-300 transition-all duration-300 transform hover:scale-110"
            />
          </button>
        </a>
      ))}
      <a
        href={cv}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-2 bg-transparent rounded-full transition-all duration-300 transform text-themeColor hover:text-gray-300 font-semibold text-sm border border-themeColor  hover:bg-gradient-to-r hover:from-sky-400 hover:to-cyan-600 hover:shadow-md hover:shadow-sky-500/50"
      >
        <Icon icon="download" className="mr-2" />
        Resume
      </a>
    </div>
  );
};

export default SocialButtons;
