import React from "react";
import RootLayout from "./layout";
import { metadata } from "@/theme.config";
import Head from "next/head";

const index = () => {
  return (
    <RootLayout>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <h1>About👋</h1>
      <p>
        Saya Fajar Agung. Suka ngoding yang gak jelas, Sedikit bicara banyak
        mikir (bukan aksi).
      </p>
      <p>
        <a
          target="_blank"
          rel="noopener"
          href="https://vercel.com/new/git/external?repository-url=https://github.com/vercel-solutions/nextjs-portfolio-starter&amp;project-name=portfolio&amp;repository-name=portfolio"
        ></a>
      </p>
      <hr />
    </RootLayout>
  );
};

export default index;
