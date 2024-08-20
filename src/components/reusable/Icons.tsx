import {
  faCss3Alt,
  faJs,
  faGitAlt,
  faBootstrap,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact';
import {
  faClock,
  faCogs,
  faLightbulb,
  faNetworkWired,
  faPalette,
  faPeopleArrows,
  faTerminal,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons/faFileArrowDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProps } from '../../interfaces';
import {
  antDLogo,
  muiLogo,
  postmanLogo,
  tailwindLogo,
  graphqlLogo,
  vercelLogo,
  jestLogo,
  eslintLogo,
  tsLogo,
  reduxLogo,
} from '../logos/logos';

// Map of icon names to FontAwesome icons
const iconMap = {
  fileDownload: faFileArrowDown,
  download: faDownload,
  gitHub: faGithub,
  linkedIn: faLinkedin,
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
  mui: muiLogo,
  tailwind: tailwindLogo,
  antd: antDLogo,
  postman: postmanLogo,
  graphql: graphqlLogo,
  vercel: vercelLogo,
  jest: jestLogo,
  eslint: eslintLogo,
  ts: tsLogo,
  redux: reduxLogo,
};

// export default function Icon({ icon, className = '' }: IconProps) {
//   // @ts-ignore
//   const iconToRender = iconMap[icon];

//   // Return the icon if it exists in the iconMap
//   return iconToRender ? (
//     <FontAwesomeIcon icon={iconToRender} className={className} />
//   ) : null;
// }

export default function Icon({ icon, className = '' }: IconProps) {
  // @ts-ignore
  const iconToRender = iconMap[icon];

  // If the icon is a FontAwesome icon
  if (
    typeof iconToRender === 'object' &&
    iconToRender.prefix &&
    iconToRender.iconName
  ) {
    return <FontAwesomeIcon icon={iconToRender} className={className} />;
  }

  // If the icon is a React component like muiLogo
  if (typeof iconToRender === 'function') {
    const CustomIcon = iconToRender;
    return <CustomIcon className={className} />;
  }

  // Return null if the icon is not found
  return null;
}
