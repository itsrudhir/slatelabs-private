import React from 'react'
import Navbar from '../../component/header/header'
import Orangebox from '../../component/orangebox/orangebox';
import About from '../../component/aboutUs/about';
import Vision from '../../component/our vission/Vision';
// import Mission from '../../component/ourMission/mission';
import Testimony from '../../component/testimony/Testimony';
// import Slider from '../../component/slider/Slider';
import FootMain from '../../component/footer/FootMain';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="body">


      <Orangebox />
      <Testimony /> 
      <About />
      <Mission />
      <Vision />
      {/* <Slider/> */}
      <FootMain/>


      </div>

      

    </div>
  );
};

export default Home;