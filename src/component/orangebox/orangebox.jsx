import React from "react";
import "./orangebox.css";

import "bootstrap/dist/css/bootstrap.css";

const Orangebox = () => {
  return (
    <div>
      <div className="orangebox">
        <div className="textorange">
          <h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          </h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            est quae eveniet itaque iure exercitationem mollitia pariatur facere
            consectetur fuga!
            <br />
          </p>

          <button className="btn btn-outline-dark btn-lg">
            Explore Courses
          </button>
        </div>
        <div className="picorange">
          <div className="pic1">
            <img
              src="https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg"
              class="rounded img-fluid"
              alt="Responsive image"
            />
          </div>

          <div className="pic2">
            <img
              src="https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg"
              class="rounded img-fluid"
              alt="Responsive image"
            />
          </div>
        </div>
      </div>

      <div className="blank"></div>

      <div className="orangebelow">
        <ul>
          <li>
            <p>
              <span>10k+</span>
              <br />
              Enrolled students
            </p>
          </li>
          <li>
            <p>
              <span>10k+</span>
              <br />
              Enrolled students
            </p>
          </li>
          <li>
            <p>
              <span>10k+</span>
              <br />
              Enrolled students
            </p>
          </li>
          <li>
            <p>
              <span>10k+</span>
              <br />
              Enrolled students
            </p>
          </li>
        </ul>
      </div>

      </div>

      

      

      
  );
};

export default Orangebox;
