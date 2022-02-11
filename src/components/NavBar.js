import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <div className="container">
        <Link to="/" className="navbar-brand ml-5">
          React Redux Contact App
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
