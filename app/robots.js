export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/search?query=", "/admin/"],
    },
    sitemap: ["https://dminhvu.com/sitemap.xml"],
  };
}
