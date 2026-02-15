import { Link } from "react-router-dom";
import type { socialTypes } from "./socialData";
import "./Social.css";

interface socialProps {
  data: socialTypes;
}

const Social = ({ data }: socialProps) => {
  return (
    <Link
      to={data.link}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-sec__socials-link"
    >
      <data.icon />
    </Link>
  );
};

export default Social;
