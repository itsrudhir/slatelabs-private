import React from "react";
import Navbar from "../../component/header/header";
import { CarouselCustomNavigation } from "../../component/carousel/Carousel";
import { IconButton } from "@material-tailwind/react";
import { SocialIcon } from "react-social-icons";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import OrangeButton from "../../component/orangeButton/OrangeButton";
import VissionComp from "../../component/our vission/VissionComp";
import HeaderTH from "../../component/header/header thapa/headerTh";
import FootMain from "../../component/footer/FootMain";
import Box from "../../component/box/Box";
import { CarouselCustomNavigationteacher } from "../../component/carousel/CarouselTeacher";
import Mentor from "../../component/mentors/Mentor";
import { NavLink } from "react-router-dom";

const AboutT = () => {
  return (
    <>
      {/* <h2>this</h2> */}

      <header className="fixed top-0 left-0 z-[200] w-full overflow-hidden rounded-b-2xl">
        <div id="laptopNav" className="">
          {/* <Navbar /> */}
          <HeaderTH />
        </div>

        {/* <div
          id="mobileNav"
          className="flex w-full bg-orange-800 justify-between p-3 pt-4
        lg:hidden"
        >
          <div>
            <h1 className="text-3xl pl-2 font-bold text-white ">SlateLabs</h1>
          </div>

          <div>
            <img src="icon@2x.png" alt="" className="w-10 h-10 rounded-md" />
          </div>
        </div> */}
      </header>

      <body
        className="w-5/6 mx-auto mt-32 
                        lg:mt-52"
      >
        <div id="founders message block" className="">
          <div
            id="coFounder msg mobile"
            className=" mt-3 
          lg:hidden         "
          >
            <div id="pic">
              <img
                src="public/sl pics/pratyush_founder .png"
                alt="Pratyush sahoo"
                className="w-11/12  mx-auto"
              />
            </div>

            <div id="msg">
              <h2 className="text-3xl text-center my-4">Founder message</h2>

              <h4 className="text-lg text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                consequatur eos quaerat sit temporibus, impedit excepturi
                placeat delectus explicabo provident.
              </h4>
            </div>
          </div>

          <div id="cofounderDesktop" className="hidden lg:flex justify-between">
            <div id="msg" className="w-2/3">
              <h2 className="text-9xl text-left my-4 p-4">Founder's Message</h2>

              <h4 className="text-2xl text-left p-4 lg:text-4xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                consequatur eos quaerat sit temporibus, impedit excepturi
                placeat delectus explicabo provident. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Molestiae a unde consequuntur
                nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nobis exercitationem autem perspiciatis quos repellat dolorem
                aspernatur sed harum perferendis, quasi voluptatem, ipsa error!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                ullam doloremque ab qui expedita tempore eveniet voluptas nulla,
                sunt, vel perspiciatis iusto officiis.
              </h4>
            </div>

            <div id="pic" className="w-7/12">
              <div className="flex justify-center">
                <img
                  src="public/sl pics/pratyush_founder .png"
                  alt="Pratyush sahoo"
                  className="w-5/12    object-contain"
                />
              </div>
              <div>
                <h2 className="text-center text-xl font-semibold p-2">
                  Pratyush sahoo <br />[ Co-founder ]
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div id="mission" className="mx-auto">
          <div id="missCont" className="mx-auto">
            <div id="heading" className="mt-20 p-2">
              <h2 className="text-5xl font-bold text-center lg:text-7xl lg:py-8">
                <span className="text-8xl">O</span>ur Mission
              </h2>
            </div>

            <div className="w-11/12 my-5 mx-auto lg:flex">
              <div
                id="imagemis"
                className="my-3 flex justify-center items-center"
              >
                <img
                  src="https://i.pinimg.com/564x/ea/0c/ca/ea0cca6a099dd0dbd03e1ce427699355.jpg"
                  // src="./unsplashuhvrvdr7pg@2x.png"
                  alt="team pic"
                  className="object-contain h-"
                />
              </div>

              <div id="des" className="p-4 tracking-wider mt-6 lg:w-11/12 ">
                <h3 className="my-3 text-xl lg:text-5xl mt-2 p-3 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis quibusdam sint ullam ipsum amet nesciunt cum
                  recusandae tenetur, et tempora commodi asperiores maiores?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  cumque at enim maxime quisquam. Minus esse perspiciatis
                  excepturi, fuga dignissimos omnis vitae? Suscipit?
                  heyaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!!!
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda tempore eos odio in inventore aperiam expedita quas,
                  ratione architecto sunt dolore amet pariatur?
                </h3>
              </div>
            </div>
          </div>

          <div id="box" className="justify-evenly lg:flex">
            {/* <div
              id="box4"
              className="mt-4 w-5/6 h-90 mx-auto rounded-lg p-4 border-2 border-black"
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

              <div className="text-lg text-justify">
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, totam.
                </h4>
              </div>
            </div>

            <div
              id="box2"
              className="mt-4 w-5/6 h-90 mx-auto rounded-lg p-4 border-2 border-black"
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

              <div className="text-lg text-justify">
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, totam.
                </h4>
              </div>
            </div>

            <div
              id="box3"
              className="mt-4 w-5/6 h-90 mx-auto rounded-lg p-4 border-2 border-black"
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

              <div className="text-lg text-justify">
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, totam.
                </h4>
              </div>
            </div> */}

            <div>
              <Box />
            </div>
            <div>
              <Box />
            </div>
            <div>
              <Box />
            </div>
          </div>

          <div>
            <div id="des" className="p-9 mt-4 lg:w-11/12 ">
              <h3 className="my-3 text-xl lg:text-5xl mt-2 p-3 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                adipisicing elit. Dolor cumque at
                enaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!!!!!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda tempore eos odt pariatur?
                <br />
                <br />
                <ul>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
              </h3>
            </div>
          </div>

          <div id="button" className="">
            <NavLink to="https://docs.google.com/forms/d/e/1FAIpQLSeoPSQH1eX_w324reQJuWhXpKN1Flqh27rW2jekTiBBJj8KzQ/viewform?usp=send_form">
              <OrangeButton />
            </NavLink>
          </div>
        </div>

        <div id="vission">
          <VissionComp>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            dolorem rerum ab atque debitis maxime molestias esse quae, delectus
            dolor maiores facere doloribus mollitia officiis eius quia
            perferendis nulla facilis expedita eaque tenetur vitae quaerat
            reprehenderit? Molestiae vitae eligendi numquam aspernatur enim
            repellendus.
          </VissionComp>
        </div>

        <div id="why" className="my-28">
          <div>
            {" "}
            <h2 className="text-5xl font-bold text-center lg:text-7xl lg:py-8">
              Why SlateLabs ?
            </h2>
            <p className="text-xl mx-auto text-justify mt-7 p-3 lg:text-3xl lg:w-10/12  ">
              Lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, incidunt quas. Nostrum ullam tempore maxime,
              voluptatibus amet voluptas magnam est ipsa. ipsum dolor sit amet
              consectetur adipisicing elit. Iusto labore sint tenetur fugiat
              incidunt accusantium in.
            </p>
          </div>

          <div>
            <div className="flex mt-7">
              <div className="w-1/6 flex justify-end lg:pr-7">
                {" "}
                <img src="group-8784@2x.png" alt="tick" className="" />
              </div>

              <div className="w-4/5 flex text-left items-center pl-4 text-lg lg:text-2xl ">
                Support from great mentors
              </div>
            </div>

            <div className="flex mt-7">
              <div className="w-1/6 flex justify-end lg:pr-7">
                {" "}
                <img src="group-8784@2x.png" alt="tick" className="" />
              </div>

              <div className="w-4/5 flex text-left items-center pl-4 text-lg lg:text-2xl ">
                Support from great mentors
              </div>
            </div>

            <div className="flex mt-7">
              <div className="w-1/6 flex justify-end lg:pr-7">
                {" "}
                <img src="group-8784@2x.png" alt="tick" className="" />
              </div>

              <div className="w-4/5 flex text-left items-center pl-4 text-lg lg:text-2xl ">
                Support from great mentors
              </div>
            </div>
          </div>
        </div>

        <div id="teams">
          <div id="meettext">
            <div>
              <h2 className="text-5xl font-bold text-center lg:text-7xl lg:py-8">
                Meet the Team
              </h2>
            </div>

            <div>
              <h4
                className="text-2xl mx-auto mt-4 text-center p-2
              lg:w-10/12 lg:text-4xl
              "
              >
                Our team of experts are here to guide you through your journey.
              </h4>
            </div>
          </div>

          <div id="meetBoxx" className="my-4">
            <div>
              <h3 className="text-2xl py-2 text-center font-semibold underline">
                Executive members
              </h3>
            </div>

            <div className="bg-orange-200 rounded-3xl mx-auto lg:w-8/12 p-2  mt-3">
              <CarouselCustomNavigation />
            </div>
          </div>

          <div id="meetBoxx" className="my-5">
            <div>
              <h3 className="text-2xl p-2 text-center font-semibold underline">
                Teaching Faculty
              </h3>
            </div>
            {/* <CarouselCustomNavigation /> */}
            <div className="bg-orange-200 rounded-3xl mx-auto lg:w-8/12 p-2  mt-3">
              <CarouselCustomNavigationteacher />
            </div>
          </div>
        </div>
      </body>

      {/* <hr
        style={{
          background: "gray",
          color: "black",
          borderColor: "black",
          height: "1.4px",
        }}
      /> */}

      {/* <hr style="border-top: dotted 1px;" /> */}
      <footer>
        <FootMain />
        {/* <footer className="bg-orange-100 rounded-t-3xl"> */}
        {/* <Footer2 /> */}
        {/* 
        <div className="mt-6 pt-4">
          <div className="text-left text-3xl font-semibold px-4 ">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
          </div> */}

        {/* <div className="p-3 ">
            <form class="mt-4">
              <div class="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
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
          </div>
        </div> */}
        {/* 
        <div className="flex">
          <div className=" p-3">
            <h3 className="text-xl">SlateLabs</h3>
            <p className="text-md text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Deserunt.
            </p>
          </div>
        </div> */}
        {/* 
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
        </div> */}
        {/* 
        <div className="    ">
          <div className="flex items-center p-3 justify-around w-3/5 mx-auto">
            <FaFacebook size={20} />
            <FaTwitter size={20} />
            <GrInstagram size={20} />
            <BsLinkedin size={20} />
          </div>

          <div className="flex text-center items-center justify-center py-6">
            <h3 className="font-serif"> © 2024 Slate Labs Inc.</h3>
          </div>
        </div> */}
      </footer>
    </>
  );
};

export default AboutT;
