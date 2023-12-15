import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { SEO } from "@/next-seo.config";
import RootLayout from "@/pages/layout";
import { DefaultSeo } from "next-seo";

const ContactPage = () => {
  return (
    <>
      <RootLayout>
        <DefaultSeo
          title="Kontak - CV. Cipta Mandiri Perkasa"
          description="Terima kasih atas minat dan kepercayaan Anda pada CV. Cipta Mandiri Perkasa. Kami senang dapat berkomunikasi dengan Anda. Untuk pertanyaan lebih lanjut, permintaan penawaran, atau informasi detail lainnya, jangan ragu untuk menghubungi tim kami. Kami siap membantu Anda dalam mewujudkan proyek seni arsitektur dan konstruksi yang berkualitas tinggi."
          {...SEO}
        />
        <Breadcrumb pageName="Kontak" description="Hubungi Kami" />

        <Contact />
      </RootLayout>
    </>
  );
};

export default ContactPage;
