import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/ui/navbar'
import {Footer} from "@/app/ui/footer"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>)  {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-white dark:bg-gray-900`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}