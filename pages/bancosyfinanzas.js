import React, { useState, useEffect } from "react";
import Header from "../components/Banca/Header"
import Market from "../components/Banca/Market"
import Solutions from "../components/Banca/Solutions"
import Review from "../components/Review"
import SpecsIndus from "../components/SpecsIndus"
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
      <SpecsIndus indus="banca" />
      <Review />
      <Partner />
      <Level color="industriasColor" />
      <Contact />
      <Posts indistry="banca" />
    </>
  );
}
