import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";
import Link from "next/link";
import { format, formatISO, parseISO } from "date-fns";
import { useState } from "react";
import Image from "next/image";

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

export default function PhotoList({ photos }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 6;

  const filteredPhotos = (photos || [])
    .sort(
      (a, b) => new Date(b.frontmatter?.date) - new Date(a.frontmatter?.date)
    )

    .filter((photo) =>
      photo.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Function to get a slice of the photos for the current page
  const getCurrentPagePhotos = () => {
    const startIndex = (currentPage - 1) * photosPerPage;
    const endIndex = startIndex + photosPerPage;
    return filteredPhotos.slice(startIndex, endIndex);
  };

  return (
    <>
      <section
        id="photos"
        className="dark:bg-bg-color-dark bg-white relative z-10 py-16 md:py-20 lg:py-28"
      >
        <div className="container columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4">
          <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center">
                {/* <Bridge /> */}p
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
            {/* <Logo /> */}
            logo
            <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
              2022 Event Photos
            </h1>
            <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
              Our incredible Next.js community got together in San Francisco for
              our first ever in-person conference!
            </p>
            <Link
              className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
              href="https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-cloudinary&project-name=nextjs-image-gallery&repository-name=with-cloudinary&env=NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET,CLOUDINARY_FOLDER&envDescription=API%20Keys%20from%20Cloudinary%20needed%20to%20run%20this%20application"
              target="_blank"
              rel="noreferrer"
            >
              LIhat semua Galeri
            </Link>
          </div>
          {getCurrentPagePhotos().map((photo, index) => (
            <Link
              key={index}
              href=""
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
    </>
  );
}
