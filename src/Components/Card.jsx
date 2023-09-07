import React from "react";
import "./card.css";
import Data from "./data";
// Import Icons
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";




const Card = () => {
    return (
        <div className="mainContainer">
            {
                Data.map(({ id, img, title, description, price }) => {
                    return (
                        <div key={id} className="box">
                            <div className="card">
                                <div className="image">
                                    <img src={img} alt="" />
                                </div>
                                <div className="desc">
                                    <h1>{title}</h1>
                                    <p>{description} </p>
                                    <span>${price}</span>
                                </div>
                                <div className="star">
                                    <AiFillStar className="icon" />
                                    <AiFillStar className="icon" />
                                    <AiFillStar className="icon" />
                                    <AiOutlineStar className="icon" />
                                    <AiOutlineStar className="icon" />
                                </div>
                            </div>
                            <button className="btn">Add To Cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card;