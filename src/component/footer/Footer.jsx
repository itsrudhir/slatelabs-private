import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer id="myFooter" style="background: white;">
        <div
          class="container-fluid"
          style="background: linear-gradient(0deg, orange 0%, white 57%), orange;"
        >
          <div class="row text-center">
            <div class="col-12 col-sm-6 col-md-3">
              <h1 class="logo" style="margin-top: 30px;">
                <a href="#" style="color: var(--bs-body-color);">
                   SLATELABS 
                </a>
              </h1>
            </div>
            <div class="col-12 col-sm-6 col-md-2">
              <h5 style="color: var(--bs-body-color);">Get started</h5>
              <ul>
                <li>
                  <a href="#" style="color: var(--bs-body-color);">
                    Home
                  </a>
                </li>
                <li style="color: var(--bs-body-color);">
                  <a href="#" style="color: var(--bs-body-color);">
                    Downloads
                    <br />
                  </a>
                </li>
                <li style="color: var(--bs-body-color);">
                  <a href="#" style="color: var(--bs-body-color);">
                    Sign Up
                  </a>
                </li>
                <li style="color: var(--bs-body-color);">
                  <a href="#" style="color: var(--bs-body-color);">
                    Other Links
                  </a>
                </li>
              </ul>
            </div>
            <div
              class="col-12 col-sm-6 col-md-2"
              style="color: var(--bs-body-color);"
            >
              <h5 style="color: var(--bs-body-color);">Our Company</h5>
              <ul style="color: var(--bs-body-color);">
                <li style="color: var(--bs-body-color);">
                  <a href="#" style="color: var(--bs-body-color);">
                    About Us
                  </a>
                </li>
                <li style="color: var(--bs-body-color);">
                  <a href="#" style="color: var(--bs-body-color);">
                    Company Information
                    <br />
                  </a>
                </li>
                <li style="color: var(--bs-body-color);">
                  <a href="#" style="color: var(--bs-body-color);">
                    Reviews
                  </a>
                </li>
                <li style="color: var(--bs-body-color);">
                  <a href="#" style="color: var(--bs-body-color);">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-2" style="color: var(--bs-body-color);">
              <h5 style="color: var(--bs-body-color);">Support</h5>
              <ul style="color: var(--bs-body-color);">
                <li style="color: var(--bs-body-color);">
                  <a href="#" style="color: var(--bs-body-color);">
                    FAQ
                  </a>
                </li>
                <li style="color: var(--bs-body-color);">
                  <a href="#" style="color: var(--bs-body-color);">
                    Help Desk
                    <br />
                  </a>
                </li>
                <li style="color: var(--bs-body-color);">
                  <a href="#" style="color: var(--bs-body-color);">
                    Forums
                  </a>
                </li>
                <li style="color: var(--bs-body-color);">
                  <a href="#" style="color: var(--bs-body-color);">
                    External Links
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 social-networks">
              <div></div>
              <a class="facebook" href="#">
                <i class="fa fa-facebook"></i>
              </a>
              <a class="twitter" href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a class="google" href="#">
                <i class="fa fa-google-plus"></i>
              </a>
              <a class="linkedin" href="#">
                <i class="fa fa-linkedin"></i>
              </a>
              <button
                class="btn btn-primary"
                style="margin-top: 20px;"
                type="button"
              >
                Contact us
              </button>
            </div>
          </div>
          <div class="row footer-copyright">
            <div class="col">
              <p>
                © 2016 Copyright Text ~ Designed By <a href="#">MySelf</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
