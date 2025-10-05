import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/servizi`, changeFrequency: "monthly" },
    { url: `${base}/chi-siamo`, changeFrequency: "monthly" },
    { url: `${base}/contatti`, changeFrequency: "monthly" },
  ];
}
