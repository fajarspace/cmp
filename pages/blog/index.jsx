import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";
import RootLayout from "@/pages/layout";
import Link from "next/link";
import { format, formatISO, parseISO } from "date-fns";
import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { NextSeo } from "next-seo";

// Number of posts to display per page
const postsPerPage = 7;

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("content/posts"));

  const posts = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join("content/posts", filename),
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
        href: `/blog/${slug}`,
      };
    })
    .filter((post) => post !== null);

  return {
    props: {
      posts,
    },
  };
};

export default function Posts({ posts }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = posts
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
    .filter((post) =>
      post.frontmatter.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Function to get a slice of the posts for the current page
  const getCurrentPagePosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return filteredPosts.slice(startIndex, endIndex);
  };

  return (
    <>
      <NextSeo
        title="Blog - CV. Cipta Mandiri Perkasa"
        description="Jelajahi artikel-artikel menarik yang membahas tren terbaru dalam dunia desain kubah GRC, keindahan Kaligrafi Masjid, hingga inovasi GRC Krawangan dan Ornamen yang memukau. "
        openGraph={{
          type: "website", // Jenis halaman
          locale: "id_ID", // Bahasa dan regional setting
          url: "https://cipta-mandiri-perkasa.com/blog", // URL halaman
          site_name: "CV. Cipta Mandiri Perkasa Blog", // Nama situs
          images: [
            {
              url: "https://www.cipta-mandiri-perkasa.com/public/images/cmp-logo.png",
              width: 850,
              height: 650,
              alt: "Blog",
            },
          ],
          site_name: "CV. Cipta Mandiri Perkasa Blog",
        }}
      />
      <RootLayout>
        <Breadcrumb
          pageName="Blog"
          description="Jelajahi artikel-artikel menarik yang membahas tren terbaru dalam dunia desain kubah GRC, keindahan Kaligrafi Masjid, hingga inovasi GRC Krawangan dan Ornamen yang memukau."
        />
        <section className="pb-[120px] pt-[120px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap justify-center">
              {getCurrentPagePosts().map((post, index) => (
                <div
                  key={index}
                  className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                >
                  <div
                    className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-lg bg-white shadow-one duration-300 dark:bg-dark"
                    data-wow-delay=".1s"
                  >
                    <Link
                      href={post.href}
                      className="relative block aspect-[30/22] w-full"
                    >
                      <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
                        {post.frontmatter.tags}
                      </span>
                      <Image
                        src={post.frontmatter.featured_image}
                        alt="post"
                        fill
                      />
                    </Link>
                    <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                      <h3>
                        <Link
                          href={post.href}
                          className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
                        >
                          {post.frontmatter.title}
                        </Link>
                      </h3>
                      <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                        {post.frontmatter.description &&
                          `${post.frontmatter.description.slice(0, 100)}...`}
                      </p>
                      <div className="flex items-center">
                        <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
                          {/* <div className="mr-4">
                            <div className="relative h-10 w-10 overflow-hidden rounded-full">
                              <Image src={post.image} alt="author" fill />
                            </div>
                          </div> */}
                          <div className="w-full">
                            <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                              Author
                            </h4>
                            <p className="text-xs text-body-color">
                              {post.frontmatter.author}
                            </p>
                          </div>
                        </div>
                        <div className="inline-block">
                          <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                            Date
                          </h4>
                          <p className="text-xs text-body-color">
                            {format(
                              parseISO(post.frontmatter.date),
                              "dd MMM yyyy"
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="wow fadeInUp -mx-4 flex flex-wrap"
              data-wow-delay=".15s"
            >
              <div className="w-full px-4">
                <ul className="flex items-center justify-center pt-8">
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                      Prev
                    </a>
                  </li>
                  <li className="mx-1">
                    {Array.from({ length: totalPages }, (_, i) => (
                      <a
                        key={i}
                        className={`flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white${
                          i + 1 === currentPage ? "" : ""
                        }`}
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </a>
                    ))}
                  </li>
                  <li className="mx-1">
                    <a
                      href="#0"
                      className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`${styles.pageButton} ${
                  i + 1 === currentPage ? styles.activePage : ""
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div> */}
        </section>
      </RootLayout>
    </>
  );
}
