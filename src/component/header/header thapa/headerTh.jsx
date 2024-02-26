import React, { useState } from "react";
import "./headerTH.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const HeaderTH = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav fixed top-0 ">
        {/* 1st logo part  */}

        <div className="logo ">
          <h3
            className="text-white  font-semibold text-4xl px-4 
            lg:text-7xl   lg:p-6 "
          >
            <NavLink to="/">
              <span>S</span>LATE<span>L</span>ABS
            </NavLink>
          </h3>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul className="">
            <li className="">
              <NavLink
                to="https://docs.google.com/forms/d/e/1FAIpQLSeoPSQH1eX_w324reQJuWhXpKN1Flqh27rW2jekTiBBJj8KzQ/viewform?usp=send_form"
                style={{ fontSize: "17px" }}
              >
                Find a Mentor
              </NavLink>
            </li>
            <li>
              <NavLink to="https://forms.gle/4Lu7HV7A9DNtNoo48" style={{ fontSize: "17px" }}>
                Be a Mentor
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://docs.google.com/forms/d/e/1FAIpQLSeoPSQH1eX_w324reQJuWhXpKN1Flqh27rW2jekTiBBJj8KzQ/viewform?usp=send_form"
                style={{ fontSize: "17px" }}
              >Course Enquiry
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" style={{ fontSize: "17px" }}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://docs.google.com/forms/d/e/1FAIpQLSeoPSQH1eX_w324reQJuWhXpKN1Flqh27rW2jekTiBBJj8KzQ/viewform?usp=send_form"
                style={{ fontSize: "17px" }}
              >Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="https://forms.gle/ioCfEWPYNbYzXcXP9" style={{ fontSize: "17px" }}>
                REGISTER
              </NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa"
              >
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa"
              >
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa"
              >
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul> */}

          {/* <div className="login">
            <div className="login-desktop">
              <ul>
                <li>
                  <a href="#"> Login</a>
                </li>
              </ul>
            </div>
          </div> */}

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default HeaderTH;
