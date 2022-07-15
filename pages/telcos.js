import React, { useState, useEffect } from "react";
import Header from "../components/Telcos/Header"
import Market from "../components/Telcos/Market"
import Solutions from "../components/Telcos/Solutions"
import SpecsIndus from "../components/SpecsIndus"
import Review from "../components/Review"
import Partner from "../components/Partner"
import Level from "../components/Level"
import Contact from "../components/Contact"
import Posts from "../components/Posts"


export default function Telcos() {


  return (
    <>
      <Header />
      <Market />
      <Solutions color="telcos" />
      <SpecsIndus />
      <Review />
      <Partner />
      <Level color="industriasColor" />
      <Contact />
      <Posts indistry="telcos" />
    </>
  );
}
