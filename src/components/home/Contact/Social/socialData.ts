import type { FC, SVGProps } from "react";
import GitHubIcon from "../../../../assets/icons/github.svg?react";
import LinkedinIcon from "../../../../assets/icons/linkedin.svg?react";

export interface socialTypes {
  name: string;
  link: string;
  icon: FC<SVGProps<SVGSVGElement>>;
}

const socialData = [
  {
    name: "Github",
    link: "https://github.com/mohammadg2002",
    icon: GitHubIcon,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/mohammad-ghanim-6286b7294/",
    icon: LinkedinIcon,
  },
];

export default socialData;
