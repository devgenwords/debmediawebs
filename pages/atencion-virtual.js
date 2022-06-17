import React, { useState, useEffect } from "react";
import Header from "../components/Videollamada/Header"
import Brands from "../components/Brands"
import Market from "../components/Videollamada/Market"
import Flow from "../components/Videollamada/Flow"
import Review from "../components/Review"
import Map from "../components/Map"
import Partner from "../components/Partner"
import Industries from "../components/Industries"
import Modern from "../components/Videollamada/Modern"
import Services from "../components/Services"
import Level from "../components/Level"
import Contact from "../components/Contact"
import Posts from "../components/Posts"


export default function Videocall() {


  return (
    <>
      <Header />
      <Brands />
      <Market />
      <Flow />
      {/* <Modern /> */}
      <Review />
      <Industries />
      <Map />
      <Partner />
      <Services />
      <Level />
      <Contact />
      <Posts />
    </>
  );
}
