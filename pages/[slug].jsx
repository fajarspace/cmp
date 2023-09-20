import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import RootLayout from "./layout";
import Link from "next/link";
import Head from "next/head";
import { metadata } from "@/theme.config";

const PostPage = ({ frontMatter: { title, date, tag, author }, mdxSource }) => {
  const pageTitle = `${metadata.title} - ${title}`;
  return (
    <>
      <RootLayout>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <h1>{title}</h1>
        <div className="meta-line">
          <div className="meta">
            {author}, <time>{date}</time> &bull;
            <span className="tag">{tag}</span>
          </div>
          <Link className="meta-back" href="/">
            Back
          </Link>
        </div>
        <MDXRemote {...mdxSource} />
        <hr />
      </RootLayout>
    </>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("content/posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("content/posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
