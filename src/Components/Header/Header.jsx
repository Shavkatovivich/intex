import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

// import images
import siteLogo from "../../Assets/Image/INTEX-MARKET-LOGO.svg";
import telegramIcon from "../../Assets/Image/telegram-icon.svg";
import instagramIcon from "../../Assets/Image/instagram-icon.svg";
import headerImage from "../../Assets/Image/headerBigImage.png"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/">
            <img className="nav__logo" src={siteLogo} alt="site logo" />
          </Link>

          <a className="nav__link" href="#frame">
            Frame pools
          </a>
          <a  className="nav__link" href="#inftable">
            Inflatable pools
          </a>

          <div className="nav__contacts">
            <a className="nav__contacts-number" href="tel:(99) 99 999 99 99">
              (99) 99 999 99 99
            </a>
            <Link to="/">
              <img
                className="nav__contacts-icon"
                src={telegramIcon}
                alt="telegramIcon"
              />
            </Link>
            <Link to="/">
              <img
                className="nav__contacts-icon"
                src={instagramIcon}
                alt="instagramIcon"
              />
            </Link>
            <Link to="/">
              <img
                className="nav__contacts-icon"
                src={instagramIcon}
                alt="instagramIcon"
              />
            </Link>
          </div>
        </nav>
      </div>

      <div className="header__image">
        <img className="header__image-img" src={headerImage} alt="" />

        <p className="header__image-text">Seasonal Sale!</p>
      </div>
    </header>
  );
};

export default Header;
