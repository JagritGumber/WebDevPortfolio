import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://jagritgumber.com",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://jagritgumber.com/projects",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
