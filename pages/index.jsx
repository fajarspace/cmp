import React from "react";
import RootLayout from "./layout";

const index = () => {
  return (
    <RootLayout>
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
