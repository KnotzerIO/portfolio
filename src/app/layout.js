import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const SITE_URL = "https://www.knotzer.io";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Mark Knotzer - Software Engineer | AI, Cloud & DevOps",
    template: "%s | Mark Knotzer"
  },
  description: "Mark Knotzer - Software Engineer based in Austria specializing in full-stack web development, AI integration, cloud infrastructure, and DevOps. Expertise in React, Next.js, TypeScript, Azure, Docker, and modern web technologies.",
  keywords: [
    "Mark Knotzer",
    "Software Engineer Austria",
    "Full Stack Developer",
    "AI Developer",
    "Cloud Engineer",
    "DevOps Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Azure Developer",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "GIS Developer",
    "Indoor Navigation",
    "Web Development Austria",
    "Frontend Developer",
    "Backend Developer",
    "Machine Learning",
    "Artificial Intelligence"
  ],
  authors: [{ name: "Mark Knotzer", url: SITE_URL }],
  creator: "Mark Knotzer",
  publisher: "Mark Knotzer",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Mark Knotzer - Software Engineer",
    title: "Mark Knotzer - Software Engineer | AI, Cloud & DevOps",
    description: "Software Engineer based in Austria specializing in full-stack web development, AI integration, cloud infrastructure (Azure), and DevOps automation.",
    images: [
      {
        url: `${SITE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Mark Knotzer - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Knotzer - Software Engineer | AI, Cloud & DevOps",
    description: "Software Engineer based in Austria specializing in full-stack development, AI, cloud infrastructure, and DevOps automation.",
    images: [`${SITE_URL}/images/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        async
        src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
