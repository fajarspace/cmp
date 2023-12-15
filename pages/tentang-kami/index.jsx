import React from "react";
import RootLayout from "../layout";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { DefaultSeo } from "next-seo";
import { SEO } from "@/next-seo.config";

const AboutPage = () => {
  return (
    <RootLayout>
      <DefaultSeo
        title="Tentang kami - CV. Cipta Mandiri Perkasa"
        description="asdad"
        {...SEO}
      />
      <Breadcrumb pageName="Tentang kami" />
      <AboutSectionOne />
    </RootLayout>
  );
};

export default AboutPage;
