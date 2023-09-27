import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navLeft"></div>
      <div className="navMid">
        <Link to="/">Home</Link>
        <Link to="/signup">SignUp</Link>
        <Link to="/login">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/admin">Admin</Link>
      </div>
      <div className="navRight"></div>
    </nav>
  );
};

export default Navbar;
