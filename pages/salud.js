import React, { useState, useEffect } from "react";
import Header from "../components/Salud/Header"
import Market from "../components/Salud/Market"
import Solutions from "../components/Salud/Solutions"
import SpecsIndus from "../components/SpecsIndus"
import Review from "../components/Review"
import Partner from "../components/Partner"
import Level from "../components/Level"
import Contact from "../components/Contact"
import Posts from "../components/Posts"


export default function Salud() {


  return (
    <>
      <Header />
      <Market />
      <Solutions color="salud" />
      <SpecsIndus />
      <Review />
      <Partner />
      <Level color="industriasColor" />
      <Contact />
      <Posts indistry="salud" />
    </>
  );
}
