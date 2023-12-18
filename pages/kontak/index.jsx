import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import RootLayout from "@/pages/layout";
import { NextSeo } from "next-seo";

const ContactPage = () => {
  return (
    <>
      <RootLayout>
        <NextSeo
          title="Kontak - CV. Cipta Mandiri Perkasa"
          description="Untuk pertanyaan lebih lanjut, permintaan penawaran, atau informasi detail lainnya, jangan ragu untuk menghubungi tim kami. Kami siap membantu Anda dalam mewujudkan proyek seni arsitektur dan konstruksi yang berkualitas tinggi."
          openGraph={{
            type: "website", // Jenis halaman
            locale: "id_ID", // Bahasa dan regional setting
            url: "https://cipta-mandiri-perkasa.com/kontak", // URL halaman
            site_name: "CV. Cipta Mandiri Perkasa Kontak", // Nama situs
            images: [
              {
                url: "https://www.cipta-mandiri-perkasa.com/public/images/cmp-logo.png",
                width: 850,
                height: 650,
                alt: "Kontak",
              },
            ],
            site_name: "CV. Cipta Mandiri Perkasa Kontak",
          }}
        />
        <Breadcrumb pageName="Kontak" description="Hubungi Kami" />
        <Contact />
      </RootLayout>
    </>
  );
};

export default ContactPage;
