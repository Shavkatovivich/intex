import React from "react";
import "./Customer.scss";

// import images
import experense from "../../Assets/Image/Experience.png";
import delivery from "../../Assets/Image/delivery.png";
import quality from "../../Assets/Image/Quality.png";
import trueIcon from "../../Assets/Image/TrueIcon.svg";

const Customer = () => {
  return (
    <div>
      <div className="customer">
        <div className="container">
          <h2 className="customer__title">Values of our clients</h2>
        </div>
      </div>

      <div className="experens">
        <div className="container">
          <ul className="experens__list">
            <li className="experense__list-item">
              <img
                className="experense__item-img"
                src={experense}
                alt="experense"
              />
              <div className="experense__item-info">
                <h4 className="experense__info-title">Experience</h4>
                <p className="experense__info-text">
                  The professionalism of our employees
                </p>
              </div>
            </li>
            <li className="experense__list-item">
              <img
                className="experense__item-img"
                src={delivery}
                alt="experense"
              />
              <div className="experense__item-info">
                <h4 className="experense__info-title">Delivery</h4>
                <p className="experense__info-text">
                  Free delivery within the city
                </p>
              </div>
            </li>
            <li className="experense__list-item">
              <img
                className="experense__item-img"
                src={quality}
                alt="experense"
              />
              <div className="experense__item-info">
                <h4 className="experense__info-title">Quality</h4>
                <p className="experense__info-text">Durable, quality pools</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="customer">
        <div className="container">
          <h2 className="customer__title">Pools from intex in Tashkent</h2>
        </div>
      </div>

      <div className="pools">
        <div className="container">
          <div className="pools__info">
            <p className="pools__info-text">
              Swimming pools from intex are affordable, high-quality, reliable
              and environmentally friendly products that are designed for a
              pleasant stay for the whole family. The pool can be installed
              completely on any site and actively use it in the summer. The pool
              will give you vivid emotions and save you from the heat on hot
              summer days.
            </p>

            <div className="pools__info-right pools__info-text">
              <p className="pools__right-text">
                Pools from intex are distinguished by an extensive list of
                advantages, of which the most important can be distinguished:
              </p>

              <div className="pools__info-bottom">
                <div className="pools__bottom-icon">
                  <img src={trueIcon} alt="" />
                  <span className="info__bottom">Strength</span>
                </div>
                <div className="pools__bottom-icon">
                  <img src={trueIcon} alt="" />
                  <span className="info__bottom">Easy to install </span>
                </div>
                <div className="pools__bottom-icon">
                  <img src={trueIcon} alt="" />
                  <span className="info__bottom">
                    Beautiful and vibrant colors
                  </span>
                </div>
                <div className="pools__bottom-icon">
                  <img src={trueIcon} alt="" />
                  <span className="info__bottom">Stylish design</span>
                </div>
                <div className="pools__bottom-icon">
                  <img src={trueIcon} alt="" />
                  <span className="info__bottom">High quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
