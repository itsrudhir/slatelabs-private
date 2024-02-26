import React from "react";
import CountUp from "react-countup";

const CounttUp = () => {
  return (
    <>
      <div className="flex justify-around m-12">

        <div className="font-bold ">
          <CountUp  end={100} duration={2.5} className="text-4xl" />+
          <p>students</p>
        </div>

        <div className=" font-bold ">
          <CountUp end={100} duration={2.5} className="text-4xl" />+
          <p>students</p>
        </div>

        <div className=" font-bold ">
          <CountUp end={100} duration={2.5} className="text-4xl" />+
          <p>students</p>
        </div>

        <div className="font-bold ">
          <CountUp end={100} duration={2.5} className="text-4xl" />+
          <p>students</p>
        </div>
      </div>
    </>
  );
};

export default CounttUp;
