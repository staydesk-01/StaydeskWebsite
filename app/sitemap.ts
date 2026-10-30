import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
const ROUTES = ["", "/product", "/voice", "/automation", "/industries", "/how-it-works", "/company", "/early-access", "/contact", "/demo", "/meeting", "/careers"];
export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({ url: `${SITE.url}${r}`, lastModified: new Date() }));
}
