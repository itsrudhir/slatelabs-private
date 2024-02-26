import React from "react";
import OrangeButton from "../orangeButton/OrangeButton";

export default function VissionComp({children}) {
  return (
    <div>
      <div id="vision" className="mt-24 lg:my-40 ">
        <div id="heading" className="m-4 py-2 text-left text-4xl ">
          <h1 className=" text-5xl font-bold text-center lg:text-7xl lg:py-8">
            <span className="text-7xl">O</span>ur Vision
          </h1>
        </div>

        <div id="iconsss" className="flex w-10/12 lg:h-80 justify-evenly mt-8 mx-auto">
          <div>
            <img
              src="./group-8780@2x.png"
              alt="icons"
              className="h-2/3 mx-auto pb-3"
            />
            <h4 className="text-center text-2xl">Mentorship</h4>
          </div>

          <div className="mt-6  ">
            <img
              src="./arrow-2@2x.png"
              alt="arrow"
              className="w-9/12 items-center self-center  mx-auto -mb-10
              lg:mt-24
              "
            />
          </div>

          <div className="">
            <img
              src="./group-8780@2x.png"
              alt="icons"
              className="h-2/3 mx-auto pb-3"
            />
            <h4 className="text-center text-2xl  ">Mentorship</h4>
          </div>

          <div className="mt-6">
            <img
              src="./arrow-2@2x.png"
              alt="arrow"
              className="w-9/12 items-center self-center  mx-auto -mb-10 
              lg:mt-24
              "
            />
          </div>

          <div>
            <img
              src="./group-8780@2x.png"
              alt="icons"
              className="h-2/3 mx-auto pb-3"
            />
            <h4 className="text-center text-2xl">Mentorship</h4>
          </div>

          {/* <div>
              <img src="./group-8780@2x.png" alt="icons" />
              <h4>Mentorship</h4>
            </div>

            <div className="flex items-center">
              <img src="./arrow-2@2x.png" alt="arrow" />
            </div>
            <div>
              <img src="./group-8780@2x.png" alt="icons" />
              <h4>Mentorship</h4>
            </div> */}
        </div>

        <div id="textss" className="p-4 flex items-center justify-center my-12 ">
          <h3 className="text-2xl lg:text-4xl text-justify p-3 ">
            We aim to provide a platform where students can connect with
            experienced professionals, gain insights into
          </h3>
        </div>

        <div className="w-10/12 text-justify mx-auto text-2xl lg:text-4xl">
          {children}
        </div>
            


        
      </div>
    </div>
  );
}
