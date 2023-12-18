import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import RootLayout from "@/pages/layout";
import { format } from "date-fns";
import Image from "next/image";
import TagButton from "@/components/Posts/TagButton";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { NextSeo } from "next-seo";

const DetailPost = ({
  frontMatter: { title, date, description, featured_image, tags, author, href },
  mdxSource,
}) => {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const titleUrl = `${title} - CV. Cipta Mandiri Perkasa Blog`;
  const formattedDate = format(new Date(date[0]), "dd MMM yyyy");
  return (
    <>
      <RootLayout>
        <NextSeo
          title={titleUrl}
          description={description}
          canonical={href}
          openGraph={{
            type: "article",
            article: {
              publishedTime: date,
              modifiedTime: date,
              authors: [author],
              tags: [tags],
            },
            images: [
              {
                url: featured_image,
                width: 850,
                height: 650,
                alt: title,
              },
            ],
            url: href,
            site_name: "CV. Cipta Mandiri Perkasa Blog",
          }}
        />

        <section className="pb-[120px] pt-[150px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap justify-center">
              <div className="w-full px-4 lg:w-8/12">
                <div>
                  <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    {title}
                  </h1>
                  <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                    <div className="flex flex-wrap items-center">
                      <div className="mb-5 mr-10 flex items-center">
                        <div className="mr-4">
                          {/* <div className="relative h-10 w-10 overflow-hidden rounded-full">
                            <Image
                              src="/images/blog/author-02.png"
                              alt="author"
                              fill
                            />
                          </div> */}
                        </div>
                        <div className="w-full">
                          <span className="mb-1 text-base font-medium text-body-color">
                            Author <span>{author}</span>
                          </span>
                        </div>
                      </div>
                      <div className="mb-5 flex items-center">
                        <p className="mr-5 flex items-center text-base font-medium text-body-color">
                          <span className="mr-3">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              className="fill-current"
                            >
                              <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                              <path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
                              <path d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z" />
                              <path d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z" />
                              <path d="M3.89531 11.1606H3.10666C2.96327 11.1606 2.86768 11.2562 2.86768 11.3996V12.1644C2.86768 12.3078 2.96327 12.4034 3.10666 12.4034H3.89531C4.03871 12.4034 4.1343 12.3078 4.1343 12.1644V11.3996C4.1343 11.2562 4.03871 11.1606 3.89531 11.1606Z" />
                              <path d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z" />
                              <path d="M8.93828 11.1606H8.14963C8.00624 11.1606 7.91064 11.2562 7.91064 11.3996V12.1644C7.91064 12.3078 8.00624 12.4034 8.14963 12.4034H8.93828C9.08167 12.4034 9.17727 12.3078 9.17727 12.1644V11.3996C9.17727 11.2562 9.08167 11.1606 8.93828 11.1606Z" />
                              <path d="M11.4715 11.1606H10.6828C10.5394 11.1606 10.4438 11.2562 10.4438 11.3996V12.1644C10.4438 12.3078 10.5394 12.4034 10.6828 12.4034H11.4715C11.6149 12.4034 11.7105 12.3078 11.7105 12.1644V11.3996C11.7105 11.2562 11.591 11.1606 11.4715 11.1606Z" />
                              <path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z" />
                            </svg>
                          </span>
                          {formattedDate}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      <MDXRemote {...mdxSource} />
                    </div>

                    <div className="items-center justify-between sm:flex">
                      <div className="mb-5">
                        <h4 className="mb-3 text-sm font-medium text-body-color">
                          Tags :
                        </h4>
                        <div className="flex items-center">
                          <TagButton text={tags} />
                        </div>
                      </div>
                      <div className="mb-5">
                        <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                          Share this post :
                        </h5>
                        <div className="flex items-center sm:justify-end">
                          <div className="flex items-center space-x-4">
                            <FacebookShareButton url={url} quote={title}>
                              <svg
                                width="9"
                                height="18"
                                viewBox="0 0 9 18"
                                className="fill-current"
                              >
                                <path d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z" />
                              </svg>
                            </FacebookShareButton>
                            <TwitterShareButton url={url} title={title}>
                              <svg
                                width="18"
                                height="14"
                                viewBox="0 0 18 14"
                                className="fill-current"
                              >
                                <path d="M15.5524 2.26027L16.625 1.0274C16.9355 0.693493 17.0202 0.436644 17.0484 0.308219C16.2016 0.770548 15.4113 0.924658 14.9032 0.924658H14.7056L14.5927 0.821918C13.9153 0.282534 13.0685 0 12.1653 0C10.1895 0 8.6371 1.48973 8.6371 3.21062C8.6371 3.31336 8.6371 3.46747 8.66532 3.57021L8.75 4.0839L8.15726 4.05822C4.54435 3.95548 1.58065 1.13014 1.10081 0.642123C0.310484 1.92637 0.762097 3.15925 1.24194 3.92979L2.20161 5.36815L0.677419 4.5976C0.705645 5.67637 1.15726 6.52397 2.03226 7.14041L2.79435 7.65411L2.03226 7.93665C2.5121 9.24658 3.58468 9.78596 4.375 9.99144L5.41935 10.2483L4.43145 10.8647C2.85081 11.8921 0.875 11.8151 0 11.738C1.77823 12.8682 3.89516 13.125 5.3629 13.125C6.46371 13.125 7.28226 13.0223 7.47984 12.9452C15.3831 11.25 15.75 4.82877 15.75 3.54452V3.36473L15.9194 3.26199C16.879 2.44007 17.2742 2.00342 17.5 1.74658C17.4153 1.77226 17.3024 1.82363 17.1895 1.84932L15.5524 2.26027Z" />
                              </svg>
                            </TwitterShareButton>
                            <LinkedinShareButton url={url} title={title}>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                className="fill-current"
                              >
                                <path d="M14.3442 0H1.12455C0.499798 0 0 0.497491 0 1.11936V14.3029C0 14.8999 0.499798 15.4222 1.12455 15.4222H14.2942C14.919 15.4222 15.4188 14.9247 15.4188 14.3029V1.09448C15.4688 0.497491 14.969 0 14.3442 0ZM4.57316 13.1089H2.29907V5.7709H4.57316V13.1089ZM3.42362 4.75104C2.67392 4.75104 2.09915 4.15405 2.09915 3.43269C2.09915 2.71133 2.69891 2.11434 3.42362 2.11434C4.14833 2.11434 4.74809 2.71133 4.74809 3.43269C4.74809 4.15405 4.19831 4.75104 3.42362 4.75104ZM13.1947 13.1089H10.9206V9.55183C10.9206 8.7061 10.8956 7.58674 9.72108 7.58674C8.52156 7.58674 8.34663 8.53198 8.34663 9.47721V13.1089H6.07255V5.7709H8.29665V6.79076H8.32164C8.64651 6.19377 9.37122 5.59678 10.4958 5.59678C12.8198 5.59678 13.2447 7.08925 13.2447 9.12897V13.1089H13.1947Z" />
                              </svg>
                            </LinkedinShareButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RootLayout>
    </>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("content/posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const supportedExtensions = [".md", ".mdx"];
  let markdownWithMeta = null;

  for (const extension of supportedExtensions) {
    try {
      markdownWithMeta = fs.readFileSync(
        path.join("content/posts", slug + extension),
        "utf-8"
      );
      break; // If we successfully read a file, exit the loop
    } catch (err) {
      // File not found, try the next extension
    }
  }

  if (!markdownWithMeta) {
    // Handle the case when neither .md nor .mdx files are found
    return {
      notFound: true,
    };
  }

  const { data: frontMatter, content } = matter(markdownWithMeta);

  // Menggunakan date-fns untuk memformat tanggal menjadi string dalam format tertentu

  const datePublished = format(
    new Date(frontMatter.date),
    "yyyy-MM-dd'T'HH:mm:ss.SSSX"
  );

  // Use next-mdx-remote/serialize to convert Markdown/MDX content to mdxSource
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter: {
        ...frontMatter,
        href: `/blog/${slug}`,
        date: datePublished, // Mengirimkan tanggal sebagai string yang sudah diformat
      },
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default DetailPost;
