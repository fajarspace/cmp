import { getServerSideSitemap, ISitemapField } from "next-sitemap";

const GET = async (request) => {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/posts/records",
    { cache: "no-store" }
  );
  const json = await res.json();
  const data = json["items"];

  const fields = data.map((e) => ({
    loc: `http://localhost:3000/blog/${e["slug"]}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(fields);
};

export default GET;
