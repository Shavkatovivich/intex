import React from "react";
import "./InftablePool.scss";
import "../FramePools/FramePools"

// imports images
import pool from "../../Assets/Image/pool.png";


const InftablePool = () => {
  return (
    <div>
      <div className="inftable__top" id="inftable">
        <h2 className="inftable__pool-title">Inflatable pools</h2>
      </div>

      <div className="container">
        <ul className="frame__list">
           <li className="frame__list-item">
            <span className="frmae_item-span">Recommended</span>
            <div className="frame__item-info">
              <h4 className="frame__item-title inftable__title">Easy set</h4>
              <img
                className="frame__item-img"
                src={pool}
                alt="frame__item-img"
              />

              <div className="frame__info-btn">
                <div className="btn__price">
                  <span className="info__btn-priceOne">$1900</span>
                  <span className="info__btn-priceTwo">$1.500</span>
                </div>
                <button className="frame__order-btn">Order</button>
              </div>
            </div>
          </li>
           <li className="frame__list-item">
            <span className="frmae_item-span">Recommended</span>
            <div className="frame__item-info">
              <h4 className="frame__item-title inftable__title">Easy set</h4>
              <img
                className="frame__item-img"
                src={pool}
                alt="frame__item-img"
              />

              <div className="frame__info-btn">
                <div className="btn__price">
                  <span className="info__btn-priceOne">$1900</span>
                  <span className="info__btn-priceTwo">$1.500</span>
                </div>
                <button className="frame__order-btn">Order</button>
              </div>
            </div>
          </li>
           <li className="frame__list-item">
            <span className="frmae_item-span">Recommended</span>
            <div className="frame__item-info">
              <h4 className="frame__item-title inftable__title">Easy set</h4>
              <img
                className="frame__item-img"
                src={pool}
                alt="frame__item-img"
              />

              <div className="frame__info-btn">
                <div className="btn__price">
                  <span className="info__btn-priceOne">$1900</span>
                  <span className="info__btn-priceTwo">$1.500</span>
                </div>
                <button className="frame__order-btn">Order</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InftablePool;
