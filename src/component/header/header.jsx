// MyComponent.jsx
import React from "react";
import "./header.css";
import "bootstrap/dist/css/bootstrap.css";
// import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="mainnav">
        <div className="logo">
          <h2>
            <Link to="/">
              <span>S</span>LATE
              <span>L</span>ABS
            </Link>
          </h2>
        </div>

        <div className="menu ">
          <>
            <ul>
              <li>
                <a href="#">Find a mentor</a>
              </li>
              <li>
                <a href="#">Be a mentor</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <Link to="/aboutUs">About Us</Link>
                {/* <a href="/aboutUs">About Us</a> */}
              </li>

              <li>
                <Link to="/contactUs">Contact Us</Link>
                {/* <a href="/contactUs">ContactUs</a> */}
              </li>
            </ul>
          </>
        </div>

        <div className="login">
          <div className="login-desktop">
            <ul>
              <li>
                <a href="#"> Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
