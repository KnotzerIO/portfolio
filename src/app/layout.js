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
  title: "Portfolio of Mark Knotzer",
  description: "Showcasing my work and projects as a software developer.",
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
