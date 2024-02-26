import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Vision.css";

const Vision = () => {
  return (
    <div>
      <div className="ourvissionheader">
        <div className="vissiontext">
          <h1>Our Vission</h1>
        </div>

        <div className="vissionimg">
          <img
            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
            alt="OUR MISSION"
          />
        </div>
      </div>

      <br />
      <br />

      <div className="icons">
        <img
          src="https://thumbs.dreamstime.com/b/mentor-trainer-icon-orange-color-design-vector-eps-file-perfect-use-print-media-web-stock-images-commercial-any-kind-223875034.jpg"
          alt="Mentorship 1"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_1fZIxf-M1_DxFq24k5Zmn4RMvXUOpskk0sbvTSZ6LRmBb78Ry4q8CEqN2nkmAjp8bU&usqp=CAU"
          alt="arrow right 1"
        />

        <img
          src="https://thumbs.dreamstime.com/b/mentor-trainer-icon-orange-color-design-vector-eps-file-perfect-use-print-media-web-stock-images-commercial-any-kind-223875034.jpg"
          alt="Mentorship 2"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_1fZIxf-M1_DxFq24k5Zmn4RMvXUOpskk0sbvTSZ6LRmBb78Ry4q8CEqN2nkmAjp8bU&usqp=CAU"
          alt="arrow right 2"
        />

        <img
          src="https://thumbs.dreamstime.com/b/mentor-trainer-icon-orange-color-design-vector-eps-file-perfect-use-print-media-web-stock-images-commercial-any-kind-223875034.jpg"
          alt="Mentorship 3"
        />
      </div>

      <div className="textbox">
        <h2>
          <span>"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quasi est autem quos sint, deleniti suscipit?
        </h2>
      </div>

      <div className="visbutton">

        <button type="button" className="btn btn-outline-dark btn-lg btn-block">Explore More</button>

      </div>
    </div>
  );
};

export default Vision;
