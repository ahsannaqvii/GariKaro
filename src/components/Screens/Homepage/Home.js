import React from "react";
import Animator from "./Animator";
import Homepage from "./Homepage";
import SectionPage from "./SectionPage";
import { homeObjOne, homeObjTwo } from "./SectionData";
import Footer2 from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Homepage />
      <Animator />
      <SectionPage {...homeObjOne} />
      <SectionPage {...homeObjTwo} />
      <Footer2/>
    </div>
  );
};

export default Home;
