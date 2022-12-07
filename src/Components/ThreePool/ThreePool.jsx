import React from 'react';
import "./ThreePool.scss"

// imports images 
import oneImg from "../../Assets/Image/1.svg"
import twoImg from "../../Assets/Image/2.svg"
import threeImg from "../../Assets/Image/3.svg"

const ThreePool = () => {
    return (
        <div className='container'>
            <ul className="pool__list">

                <li className="pool__list-item">
                    <img className='pool_item-img' src={oneImg} alt="pool_item-img" />
                    <div className="pool_item-info">
                        <h3 className="item__info-title">Free delivering pool</h3>
                        <p className="item__info-text">
                            We value our customers, you can be sure of the quality of our service!
                        </p>
                    </div>
                </li>

                <li className="pool__list-item">
                    <img className='pool_item-img' src={twoImg} alt="pool_item-img" />
                    <div className="pool_item-info">
                        <h3 className="item__info-title">Special chemistry as a gift</h3>
                        <p className="item__info-text">Special cleaning chemicals for the pool - free of charge</p>
                    </div>
                </li>

                <li className="pool__list-item">
                    <img className='pool_item-img' src={threeImg} alt="pool_item-img" />
                    <div className="pool_item-info">
                        <h3 className="item__info-title">Quality assurance</h3>
                        <p className="item__info-text">All INTEX products are original</p>
                    </div>
                </li>


            </ul>
        </div>
    );
};


export default ThreePool;


