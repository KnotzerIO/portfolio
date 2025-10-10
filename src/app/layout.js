import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
  authors: [{ name: "Mark Knotzer", url: "https://knotzer.io" }],
  creator: "Mark Knotzer",
  publisher: "Mark Knotzer",
  metadataBase: new URL("https://knotzer.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://knotzer.io",
    siteName: "Mark Knotzer - Software Engineer",
    title: "Mark Knotzer - Software Engineer | AI, Cloud & DevOps",
    description: "Software Engineer based in Austria specializing in full-stack web development, AI integration, cloud infrastructure (Azure), and DevOps automation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Knotzer - Software Engineer | AI, Cloud & DevOps",
    description: "Software Engineer based in Austria specializing in full-stack development, AI, cloud infrastructure, and DevOps automation.",
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
