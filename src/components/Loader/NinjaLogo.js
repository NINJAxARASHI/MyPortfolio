import React from "react";
import arashiLogo from "./arashi_logo.svg";
import "./NinjaLogo.css";

const NinjaLogo = () => {
  return (
    <div className="splash-container">
      <div className="splash-content">
        <img src={arashiLogo} alt="Arashi Logo" className="splash-logo" />
        <div className="text-container">
          <h1 className="splash-text arashi-text">ARASHI SAMA</h1>
          <h2 className="splash-text portfolio-text">PORTFOLIO</h2>
        </div>
      </div>
    </div>
  );
};

export default NinjaLogo;
