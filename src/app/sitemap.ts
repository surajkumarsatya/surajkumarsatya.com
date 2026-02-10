import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://surajkumarsatya.com", priority: 1 },
    { url: "https://surajkumarsatya.com/projects", priority: 0.9 },
    { url: "https://surajkumarsatya/contact", priority: 0.8 },
    { url: "https://surajkumarsatya/experience", priority: 0.8 },
  ];
}
