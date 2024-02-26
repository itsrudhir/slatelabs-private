import React from "react";
import Box from "../box/Box";
import OrangeButton from "../orangeButton/OrangeButton";
import { NavLink } from "react-router-dom";

const Mission = () => {
  return (
    <>
      <div id="head" className="my-24">
        {/* <div id="desktop or head comp"
         className="flex  invisible lg:block">
          <div className="bg-red-300 grid place-items-center">
            <img
              src="unsplashuhvrvdr7pg@2x.png"
              alt="OUR MISSION"
              className="w-full mx-auto "
            />
          </div>

          <div className="w-2/3">
            <h1 className="text-7xl text-end">
              Our
              <br />
              Mission
            </h1>
          </div>
        </div> */}

        <div id="mobile or head" className=" ">
          <h2
            className="text-6xl  mx-4 font-bold my-20
          text-center lg:text-8xl "
          >
            Our Mission
          </h2>

          <img
            // src="kenny-eliason-zFSo6bnZJTw-unsplash.jpg"
            src="https://i.pinimg.com/564x/ea/0c/ca/ea0cca6a099dd0dbd03e1ce427699355.jpg"
            alt="a good learner is a good listener"
            className="w-11/12 mx-auto mb-7 object-contain lg:w-4/12 rounded-3xl"
          />

          <p className="text-3xl font-semibold p-5 text-center ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            voluptatum provident nesciunt!
          </p>
        </div>
      </div>

      <div className="justify-around mx-auto md:flex md:w-10/12 md:mb-24">
        <div>
          <Box />
        </div>
        <div>
          <Box />
        </div>
        <div>
          <Box />
        </div>
      </div>

      <div className="">
        <NavLink to="/aboutus">
          <OrangeButton />
        </NavLink>
      </div>
    </>
  );
};

export default Mission;
