import { useState } from "react";

import SideBar from "./components/sidebarsection";
import Body from "./components/bodysection";
import "./App.css";

function App() {
  return (
    <div className="container">
      <SideBar />
      <Body />
    </div>
  );
}

export default App;
