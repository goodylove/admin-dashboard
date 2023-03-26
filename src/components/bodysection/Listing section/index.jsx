import React from "react";
import Img1 from "../../.././assets/3.jpg";
import Img2 from "../../.././assets/img.jpg";
import Img3 from "../../.././assets/4.jpg";
import Img4 from "../../.././assets/plant.png";
import Img5 from "../../.././assets/user.jpg";
import Img6 from "../../.././assets/user1.jpg";
import Img7 from "../../.././assets/user2.jpg";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Sellers from "./Sellers";
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

const SellersCon = [
  {
    img: [Img5, Img6, Img7],
    text1: " 13.222 plant sold",
    text2: "  22 Seller",
    text3: " 7 Days",
    head: "Top sellers",
    icon: <BsArrowRightShort />,
  },
  {
    img: [Img5, Img6, Img7],
    text1: "13.222 plant sold",
    text2: "22 Seller",
    text3: "7 Days",
    head: "Featured Sellers",
    icon: <BsArrowRightShort />,
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

      <div className="sellers flex">
        {SellersCon.map((item) => (
          <Sellers
            key={item.head}
            img={item.img}
            text1={item.text1}
            text2={item.text2}
            text3={item.text3}
            head={item.head}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Listing;
