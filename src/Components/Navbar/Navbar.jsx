import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Dropdowns from "../Dropdowns/Dropdowns";

export default function Navbar() {
  return (
    <navbar className="mobile-navbar">
      <div className="left-navbar-container">
        <Link to="/" className="logo">
          poodlefinder
        </Link>
        <Dropdowns content={'BREEDS'}/>
        <Dropdowns content={'RESOURCES'}/>
      </div>
      <div className="mobile-navbar-icons">
        <FavoriteRoundedIcon
          className="favorite-button"
          sx={{ fontSize: 30 }}
        />
        <MenuRoundedIcon className="hamburger-menu" sx={{ fontSize: 35 }} />
      </div>
    </navbar>
  );
}
