import React, { useState, useEffect } from "react";
import Header from "../components/Header"
import Brands from "../components/Brands"
import Market from "../components/Market"
import Solutions from "../components/Solutions"
import Modern from "../components/Modern"
import Review from "../components/Review"
import Map from "../components/Map"
import Partner from "../components/Partner"

export default function Home() {


  return (
    <>
      <Header />
      {/* <Brands /> */}
      <Market />
      <Solutions />
      <Modern />
      <Review />
      <Map />
      <Partner />
    </>
  );
}
