import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Personal Portfolio | Developer & Creator",
    template: "%s | Personal Portfolio",
  },
  description:
    "Personal portfolio showcasing projects, skills, and blog articles. Built with Next.js and Tailwind CSS.",
  keywords: ["portfolio", "developer", "projects", "blog", "web development"],
  authors: [{ name: "Portfolio Owner" }],
  openGraph: {
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
