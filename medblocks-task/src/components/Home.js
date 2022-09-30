import { Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
const Home = () => {
  return (
    <div className="App-header">
      <NavLink to="/tree">
        <Button
          style={{ color: "white", background: "#5dbea3", borderColor: "blue" }}
        >
          Upload JSON File
        </Button>
      </NavLink>
    </div>
  );
};

export default Home;
