import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/Footer"
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "LAISALIFE ",
  description: "Your trusted pharmaceutical company for quality healthcare",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <Navbar/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
