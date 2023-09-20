import Head from "next/head";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { metadata } from "@/theme.config";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={metadata.description} />
        <meta property="og:site_name" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:image" content={metadata.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <link rel="shortcut icon" href={metadata.favicon} type="image/x-icon" />
      </Head>
      <ThemeProvider>
        <div className={inter.className}>
          <article className="container prose md:prose">
            <Navbar />
            {children}
            <Footer />
          </article>
        </div>
      </ThemeProvider>
    </>
  );
}
