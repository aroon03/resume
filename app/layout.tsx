import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aroon Ponnusamy | Principal Software Engineer",
  description:
    "Professional resume of Aroon Ponnusamy, Principal Software Engineer with over two decades of experience in Healthcare and Retail",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-gray-200" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
