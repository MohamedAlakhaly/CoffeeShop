import type React from "react"
import "../styles/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "netWO - Homemade Coffee with Amazing Vibes",
  description: "Enjoy the best homemade coffee with amazing vibes at our cafe.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          
        </ThemeProvider>
      </body>
    </html>
  )
}
