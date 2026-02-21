import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Portfolio | Neo-Brutalist Design",
  description: "Creative portfolio with Neo-brutalist aesthetic - bold, raw, and unforgettable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${archivoBlack.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased bg-white text-black">
        {children}
      </body>
    </html>
  );
}
