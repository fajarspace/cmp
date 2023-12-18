// next.config.js
module.exports = {
  siteUrl: "http://localhost:3000",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  additionalSitemaps: [
    {
      url: "https://localhost:3000/sitemap.xml",
      lastmod: new Date().toISOString(),
      priority: 1,
      changefreq: "daily",
      locale: "id",
      description: "Deskripsi sitemap untuk search engines.",
    },
  ],
  sitemapFileName: "sitemap.xml", // Menentukan nama file sitemap
};
