import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import RootLayout from "@/pages/layout";
import Link from "next/link";
import Head from "next/head";
import { metadata } from "@/next-seo";
import { useRouter } from "next/router";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import TagButton from "../components/Posts/TagButton";
import SharePost from "../components/Posts/SharePost";

const DetailPost = ({
  frontMatter: { title, date, description, featured_image, tags, author },
  mdxSource,
}) => {
  const router = useRouter();

  // Function to handle the "Back" link click
  const handleBackClick = () => {
    router.back(); // Navigate to the previous page
  };

  const pageTitle = `${metadata.title} - ${title}`;
  return (
    <>
      <RootLayout>
        <Head>
          <meta name="robots" content="follow, index" />
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:image" content={featured_image} />
          <meta name="twitter:card" content={featured_image} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={featured_image} />
          <title>{pageTitle}</title>
        </Head>

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
                          {date}
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
                          <SharePost />
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
  const formattedDate = format(new Date(frontMatter.date), "dd MMM yyyy");

  // Use next-mdx-remote/serialize to convert Markdown/MDX content to mdxSource
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter: {
        ...frontMatter,
        date: formattedDate, // Mengirimkan tanggal sebagai string yang sudah diformat
      },
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default DetailPost;
