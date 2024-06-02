import ProductCard from "@/app/ui/productoCard";
import Pagination from '@/app/ui/pagination';
import { ProductCardSkeleton } from "@/app/ui/skeletons"
import { Suspense } from 'react';
import { fetchSeriesTotalPages } from '@/app/lib/dataSeries';
import Search from '@/app/ui/search';

export default async function Component({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchSeriesTotalPages(query);

  return (
    <div>
      <Suspense key={query + currentPage} fallback={<ProductCardSkeleton />}>
        <ProductCard type="series" query={query} currentPage={currentPage}/>
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  )
}