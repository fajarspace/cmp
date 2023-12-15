import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { SEO } from "@/next-seo.config";
import RootLayout from "@/pages/layout";
import { NextSeo } from "next-seo";

const ContactPage = () => {
  return (
    <>
      <RootLayout>
        <NextSeo
          title="Kontak - CV. Cipta Mandiri Perkasa"
          description="Untuk pertanyaan lebih lanjut, permintaan penawaran, atau informasi detail lainnya, jangan ragu untuk menghubungi tim kami. Kami siap membantu Anda dalam mewujudkan proyek seni arsitektur dan konstruksi yang berkualitas tinggi."
          {...SEO}
        />
        <Breadcrumb pageName="Kontak" description="Hubungi Kami" />
        <Contact />
      </RootLayout>
    </>
  );
};

export default ContactPage;
