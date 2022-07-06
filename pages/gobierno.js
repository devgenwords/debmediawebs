import React, { useState, useEffect } from "react";
import Header from "../components/Gobierno/Header"
import Market from "../components/Gobierno/Market"
import Solutions from "../components/Gobierno/Solutions"
import Modern from "../components/Gobierno/Modern"
import Review from "../components/Review"
import Partner from "../components/Partner"
import Level from "../components/Level"
import Contact from "../components/Contact"
import Posts from "../components/Posts"


export default function Gobierno() {


  return (
    <>
      <Header />
      <Market />
      <Solutions />
      <Modern />
      <Review />
      <Partner />
      <Level color="industriasColor" />
      <Contact />
      <Posts />
    </>
  );
}
