import Head from "next/head";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { metadata } from "@/next-seo.config";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappIcon from "@/components/WhatsappIcon";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
        <Navbar />
        {children}
        <Footer />
        <WhatsappIcon />
      </ThemeProvider>
    </>
  );
}
