import { Sidebar } from 'components/sidebar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Sidebar /> 
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  )
}
