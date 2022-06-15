import React, { useState, useEffect } from "react";
import Header from "../components/Citas/Header"
import Brands from "../components/Brands"
import Market from "../components/Citas/Market"
import Steps from "../components/Citas/Steps"
import Review from "../components/Review"
import Map from "../components/Map"
import Partner from "../components/Partner"
import Industries from "../components/Industries"
import Modern from "../components/Citas/Modern"
import Services from "../components/Services"
import Level from "../components/Citas/Level"
import Contact from "../components/Contact"
import Posts from "../components/Posts"
import Footer from "../components/Footer"


export default function Citas() {


  return (
    <>
      <Header /> 
      <Brands />
      <Market />
      <Steps />
      <Modern />
      <Review />
      <Industries />
      <Map />
      <Partner />
      <Services />
      <Level />
      <Contact />
      <Posts />
      <Footer />
    </>
  );
}
