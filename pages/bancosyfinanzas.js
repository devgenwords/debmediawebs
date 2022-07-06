import React, { useState, useEffect } from "react";
import Header from "../components/Banca/Header"
import Brands from "../components/Brands"
import Market from "../components/Banca/Market"
import Solutions from "../components/Banca/Solutions"
import Modern from "../components/Banca/Modern"
import Review from "../components/Review"
import Map from "../components/Map"
import Partner from "../components/Partner"
import Level from "../components/Level"
import Contact from "../components/Contact"
import Posts from "../components/Posts"


export default function Banca() {


  return (
    <>
      <Header />
      <Market />
      <Solutions color="banca" />
      <Modern />
      <Review />
      <Partner />
      <Level color="industriasColor" />
      <Contact />
      <Posts />
    </>
  );
}
