"use client";

import { Sidebar } from 'components/sidebar'
import './globals.css'
import { Inter } from 'next/font/google'
import { ConvexProvider, ConvexReactClient } from "convex/react";

const inter = Inter({ subsets: ['latin'] })

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexProvider client={convex}>
          <div className="flex min-h-screen">
            <Sidebar /> 
            <main className="flex-1 p-6">{children}</main>
          </div>
        </ConvexProvider>
      </body>
    </html>
  )
}
