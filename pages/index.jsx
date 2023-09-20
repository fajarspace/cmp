import React from "react";
import RootLayout from "./layout";
import { content } from "@/theme.config";

const index = () => {
  return (
    <RootLayout>
      <h1>{content.title}</h1>
      <p>{content.intro}</p>
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
