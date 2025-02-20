import type React from "react"
import type { Metadata } from "next"
// import { GeistSans } from "@geist-ui/react"
import "./globals.css"
import { Navigation } from "./components/navigation"

export const metadata: Metadata = {
  title: "Farhan Wildan Nugraha | Creative Developer",
  description: "Creative Fullstack Developer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange> */}
          <div className="min-h-screen bg-black selection:bg-teal-500/20 selection:text-teal-200">
            <Navigation />
            {children}
          </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}

