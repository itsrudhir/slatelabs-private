import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./testimony.css";
import Slider from "../slider/Slider";

const Testimony = () => {
  return (
    <div>
      <div className="testimony">
        <div className="testimonytext">
          <h1>
            <span>T</span>
            estimony
          </h1>
        </div>
        <div className="testimagearea">
          <div className="imagetextarea">
            <h1>Our Students love what we do for them </h1>

            <button
              type="button"
              className="btn btn-outline-dark btn-lg  "
            >
              See More
            </button>
          </div>

          <div className="testimonyimage">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
