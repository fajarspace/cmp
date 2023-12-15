import React, { useState } from "react";
import RootLayout from "./layout";
import { SEO, metadata } from "@/next-seo.config";
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
import { DefaultSeo } from "next-seo";

const Home = ({ posts, photos, testimonials }) => {
  return (
    <RootLayout>
      <DefaultSeo
        title="CV. Cipta Mandiri Perkasa"
        description="CV. Cipta Mandiri Perkasa: Menghadirkan Keindahan dan Kekokohan dalam Kubah GRC, Kaligrafi Masjid, dan Produk GRC Unggulan lainnya. Berpengalaman puluhan tahun, kami mengukir keunggulan melalui karya-karya inovatif seperti GRC Krawangan, GRC Ornamen, GRC Menara Masjid, dan Washing Motif Awan. Temukan keberhasilan dan keajaiban dalam setiap detail dengan layanan terbaik kami."
        {...SEO}
      />
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
