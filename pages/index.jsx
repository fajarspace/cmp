import React, { useState } from "react";
import RootLayout from "./layout";
import { metadata } from "@/next-seo";
import Head from "next/head";
import bukuCss from "../public/yaha.jpg";
import Image from "next/image";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo.jsx.jsx";
import Testimonial from "@/components/Testimonial";
import Maps from "@/components/Maps";
import PostList, { getStaticProps } from "@/components/Posts";

const Home = ({ posts }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7;
  return (
    <RootLayout>
      {/* <Head>
        <meta property="og:image" content="" />
      </Head> */}
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <AboutSectionTwo />
      <PostList
        posts={posts}
        searchQuery={searchQuery}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
      />
      <Testimonial />
      <Maps />
    </RootLayout>
  );
};

export { getStaticProps };

export default Home;
