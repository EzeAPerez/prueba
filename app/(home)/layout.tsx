import Navbar from '@/app/ui/navbar'
import {Footer} from "@/app/ui/footer"

export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>)  {
  return (
    <div>
        <Navbar/>
        <div className='py-20 p-4 '>
          {children}
        </div>
        <div className="pt-6 bottom-0 w-full ">
          <Footer/>
        </div>
    </div>
  )
}