export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: "https://www.knotzer.io",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
