import React from "react";
import img from './Images/b1.svg'
import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home = () => {
  return (
    <>
     <Common
      name="Grow Your business with "
      imgsrc={img}
      visit="/about"
      btname="Get Started"
     />
    </>
  );
}

export default Home;