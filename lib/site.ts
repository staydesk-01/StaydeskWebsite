import { siteConfig } from "@/config/site";

export const SITE = siteConfig;

export const NAV_LINKS = [
  { href: "/product", label: "Product" },
  { href: "/voice", label: "AI Calling Agent" },
  { href: "/automation", label: "Automation" },
  { href: "/industries", label: "Industries" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/company", label: "Company" },
] as const;

export const FOOTER_GROUPS = [
  {
    title: "Product",
    links: [
      { href: "/product", label: "Overview" },
      { href: "/voice", label: "AI Calling Agent" },
      { href: "/automation", label: "Business Automation" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/demo?source=footer", label: "Book a Demo" },
    ],
  },
  {
    title: "Solutions",
    links: [{ href: "/industries", label: "Industries" }],
  },
  {
    title: "Company",
    links: [
      { href: "/company", label: "Our story" },
      { href: "/careers", label: "Careers" },
      { href: "/sign-in", label: "Sign in" },
    ],
  },
] as const;
