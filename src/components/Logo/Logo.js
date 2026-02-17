import React from "react";
import LogoImage from "../../assets/logo.png";
import LogoStyles from "./logo.module.css";

const Logo = () => {
  return <img src={LogoImage} alt="QTify Logo" width={67} className={LogoStyles.logo} />;
};

export default Logo;