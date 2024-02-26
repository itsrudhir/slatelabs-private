import React,{ useState } from "react";
import Navbar from "./header";
import { Link } from "react-router-dom";


const HeadBoth = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 z-[200] w-full overflow-hidden rounded-b-2xl">
        
        <div id="laptopNav" className="hidden lg:block">
          <Navbar />
        </div>

        {/* <div
          id="mobileNav"
          className="flex w-full bg-orange-800 justify-between p-3 pt-4
        lg:hidden"
        >

          <div>
            <h1 className="text-3xl pl-2 font-bold text-white ">
              <Link to="/">SlateLabs</Link>
            </h1>
          </div>

            

          <div>

          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <img src="icon@2x.png" alt="" className="w-10 h-10 rounded-md" />
          </a>
          </div> 

        </div> */}
        <div id="mobileNav">
          {/* <HeaderTH/> */}

        </div>


      </header>
    </>
  );
};

export default HeadBoth;
