import React from "react";
import "./Header.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header">
      <header>
        <div className="container-fluid">
          <Navbar/>
        </div>
      </header>
    </div>
  );
}
export default Header;
