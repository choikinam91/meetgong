import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://meetgong.kr";

  return [
    {
      url: `${base}/`,
      priority: 1,
      changeFrequency: "weekly"
    },
    {
      url: `${base}/about`,
      priority: 0.8,
      changeFrequency: "monthly"
    },
    {
      url: `${base}/reviews`,
      priority: 0.8,
      changeFrequency: "weekly"
    }
  ];
}
