import type { Metadata } from "next";

const description =
  "Full-stack + native Rust engineer. Ships production SaaS by day, OSS and apps by night.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jagritgumber.com"),
  title: {
    default: "Jagrit Gumber",
    template: "%s | Jagrit Gumber",
  },
  description,
  authors: [{ name: "Jagrit Gumber", url: "https://jagritgumber.com" }],
  creator: "Jagrit Gumber",
  keywords: [
    "Jagrit Gumber",
    "Full Stack Developer",
    "Rust",
    "TypeScript",
    "Next.js",
    "sqlcx",
    "sqlcx-orm",
    "Vidful",
    "Native apps",
    "Open Source",
  ],
  openGraph: {
    type: "website",
    url: "https://jagritgumber.com",
    siteName: "Jagrit Gumber",
    title: "Jagrit Gumber",
    description,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 3000,
        height: 1000,
        alt: "Jagrit Gumber - Full-stack + native Rust engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ItsRoboki",
    creator: "@ItsRoboki",
    title: "Jagrit Gumber",
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};
