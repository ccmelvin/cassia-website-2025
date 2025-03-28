import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Cassia Melvin | Bio Link | Em Breve",
  description: "Minha nova página está chegando! Prepare-se para receitas deliciosas, inspiração para viagens e dicas de lifestyle—tudo em um só lugar!",
  url: "https://cassiamelvin.com",
  type: "website",
  locale: "pt_BR",
  Instagram: "@cassiacmelvin",
  Pinterest: "@cassiamelvin", 
  Tiktok: "@cassiamelvin",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

