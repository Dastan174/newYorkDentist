import React from "react";
import Maps from "../maps/Maps";
import Vakancies from "../vakansies/Vakancies";
import Requits from "../requits/Requits";
import WeUse1 from "../../weUse/WeUse1";
import Teeth from "../Teeth/Teeth";
import Index1 from "../header/index1";
import Index2 from "../header/index2";
import Index3 from "../header/index3";
import Rating from "../rating/Rating";
import Our from "../Our/Our";
import News from "../news/News";
import Form1Home from "../form1Home/Form1Home";
import Form2Home from "../form2Home/Form2Home";
import Doctor from "../DoctorMen/Doctor";
import Footer from "../FooterEnd/Footer";
import Footer2 from "../FooterEnd/Footer2";
import Footer3 from "../FooterEnd/Footer3";
import Footer4 from "../FooterEnd/Footer4";
import Equiment from "../../equipment/Equiment";
import WeUse from "../../weUse/WeUse";
const Home = () => {
  return (
    <div>
      <Index1 />
      <Index2 />
      <Index3 />
      {/* <Teeth /> */}
      <Rating />
      <Our />
      <News />
      <Form1Home />
      {/* <Doctor /> */}
      <Form2Home />
      <Footer />
      <Footer2 />
      <Footer3 />
      <Footer4 />
      <Equiment />
      <WeUse />
      <WeUse1 />
      <Requits />
      <Vakancies />
      <Maps />
    </div>
  );
};

export default Home;
