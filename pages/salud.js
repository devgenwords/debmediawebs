import React, { useState, useEffect } from "react";
import Header from "../components/Salud/Header"
import Market from "../components/Salud/Market"
import Solutions from "../components/Salud/Solutions"
import Modern from "../components/Salud/Modern"
import Review from "../components/Review"
import Map from "../components/Map"
import Partner from "../components/Partner"
import Level from "../components/Level"
import Contact from "../components/Contact"
import Posts from "../components/Posts"


export default function Salud() {


  return (
    <>
      <Header />
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
