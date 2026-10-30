import type { Metadata, Viewport } from "next";
import { Newsreader, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { TrackingCapture } from "@/components/TrackingCapture";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/site";

const serif = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap", weight: ["400", "500"] });
const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: "%s | StayDesk" },
  description: SITE.description,
  applicationName: "StayDesk",
  openGraph: {
    type: "website", siteName: "StayDesk", title: SITE.title, description: SITE.description, url: "/",
  },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#0c1118", viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <TrackingCapture />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
