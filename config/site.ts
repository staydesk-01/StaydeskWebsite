/** Single source of truth for site-wide configuration. */
export const siteConfig = {
  name: "StayDesk",
  url: process.env.NEXT_PUBLIC_APP_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  title: "StayDesk — AI That Turns Customer Conversations Into Action",
  description:
    "StayDesk helps businesses handle important customer calls, capture opportunities and automate approved business actions when teams are busy or unavailable.",
  /** Cal.com booking page used for demos, meetings, founder and career conversations. */
  calUrl: "https://cal.com/sai-karthik-gutha-igaucn",
  /** Direct 30-minute event used by "Talk to Team" (skips the profile / event-type list). */
  calTalkToTeamUrl: "https://cal.com/sai-karthik-gutha-igaucn/30min?overlayCalendar=true",
};
