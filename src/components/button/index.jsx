import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Button = ({ text, className }) => {
  return (
    <div className={className}>
      <h1>{text}</h1>
      <button className="btn flex">
        Sell All <BsArrowRightShort className="icon" />
      </button>
    </div>
  );
};

export default Button;
