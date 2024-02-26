import React from "react";
import HeadBoth from "../../component/header/headBoth";
import FootMain from "../../component/footer/FootMain";
// import Orangebox from '../../component/orangebox/orangebox'
import MainOrange from "../../component/orangebox/MainOrange";
import CounttUp from "../../component/counterup/CountUp";
import Mission from "../../component/ourMission/Mission";
import VissionComp from "../../component/our vission/VissionComp";
import About from "../../component/aboutUs/about";
import Testimony from "../../component/testimony/Testimony";
import Mentor from "../../component/mentors/Mentor";
import Orangebox from "../../component/orangebox/orangebox";
import Talk from "../../component/talk to us/Talk";
import Test1 from "../../component/testimony/test1";
import { Routes, Route } from "react-router-dom";
import HeaderTH from "../../component/header/header thapa/headerTh";
import OrangeButton from "../../component/orangeButton/OrangeButton";
import { NavLink } from "react-router-dom";

const Home_main = () => {
  return (
    <>
      <header>
        {/* <HeadBoth/> */}
        <HeaderTH />
      </header>

      <body className="mt-32  p-2 ">
        <div id="orangebox">
          <MainOrange />
          <CounttUp />
        </div>

        <div id="testimonials">
          <Test1 />
        </div>

        <div id="mission" className="">
          <Mission />
        </div>

        <div id="vision" className="my-16">
          <VissionComp />
          <div>
            <NavLink to="/aboutus">
              <OrangeButton />
            </NavLink>
          </div>
        </div>

        <div id="about" className="flex flex-wrap justify-center mb-8 sm:mb-0 ">
          <About />
        </div>

        <div id="teacher">
          <Mentor />
        </div>

        <div id="talk2us" className="py-5">
          <Talk />
        </div>
      </body>

      <footer>
        <FootMain />
      </footer>
    </>
  );
};

export default Home_main;
