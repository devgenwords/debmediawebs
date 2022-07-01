import React, { useState, useEffect } from "react";
import Header from "../components/Utilities/Header"
import Market from "../components/Utilities/Market"
import Solutions from "../components/Utilities/Solutions"
import Modern from "../components/Utilities/Modern"
import Review from "../components/Review"
import Partner from "../components/Partner"
import Level from "../components/Level"
import Contact from "../components/Contact"
import Posts from "../components/Posts"


export default function Utilities() {


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
