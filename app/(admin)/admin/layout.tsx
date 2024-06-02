import { Inter } from 'next/font/google'
import {Footer} from "@/app/ui/footer"
import AdminHeader from "@/app/ui/admin/adminHeader"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>)  {
  return (
      <div className={`${inter.variable} bg-white dark:bg-gray-900`}>
        <AdminHeader />
        <div className='py-20 p-4 '>
          {children}
        </div>
        <Footer />
      </div>
  )
}