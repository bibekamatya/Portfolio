import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons/faFileArrowDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface IconProps {
    icon: string;
    className?: string;
}

// Map of icon names to FontAwesome icons
const iconMap = {
    fileDownload: faFileArrowDown,
    download: faDownload,
    gitHub: faGithub,
    linkedIn: faLinkedin,
    react: faReact,
}

export default function Icon({ icon, className = "" }: IconProps) {
    // @ts-ignore
    const iconToRender = iconMap[icon];

    // Return the icon if it exists in the iconMap
    return iconToRender ? (
        <FontAwesomeIcon icon={iconToRender} className={className} />
    ) : null;
}
