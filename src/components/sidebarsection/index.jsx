import React from "react";
import logo from "../.././assets/Logo (1).png";
import { IoMdSpeedometer } from "react-icons/io";
import { AiOutlineLineChart } from "react-icons/ai";
import { BsTrophy, BsCreditCard2Front, BsQuestionCircle } from "react-icons/bs";
import { BiTrendingUp } from "react-icons/bi";

import {
  MdDeliveryDining,
  MdOutlineExplore,
  MdOutlinePermContactCalendar,
} from "react-icons/md";
import "./Sidebar.css";

const SideBar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="logo" />
        <h2>planti.</h2>
      </div>
      <div className="menuDiv">
        <h3 className="divTitle">Quick Menu</h3>
        <ul className="menuList grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallTextt">Dash board</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdDeliveryDining className="icon" />
              <span className="smallTextt"> Myorders</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallTextt">Explore</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallTextt">Products</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="settingDiv">
        <h3 className="divTitle">SETTING</h3>
        <ul className="menuList grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiOutlineLineChart className="icon" />
              <span className="smallTextt">Chart</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BiTrendingUp className="icon" />
              <span className="smallTextt"> Trends</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallTextt">Contact</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsCreditCard2Front className="icon" />
              <span className="smallTextt">Billings</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Help Center</h3>
          <p>Having trouble in planti,please contact us for more Questions.</p>
          <button className="btn"> Go to help center</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
