import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";
import RootLayout from "../layout";
import Link from "next/link";
import { metadata } from "@/theme.config";
import styles from "./page.module.css";
import { useRouter } from "next/router";

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
  const pageTitle = `${metadata.title} - Photos`;
  const router = useRouter();
  const { page } = router.query;

  const itemsPerPage = 3; // Ubah sesuai dengan jumlah foto per halaman yang Anda inginkan
  const startIndex = page ? (parseInt(page) - 1) * itemsPerPage : 0;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPhotos = photos.slice(startIndex, endIndex);

  const totalPages = Math.ceil(photos.length / itemsPerPage);

  return (
    <>
      <RootLayout>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <h1>Photos</h1>
        {paginatedPhotos.map((photo, index) => (
          <div key={index}>
            <img
              className={styles.photo}
              alt={photo.title}
              aria-hidden="true"
              src={photo.frontmatter.photo}
            />
            <p>{photo.frontmatter.description}</p>
            <p>
              <a target="_blank" rel="noopener" href={photo.frontmatter.photo}>
                Full screen &#8599;
              </a>
            </p>
          </div>
        ))}

        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, i) => (
            <Link
              className={`${styles.span} active`}
              key={i}
              href={`/photos?page=${i + 1}`}
            >
              <span className={parseInt(page) === i + 1 ? "active" : ""}>
                {i + 1}
              </span>
            </Link>
          ))}
        </div>
        <hr />
      </RootLayout>
    </>
  );
};

export default Photos;
