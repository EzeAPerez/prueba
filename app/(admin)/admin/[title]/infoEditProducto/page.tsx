import InfoProductoEdit from "@/app/ui/admin/infoProductoEdit";
import { InfoProductSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function Page({ params }: { params: { title : string } }) {
    return (
      <div className="gap-6 items-start max-w-6xl mx-auto">
        <Suspense fallback={<InfoProductSkeleton />}>
          <InfoProductoEdit titulo={params.title}/>
        </Suspense>
      </div>
    )
  }
