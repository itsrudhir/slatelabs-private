import React from "react";
import { CarouselCustomNavigation } from "../carousel/Carousel";

export default function Test1() {
  return (
    <>
      <div className=" mt-20 lg:p-11">
        <div className="p-4">
          <h2 className="text-6xl font-bold lg:text-8xl lg:text-center
          ">
            Testimonials</h2>
        </div>

        <div className="flex flex-col justify-center items-center lg:w-10/12 mx-auto">
          <div className="bg-orange-200 rounded-3xl w- p-2  mt-3 mx-2 lg:">
            <CarouselCustomNavigation />
          </div>
        </div>
      </div>
    </>
  );
}
