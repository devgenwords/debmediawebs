import React, { useState, useEffect } from "react";
import Header from "../components/Retail/Header"
import Market from "../components/Retail/Market"
import Solutions from "../components/Retail/Solutions"
import Modern from "../components/Retail/Modern"
import Review from "../components/Review"
import Partner from "../components/Partner"
import Level from "../components/Level"
import Contact from "../components/Contact"
import Posts from "../components/Posts"


export default function Retail() {


  return (
    <>
      <Header />
      <Market />
      <Solutions />
      <Modern />
      <Review />
      <Partner />
      <Level />
      <Contact />
      <Posts />
    </>
  );
}
