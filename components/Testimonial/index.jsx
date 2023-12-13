import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";
import Link from "next/link";
import { metadata } from "@/next-seo";
import { format, formatISO, parseISO } from "date-fns";
import { useState } from "react";
import Image from "next/image";

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("content/testimonials"));

  const testimonials = await Promise.all(
    files.map(async (filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join("content/testimonials", filename),
        "utf-8"
      );
      const { data: frontmatter, content } = matter(markdownWithMeta);

      if (frontmatter.draft === true) {
        return null;
      }

      const slug = filename.split(".")[0];
      const dateISO = formatISO(frontmatter.date);

      // Serialize MDX content for each testimonial

      return {
        frontmatter: {
          ...frontmatter,
          date: dateISO,
          content,
        },
        slug,
        href: `/testimonials/${slug}`,
      };
    })
  );

  return {
    props: {
      testimonials,
    },
  };
};
export default function TestimonialList({ testimonials }) {
  const pageTitle = `${metadata.title} - Posts`;
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 6;

  const filteredTestimonials = (testimonials || [])
    .sort(
      (a, b) => new Date(b.frontmatter?.date) - new Date(a.frontmatter?.date)
    )

    .filter((testimonial) =>
      testimonial.frontmatter.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );

  // Function to get a slice of the testimonials for the current page
  const getCurrentPageTestimonial = () => {
    const startIndex = (currentPage - 1) * testimonialsPerPage;
    const endIndex = startIndex + testimonialsPerPage;
    return filteredTestimonials.slice(startIndex, endIndex);
  };
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* <SectionTitle
          title="What Our Users Says"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        /> */}
        <div
          className={"wow fadeInUp w-full mx-auto text-center"}
          data-wow-delay=".1s"
          style={{ maxWidth: "570px", marginBottom: "100px" }}
        >
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            What Our Users Says
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {getCurrentPageTestimonial().map((testimonial, index) => (
            <div className="w-full" key={index}>
              <div
                className="wow fadeInUp shadow-two dark:shadow-three dark:hover:shadow-gray-dark rounded-lg bg-white p-8 duration-300 hover:shadow-one dark:bg-dark lg:px-5 xl:px-8"
                data-wow-delay=".1s"
              >
                {/* <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div> */}
                <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
                  “{testimonial.frontmatter.content}
                </p>
                <div className="flex items-center">
                  <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
                    <Image
                      src={testimonial.frontmatter.avatar}
                      alt={testimonial.frontmatter.name}
                      fill
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
                      {testimonial.frontmatter.name}
                    </h3>
                    <p className="text-sm text-body-color">
                      {testimonial.frontmatter.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-5 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
