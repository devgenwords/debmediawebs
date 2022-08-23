import React, { useState, useEffect } from "react";
import Header from "../components/Nosotros/Header"
import Market from "../components/Nosotros/Market"
import Historia from "../components/Nosotros/Historia"
import Solutions from "../components/Nosotros/Solutions"
import Contact from "../components/Contact"


export default function Banca() {


  return (
    <>
      <Header />
      <Market />
      <Historia />
      <Solutions />
      <Contact />
    </>
  );
}
