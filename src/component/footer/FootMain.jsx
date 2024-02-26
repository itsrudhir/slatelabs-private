import React from "react";
import { CarouselCustomNavigation } from "../../component/carousel/Carousel";
import { IconButton } from "@material-tailwind/react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";


const FootMain = () => {

  return (
    <div>
      <footer className="bg-orange-100 rounded-t-3xl py-3" >
        {/* <Footer2 /> */}

        <div className="mt-6 pt-4 p-4">
          <div className=" text-3xl font-semibold px-4 text-center lg:text-4xl">
            <h2>Learning is a never ending process, Keep learning</h2>
          </div>

          {/* <div className="p-3 ">
            <a href="https://www.linkedin.com/company/slate-labs-edu/">
              <form class="mt-4">
                <div class="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start lg:w-3/12">
                  <label for="email" class="sr-only">
                    Email
                  </label>

                  <input
                    class="w-full rounded-xl bg-orange-300 border-gray-800 px-6 py-3 shadow-md placeholder-black "
                    type="email"
                    placeholder="Enter your email"
                  />

                  <button
                    class=" w-36 rounded-2xl bg-orange-300 px-8 py-3  text-black font-semibold transition shadow-[3px_2px_3px_0px]  hover:bg-orange-800"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </a>
          </div> */}


        </div>

        <div className="flex">
          <div className=" p-3 mx-auto">
            {/* <h3 className="text-xl">SlateLabs</h3> */}
            <p className="text-lg text-center lg:text-xl lg:my-3 ">
              Be in touch with us by the following links.
            </p>
          </div>
        </div>

        {/* <hr
        style={{
          
          background: "gray",
          color: "black",
          borderColor: "black",
          height: "1.4px",
        }}/> */}

        <div className="flex flex-col">
          {/* <div className="px-4 py-2">Vertical Section 1</div> */}
          {/* <hr className="my-2 border-gray-400" /> */}
          {/* <div className="px-4 py-2">Vertical Section 2</div> */}
        </div>

        <div className="w-full flex justify-around">
          <div className="w-1/12">
            <p></p>
          </div>
          <div className="w-8/12">
            <hr className="my-2 h-0.5 border-black bg-black " />
          </div>
          <div className="w-1/12">
            <p></p>
          </div>
        </div>

        <div className="    ">
          {/* <div className="p-3 flex justify-between w-7/12 mx-auto mb-6"> */}
          {/* <IconButton className="rounded  hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
              <i className="fab fa-twitter text-lg" />
            </IconButton> */}
          {/* <FaFacebook size={20}/>
          <FaTwitter size={20}/>
          <GrInstagram size={20}/>
          <BsLinkedin  size={20}/> */}
          {/* </div > */}
          {/* 
            <div className=" py-14">

          <h3 className="text-lg text-center  font-sans ">
            © 2024 Slate Labs Inc.
          </h3>
            </div> */}

          <div className="flex items-center p-3 justify-around w-3/5 mx-auto">
            <a href="https://www.facebook.com/slate.labs?sfnsn=wiwspwa&mibextid=RUbZ1f">
              <FaFacebook size={20} />
            </a>

            <a
              href="
            https://youtube.com/@SlateLab?si=H6VWvouWwEnY5d0x"
            >
              <IoLogoYoutube size={20}/>
            </a>

            <a href="https://www.instagram.com/slate_labs?utm_source=qr&igsh=N2dqZ2NpazJ3eTZs">
              <GrInstagram size={20} />
            </a>

            <a href="https://www.linkedin.com/company/slate-labs-edu/">
              <BsLinkedin size={20} />
            </a>
          </div>

          <div className="flex text-center items-center justify-center py-6">
            <h3 className="font-serif"> © 2024 Slate Labs Inc.</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FootMain;
