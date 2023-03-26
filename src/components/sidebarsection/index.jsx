import React from "react";
import logo from "../.././assets/Logo (1).png";
import { IoMdSpeedometer } from "react-icons/io";
import { BsTrophy } from "react-icons/bs";
import { MdDeliveryDining, MdOutlineExplore } from "react-icons/md";
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
              <span className="smallTextt"> my orders</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallTextt">explore</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallTextt">products</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="settingDiv">
        <h3 className="divTitle">SETTING</h3>
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
              <span className="smallTextt"> my orders</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallTextt">explore</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallTextt">products</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
