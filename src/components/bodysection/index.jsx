import React from "react";
import Top from "./Top section/index";

import Listing from "./Listing section/index";
import Activity from "./Activity section/index";
import "./body.css";

const Body = () => {
  return (
    <div className="mainContent">
      <Top />

      <div className="bottom flex">
        <Listing />
        <Activity />
      </div>
    </div>
  );
};

export default Body;
