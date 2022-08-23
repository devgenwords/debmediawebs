import React, { useState, useEffect } from "react";
import Header from "../components/Partners/Header"
import Market from "../components/Partners/Market"
import Steps from "../components/Partners/Steps"
import Contact from "../components/Contact"


export default function Partners() {


  return (
    <>
      <Header /> 
      <Market />
      <Steps />
      <Contact />
    </>
  );
}
