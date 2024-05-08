import ProductCard from "@/app/ui/productoCard"
import { ProductCardSkeleton } from "@/app/ui/skeletons"
import { Suspense } from 'react';

export default async function Component() {
  return (
    
    <div className="py-12">
      <Suspense fallback={<ProductCardSkeleton />}>
        <ProductCard />
      </Suspense>
    </div>
  )
}