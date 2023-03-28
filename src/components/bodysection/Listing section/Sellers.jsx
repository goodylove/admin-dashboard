import Button from "./../../button/index";
import React from "react";

const Sellers = ({ img, head, text1, text2, text3 }) => {
  return (
    <div className="topsellers">
      <Button text={head} className={"heading flex"} />

      <div className="card flex">
        <div className="users">
          {img.map((image, index) => (
            <img src={image} alt="" key={index} />
          ))}
        </div>
        <div className="cardText">
          <span>
            {text1}
            <br />
            <small>
              {text2} <span className="date">{text3}</span>
            </small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
