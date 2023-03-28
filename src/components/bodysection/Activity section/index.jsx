import React from "react";
import Img2 from "../../.././assets/user.jpg";
import Button from "./../../button/index";
import "./activity.css";

const Activity = () => {
  return (
    <div className="activitySection">
      <Button text={"Recent Activity"} className={"heading flex"} />

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={Img2} alt="" />
          <div className="customerDetails">
            <span className="name">Elvis Okon</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2minutes ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={Img2} alt="" />
          <div className="customerDetails">
            <span className="name">Elvis Okon</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2minutes ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={Img2} alt="" />
          <div className="customerDetails">
            <span className="name">Elvis Okon</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2minutes ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={Img2} alt="" />
          <div className="customerDetails">
            <span className="name">Elvis Okon</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2minutes ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={Img2} alt="" />
          <div className="customerDetails">
            <span className="name">Elvis Okon</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2minutes ago</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
