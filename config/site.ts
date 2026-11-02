/** Single source of truth for site-wide configuration. */
export const siteConfig = {
  name: "TrulyHello",
  url: process.env.NEXT_PUBLIC_APP_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  title: "TrulyHello — AI That Turns Customer Conversations Into Action",
  description:
    "TrulyHello helps businesses handle important customer calls, capture opportunities and automate approved business actions when teams are busy or unavailable.",
  email: "contact@trulyhello.com",
  /** Cal.com booking page used for demos, meetings and career conversations. */
  calUrl: "https://cal.com/sai-karthik-gutha-igaucn",
};
