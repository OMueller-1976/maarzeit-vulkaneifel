import type { MetadataRoute } from "next";

const BASE_URL = "https://www.maarzeit-vulkaneifel.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/ferienwohnung",
    "/buchung",
    "/hund",
    "/motorrad",
    "/guide",
    "/guide/dauner-maare",
    "/guide/wandern",
    "/guide/radfahren",
    "/guide/ausflugsziele",
    "/guide/schlechtwetter",
    "/kontakt",
    "/impressum",
    "/datenschutz",
    "/buchungsbedingungen",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/buchung" ? 0.9 : 0.7,
  }));
}
