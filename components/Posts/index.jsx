import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { format, formatISO, parseISO } from "date-fns";
import { useState } from "react";
import Image from "next/image";

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
        href: `/posts/${slug}`,
      };
    })
    .filter((post) => post !== null);

  return {
    props: {
      posts,
    },
  };
};

export default function PostList({ posts }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

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
      <section
        id="blog"
        className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <div
            className={"wow fadeInUp w-full mx-auto text-center"}
            data-wow-delay=".1s"
            style={{ maxWidth: "570px", marginBottom: "100px" }}
          >
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              Our latest blog
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {getCurrentPagePosts().map((post, index) => (
              <div
                className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-lg bg-white shadow-one duration-300 dark:bg-dark"
                data-wow-delay=".1s"
                key={index}
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
                    alt="image"
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
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          {/* <Image src={blog.image} alt="author" fill /> */}
                        </div>
                      </div>
                      <div className="w-full">
                        <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                          By
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
                        {post.frontmatter.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
