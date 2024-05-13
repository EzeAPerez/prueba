import { InfoProductSkeleton } from "@/app/ui/skeletons"
import InfoProducto from "@/app/ui/infoProducto"
import { Suspense } from "react"


export default async function Page({ params }: { params: { titulo: string } }) {

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto">
      <Suspense fallback={<InfoProductSkeleton />}>
        <InfoProducto titulo={params.titulo}/>
      </Suspense>
    </div>
  )
}