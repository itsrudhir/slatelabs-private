import React from "react";
import { CarouselCustomNavigation } from "../carousel/Carousel";
import OrangeButton from "../orangeButton/OrangeButton";
import { CarouselCustomNavigationteacher } from '../../component/carousel/CarouselTeacher'
import { NavLink } from "react-router-dom";


const Mentor = () => {
  return (
    <>
      <div className="px-3 my-12 ">
        <div className="mx-auto lg:w-8/12 ">
          <h2 className="text-6xl font-semibold  p-2 my-2 text-left ">
            Our faculties
          </h2>
        </div>
        <div className="bg-orange-200 rounded-3xl mx-auto lg:w-8/12 p-2  mt-3 ">
          <CarouselCustomNavigationteacher />
        </div>
      </div>
      <NavLink to='/aboutus'>

      <OrangeButton />
      </NavLink>
    </>
  );
};

export default Mentor;
