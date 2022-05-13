import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Brands from "../components/Brands"
import Market from "../components/Market"
import Solutions from "../components/Solutions"
import Head from "next/head";


export default function Home() {


  return (
    <>
    <Head>
    <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600;700&display=swap"
            rel="stylesheet"
          />
    </Head>
      <Navbar />
      <Header />
      <Brands/> 
      <Market/>
      <Solutions/>
    </>
  );
}
