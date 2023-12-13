import React, { useState } from "react";
import RootLayout from "./layout";
import { metadata } from "@/next-seo";
import Head from "next/head";
import Image from "next/image";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo.jsx.jsx";
import Features from "@/components/Features";
import Maps from "@/components/Maps";
import PostList, {
  getStaticProps as getStaticPropsPosts,
} from "@/components/Posts";
import PhotoList, {
  getStaticProps as getStaticPropsPhotos,
} from "@/components/Photos";
import TestimonialList, {
  getStaticProps as getStaticPropsTestimonials,
} from "@/components/Testimonial";

const Home = ({ posts, photos, testimonials }) => {
  return (
    <RootLayout>
      {/* <Head>
        <meta property="og:image" content="" />
      </Head> */}
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Features />
      <PostList posts={posts} />
      <PhotoList photos={photos} />
      <TestimonialList testimonials={testimonials} />
      <Maps />
    </RootLayout>
  );
};

export const getStaticProps = async () => {
  const postsProps = await getStaticPropsPosts();
  const photosProps = await getStaticPropsPhotos();
  const testimonialProps = await getStaticPropsTestimonials();

  return {
    props: {
      posts: postsProps.props.posts,
      photos: photosProps.props.photos,
      testimonials: testimonialProps.props.testimonials,
    },
  };
};
export default Home;
