import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 shadow-lg">
      <div className="container">
        <Link to="/" className="navbar-brand ml-5 py-3">
          Contact App
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
