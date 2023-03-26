import React from "react";

const Tree = ({ item }) => {
  return (
    <div className="singleItem">
      <div className="icon">{item.icon}</div>
      <img src={item.img} alt="image name" />
      <h3>{item.name}</h3>
    </div>
  );
};

export default Tree;
