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

const DetailPhoto = ({
  frontMatter: { title, date, description, featured_image, tags, author },
  mdxSource,
}) => {
  const router = useRouter();

  // Function to handle the "Back" link click
  const handleBackClick = () => {
    router.back(); // Navigate to the previous page
  };

  const pageTitle = `${metadata.title} - ${title}`;
  return <div></div>;
};

export default DetailPhoto;
