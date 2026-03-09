import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://techwrench.co/",
      lastModified: new Date(),
    },
    {
      url: "https://techwrench.co/about",
      lastModified: new Date(),
    },
    {
      url: "https://techwrench.co/services",
      lastModified: new Date(),
    },
    {
      url: "https://techwrench.co/contact",
      lastModified: new Date(),
    },
  ];
}
