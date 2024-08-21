import Icon from "./reusable/Icons";

const socialLinks = [
  { icon: "github", url: "https://github.com", title: "GitHub" },
  { icon: "gitlab", url: "https://gitlab.com", title: "GitLab" },
  { icon: "linkedIn", url: "https://www.linkedin.com", title: "LinkedIn" },
];

const SocialButtons = () => {
  return (
    <div className="flex gap-4 items-center mt-6">
      {socialLinks.map((link, index) => (
        <a
          href={link.url}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          title={link.title}
        >
          <button className="h-10 w-10 flex items-center justify-center bg-transparent border-2 border-skyBlue rounded-full p-2 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-sky-400 hover:to-cyan-600 hover:shadow-md hover:shadow-sky-500/50 group relative">
            <Icon
              icon={link.icon}
              className="h-5 w-5 text-skyBlue group-hover:text-gray-300 transition-all duration-300 transform hover:scale-110"
            />
          </button>
        </a>
      ))}
      <button className="px-3 py-2 bg-transparent rounded-full text-skyBlue font-semibold text-sm border border-skyBlue">
        <Icon
          icon="download"
          className="group-hover:text-gray-300 transition-all duration-300 transform hover:scale-110 mr-2"
        />
        Resume
      </button>
    </div>
  );
};

export default SocialButtons;
