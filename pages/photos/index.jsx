import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";
import RootLayout from "../layout";
import Link from "next/link";

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("content/photos"));

  const photos = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("content/photos", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    const slug = filename.split(".")[0];
    return {
      frontmatter,
      slug,
      href: `/${slug}`,
    };
  });

  return {
    props: {
      photos,
    },
  };
};

const Photos = ({ photos }) => {
  return (
    <>
      <RootLayout>
        <h1>Photos</h1>
        {photos.map((photo, index) => (
          <div key={index}>
            <p>{photo.frontmatter.description}</p>
            <img
              style={{
                maxWidth: "100%",
                display: "block",
                margin: 0,
                border: "none",
                padding: 0,
              }}
              alt=""
              aria-hidden="true"
              src={photo.frontmatter.photo}
            />

            <p>
              <a
                target="_blank"
                rel="noopener"
                href="https://unsplash.com/photos/WeYamle9fDM"
              >
                Unsplash &#8599;
              </a>
            </p>
          </div>
        ))}
      </RootLayout>
    </>
  );
};

export default Photos;
