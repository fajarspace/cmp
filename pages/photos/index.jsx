import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";
import RootLayout from "@/pages/layout";
import { metadata } from "@/next-seo";
import styles from "./page.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { format, formatISO, parseISO } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";

// Number of photos to display per page
const photosPerPage = 20;

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("content/photos"));

  const photos = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join("content/photos", filename),
        "utf-8"
      );
      const { data: frontmatter } = matter(markdownWithMeta);

      if (frontmatter.draft === true) {
        return null;
      }

      const slug = filename.split(".")[0];
      const dateISO = formatISO(frontmatter.date);

      return {
        frontmatter: {
          ...frontmatter,
          date: dateISO,
        },
        slug,
        href: `/photos/${slug}`,
      };
    })
    .filter((photo) => photo !== null);

  return {
    props: {
      photos,
    },
  };
};

const Photos = ({ photos }) => {
  const pageTitle = `${metadata.title} - Photos`;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(photos.length / photosPerPage);

  // Function to get a slice of the photos for the current page
  const getCurrentPagePhotos = () => {
    const startIndex = (currentPage - 1) * photosPerPage;
    const endIndex = startIndex + photosPerPage;
    return photos.slice(startIndex, endIndex);
  };

  return (
    <>
      <RootLayout>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <Breadcrumb
          pageName="Photos"
          description="CV. Cipta Mandiri Perkasa adalah perusahaan yang berkompeten dan berpengalaman puluhan tahun dalam bidang Kubah GRC, Kaligrafi Masjid, GRC Krawangan, GRC Ornamen, GRC Menara Masjid, Washing Motif Awan dsb.."
        />
        <section
          id="photos"
          className="dark:bg-bg-color-dark bg-white relative z-10 py-16 md:py-20 lg:py-28"
        >
          <div className="container columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
            {getCurrentPagePhotos().map((photo, index) => (
              <Link
                key={index}
                href={photo.href}
                as=""
                // ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
                // shallow
                className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
              >
                <Image
                  alt="Next.js Conf photo"
                  className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                  style={{ transform: "translate3d(0, 0, 0)" }}
                  // placeholder="blur"
                  // blurDataURL=""
                  src={photo.frontmatter.image}
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
                />
              </Link>
            ))}

            {/* ))} */}
          </div>
        </section>
      </RootLayout>
    </>
  );
};

export default Photos;
