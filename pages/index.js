import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Brands from "../components/Brands"
import Market from "../components/Market"
import Solutions from "../components/Solutions"


export default function Home() {


  return (
    <>
      <Navbar />
      <Header />
      <Brands/> 
      <Market/>
      <Solutions/>
    </>
  );
}
