import './globals.css'
import './output.css'
import { Inter } from 'next/font/google'
import Header from '@/app/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <div className="mt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
