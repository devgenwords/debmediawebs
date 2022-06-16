import React, { useState, useEffect } from "react";
import Header from "../components/Home/Header"
import Brands from "../components/Brands"
import Market from "../components/Home/Market"
import Solutions from "../components/Home/Solutions"
import Modern from "../components/Home/Modern"
import Review from "../components/Review"
import Map from "../components/Map"
import Partner from "../components/Partner"
import Level from "../components/Level"
import Contact from "../components/Contact"
import Posts from "../components/Posts"
import Footer from "../components/Footer"


export default function Home() {


  return (
    <>
      <Header />
      <Brands />
      <Market />
      <Solutions />
      <Modern />
      <Review />
      <Map />
      <Partner />
      <Level />
      <Contact />
      <Posts />
    </>
  );
}
