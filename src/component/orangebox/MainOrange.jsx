import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const MainOrange = () => {
  const [counterOn, setcounterOn] = useState(false);

  return (
    <>
      <div className="bg-orange-500 rounded-3xl w-11/12 p-4 lg:mt-14 mx-auto flex items-center grid-cols-2 shadow-2xl ">
        <div className="text-2xl text-wrap md:px-5">
          <div className="md:px-4">
            <h2 className="text-4xl font-bold p-4  lg:text-6xl">
              Welcome! Explore the edge of execellent education with SlateLabs.
            </h2>
          </div>

          <div className="mx-auto my-4 ">
          <img src="unsplashuhvrvdr7pg@2x.png" alt="" className=" object-contain mx-auto lg:hidden" />
        </div>

          <div className="md:px-5">
            <p className="p-2 my-2 text-justify md:text-4xl ">
            Being educated is way better than being skilled. It’s not about having knowledge; it’s about how you apply that knowledge in your every
              We are a team of experts from tier-1 colleges who have developed an innovative approach to teaching that  to create
              We are a team of experts in AI and machine learning who have developed an innovative approach to education. Our platform utilizes artificial
            </p>
          </div>
        </div>

        <div className="mx-auto my-4 w-full">
          <img src="unsplashuhvrvdr7pg@2x.png" alt="" className="hidden lg:block" />
        </div>
      </div>
     
    </>
  );
};

export default MainOrange;