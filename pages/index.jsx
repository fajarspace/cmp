import React from "react";
import RootLayout from "./layout";
import { metadata } from "@/next-seo";
import Head from "next/head";
import bukuCss from "../public/yaha.jpg";
import Image from "next/image";
import ScrollUp from "./components/Common/ScrollUp";
import Hero from "./components/Hero";
import AboutSectionOne from "./components/About/AboutSectionOne";
import AboutSectionTwo from "./components/About/AboutSectionTwo.jsx";
import Testimonial from "./components/Testimonial";
import Maps from "./components/Maps";

const index = () => {
  return (
    <RootLayout>
      <Head>
        <meta property="og:image" content="" />
      </Head>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonial />
      <Maps />
    </RootLayout>
  );
};

export default index;
