import {
  faCss3Alt,
  faJs,
  faGitAlt,
  faBootstrap,
  faNodeJs,
  faLinkedinIn,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import {
  faCalendarAlt,
  faClock,
  faCogs,
  faGraduationCap,
  faLightbulb,
  faNetworkWired,
  faPalette,
  faPeopleArrows,
  faSchool,
  faTerminal,
  faToolbox,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons/faFileArrowDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProps } from "../../interfaces";
import Logo from "../logos/logos";
import { faComputer } from "@fortawesome/free-solid-svg-icons/faComputer";

// Map of icon names to FontAwesome icons
const iconMap = {
  fileDownload: faFileArrowDown,
  download: faDownload,
  github: faGithub,
  gitlab: faGitlab,
  linkedIn: faLinkedinIn,
  react: faReact,
  html: faHtml5,
  css: faCss3Alt,
  js: faJs,
  git: faGitAlt,
  bootstrap: faBootstrap,
  nodejs: faNodeJs,
  palette: faPalette,
  toolbox: faToolbox,
  networking: faNetworkWired,
  bulb: faLightbulb,
  peopleArrow: faPeopleArrows,
  clock: faClock,
  code: faTerminal,
  setting: faCogs,
  computer: faComputer,
  calendar: faCalendarAlt,
  graduationCap: faGraduationCap,
  school: faSchool,
  university: faUniversity,
  mui: "mui",
  tailwind: "tailwind",
  antd: "antd",
  postman: "postman",
  graphql: "graphql",
  vercel: "vercel",
  jest: "jest",
  eslint: "eslint",
  ts: "ts",
  redux: "redux",
};

export default function Icon({ icon, className = "" }: IconProps) {
  // @ts-ignore
  const iconToRender = iconMap[icon];

  // If the icon is a FontAwesome icon
  if (iconToRender && typeof iconToRender !== "string") {
    return <FontAwesomeIcon icon={iconToRender} className={className} />;
  }

  // If the icon is a custom logo
  if (typeof iconToRender === "string") {
    return <Logo name={iconToRender} />;
  }

  // Return null if the icon is not found
  return null;
}
