import React from "react";
import "./Footer.scss";

// import images
import hour from "../../Assets/Image/Soat.svg";
import phone from "../../Assets/Image/phone.svg";
import telegram from "../../Assets/Image/telegram.svg";
import instagram from "../../Assets/Image/instagram-icon.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer__info">
            <div className="footer__left">
              <h2 className="footer__left-title">For free consultation help</h2>
              <form className="footer__form" action="#">
                <input
                  className="footer__input"
                  type="text"
                  placeholder="Name"
                  required
                />
                <input
                  className="footer__input"
                  type="text"
                  placeholder="Phone number"
                  required
                />
                <button className="footer__btn">Get a consultation</button>
              </form>
            </div>

            <div className="footer__center">
              <div className="footer__center-hour">
                <img className="center__hour" src={hour} alt="center__hour" />
                <h4 className="center__hour-title">Working hours</h4>
              </div>

              <div className="footer__center-week">
                <p className="center__week-text">
                  Working days: 10:00 - 22:00
                  <br />
                  No days off
                </p>

                <div className="social__media">
                  <Link to="/">
                    <img
                      className="social__media-img"
                      src={phone}
                      alt="social__media-img"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      className="social__media-img"
                      src={telegram}
                      alt="social__media-img"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      className="social__media-img instagram"
                      src={instagram}
                      alt="social__media-img"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="footer__right">
              <Link className="footer__right-link">Intex-market.uz</Link>
              <br />
              <a className="footer__right-num" href="tel:+998999999999">
                +998999999999
              </a>
              <br />
              <p className="footer__right-address">
                 Pahlavon Mahmud ko’chasi,
                Yashnobod tumani, Toshkent.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
