import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header style={styleHeader}>
      <h1>Todo List</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
};

const styleHeader = {
  color: "black",
  backgroundColor: "lightgrey",
  textAlign: "center",
  padding: "10px",
  border: "2px solid tomato"
};
const linkStyle = {
  color: "white",
  fontSize: "15px"
};
export default Header;
