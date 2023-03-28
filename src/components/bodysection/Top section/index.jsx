import React from "react";
import AdminImage from "../../.././assets/source03.jpg";
import VaseImage from "../../.././assets/main.png";
import VideoImg from "../../.././assets/Grass - 66810.mp4";
import { BiSearchAlt } from "react-icons/bi";
import { BsArrowRightShort, BsQuestionCircle } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import "./Top.css";

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to planti</h1>
          <p>Hello Goody,Welcome back!</p>
        </div>
        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <BiSearchAlt className="icon" />
        </div>
        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />

          <div className="adminImage">
            <img src={AdminImage} alt="admin image" />
          </div>
        </div>
      </div>
      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>The worls's fast growing industry are natural made products!</p>

          <div className="buttons flex">
            <button className="btn"> Explore more</button>
            <button className="btn transparent"> Top Sellers</button>
          </div>
          <div className="videoDiv">
            <video src={VideoImg} autoPlay loop muted></video>
          </div>
        </div>
        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1> My Stat</h1>
              <div className="flex">
                <span>
                  Today <br /> <small>4 Orders</small>
                </span>
              </div>
              <div className="flex">
                <span>
                  This Month <br /> <small>127 Orders</small>
                </span>
              </div>
              <span className="flex link">
                Go to my orders
                <BsArrowRightShort className="icon" />
              </span>
            </div>
            <div className="imgDiv">
              <img src={VaseImage} alt="" />
            </div>
          </div>
          <div className="sideBarCard">
            <BsQuestionCircle className="icon" />
            <div className="cardContent">
              <div className="circle1"></div>
              <div className="circle2"></div>
              <h3>Help Center</h3>
              <p>
                Having trouble in planti,please contact us for more Questions.
              </p>
              <button className="btn"> Go to help center</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
