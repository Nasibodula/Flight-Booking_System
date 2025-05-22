import React from "react";
import Navbar from "./components/Navbar";
import { footerNavbarData } from "../../data/footerNavbarData";

import "./styles/Footer.scss";
import Logo from "./components/Logo";
import SocialMedia from "./components/SocialMedia";
import Newsletter from "./components/Newsletter";
import BrandActions from './components/BrandActions';

const Footer = () => {
  return (
    <footer className="footer flex items-center justify-center">
      <div className="container content">
        <div className="footer-info">
          <Logo />
          <Newsletter />
          <SocialMedia />
        </div>
        <div className="footer-navbar">
          <Navbar items={footerNavbarData} />
        </div>
        <div className="footer-brand-actions">
          <BrandActions />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
