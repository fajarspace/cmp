// next.config.js
module.exports = {
  siteUrl: "https://cipta-mandiri-perkasa.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  additionalSitemaps: [
    {
      url: "https://cipta-mandiri-perkasa.com/sitemap.xml",
      lastmod: new Date().toISOString(),
      priority: 1,
      changefreq: "daily",
      locale: "id",
    },
  ],
  sitemapFileName: "sitemap.xml", // Menentukan nama file sitemap
};
