import React, { useState } from "react";
import "./SponsorBar.scss";

const bannerText = "about the collaboration between Petfinder and Purina";

export default function SponsorBar() {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = (e) => {
    e.preventDefault();
    setDropdown(!dropdown);
  };

  return (
    <>
      <div className="sponsor-banner">
        <div className="sponsor-banner-logo">
          <span className="sponsor-banner-logo-text">POWERED BY</span>
          <img
            className="purina-logo"
            src={require("../../Assets/purina.png")}
            alt="Purina Logo"
          />
        </div>
        <div className="sponsor-banner-desktop">
          <a href="https://www.petfinder.com/purina-cares-partnership/">
            Learn more
          </a>
          <span>{bannerText}</span>
        </div>
        <svg
          onClick={handleDropdown}
          id="sponsor-chevron"
          className={!dropdown ? "bannerHidden" : "bannerOpen"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </div>
      {dropdown && (
        <div className="sponsor-banner-dropdown-mobile">
          <a href="https://www.petfinder.com/purina-cares-partnership/">
            Learn more
          </a>
          <span>{bannerText}</span>
        </div>
      )}
    </>
  );
}
