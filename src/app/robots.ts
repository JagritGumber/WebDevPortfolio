import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/blogs", "/blogs/"],
      },
    ],
    sitemap: "https://jagritgumber.com/sitemap.xml",
    host: "https://jagritgumber.com",
  };
}
