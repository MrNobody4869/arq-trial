import type { Metadata } from "next"
import { Inter, Lora } from "next/font/google"
import "./globals.css"

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })
const lora = Lora({ variable: "--font-lora", subsets: ["latin"] })
import { ThemeProvider } from "@/components/ThemeProvider"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Writer Portfolio | Content Creator & Copywriter",
  description: "Professional writer and content creator portfolio featuring client work, blog articles, and testimonials.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased bg-white dark:bg-corporate-navy text-slate-900 dark:text-slate-100 transition-colors`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
