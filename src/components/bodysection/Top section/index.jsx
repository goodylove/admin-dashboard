import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import AdminImage from "../../.././assets/source03.jpg";
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
        <div className="searchBa flex">
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
    </div>
  );
};

export default Top;
