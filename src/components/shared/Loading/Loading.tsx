import LogoIcon from "../../../assets/icons/develop.svg?react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <LogoIcon className="loading__logo" />
      <div className="loading__spinner" />
    </div>
  );
};

export default Loading;
