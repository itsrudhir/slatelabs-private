import React from "react";
import "./slider1.css";
import "./slider2.css";
import "./sliderpart.js";

const Slider = () => {
  return (
    <div>
      <div class="accordian">
        <ul>
          <li>
            <a class="image_title" href="#">
              KungFu Panda
            </a>
            <a href="#">
              <img src="http://thecodeplayer.com/uploads/media/3yiC6Yq.jpg" />
            </a>
          </li>
          <li>
            <a class="image_title" href="#">
              Toy Story
            </a>
            <a href="#">
              <img src="http://thecodeplayer.com/uploads/media/40Ly3VB.jpg" />
            </a>
          </li>
          <li>
            <a class="image_title" href="#">
              Wall-E
            </a>
            <a href="#">
              <img src="http://thecodeplayer.com/uploads/media/00kih8g.jpg" />
            </a>
          </li>
          <li>
            <a class="image_title" href="#">
              UP!
            </a>
            <a href="#">
              <img src="http://thecodeplayer.com/uploads/media/2rT2vdx.jpg" />
            </a>
          </li>
          <li>
            <a class="image_title" href="#">
              Cars
            </a>
            <a href="#">
              <img src="http://thecodeplayer.com/uploads/media/8k3N3EL.jpg" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Slider;
