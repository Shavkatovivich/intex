import React from "react";
import { Link } from "react-router-dom";
import "./Delivery.scss";

const Delivery = () => {
  return (
    <div>
      <div className="delivery">
        <div className="container">
          <div className="deliver__info">
            <h3 className="delivery__title">Free delivery</h3>
            <p className="delivery__text">
              Free delivery is carried out within the city of Tashkent (outside
              the city, delivery is paid separately)
            </p>
            <Link className="delivery__link" to="/">
              Make an order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
