import { Suspense } from "react"
import {GridItemsSkeleton} from "@/app/ui/skeletons"
import  GridItems from "@/app/ui/gridItems"

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        <Suspense fallback={<GridItemsSkeleton/>}>
          <GridItems/>
        </Suspense>
      </div>
  )
}
