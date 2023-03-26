import React from "react";
import Img1 from "../../.././assets/3.jpg";
import Img2 from "../../.././assets/img.jpg";
import Img3 from "../../.././assets/4.jpg";
import Img4 from "../../.././assets/plant.png";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Tree from "./Tress";

import "./Listing.css";

const TreeImg = [
  {
    img: Img1,
    name: "Annual Vince",
    icon: <AiFillHeart />,
  },
  {
    img: Img2,
    name: "Spider plant",
    icon: <AiOutlineHeart />,
  },
  {
    img: Img3,
    name: "coffee plant",
    icon: <AiOutlineHeart />,
  },
  {
    img: Img4,
    name: "Button Fern",
    icon: <AiOutlineHeart />,
  },
];

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listing</h1>
        <button className="btn flex">
          Sell All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        {TreeImg.map((item, index) => (
          <Tree key={index} item={item} />
        ))}
      </div>

      <div className="sellers">
        <div className="topsellers"></div>
      </div>
    </div>
  );
};

export default Listing;
