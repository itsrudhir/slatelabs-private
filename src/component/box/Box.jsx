import React from "react";

export default function Box() {
  return (
    <>
       <div
        id="box4"
        className="mt-4 w-4/6 lg:w-full mx-auto rounded-lg p-6 border-2 border-black shadow-[4px_4px_14px_1px] "
        style={{ height: 'auto', '@screen lg': { height: '115rem' } }}
      >
        <div className="w-11/12 mx-auto">
          <img
            src="fluentmdl2teamwork@2x.png"
            alt="icons"
            className="mx-auto py-3 w-2/5"
          />
        </div>

        <div id="headd" className="text-center text-2xl font-bold my-3">
          {" "}
          <h2>Build connections</h2>
        </div>

        <div className="text-xl lg:text-2xl text-justify">
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            totam.
          </h4>
        </div>
      </div>
    </>
  );
}
