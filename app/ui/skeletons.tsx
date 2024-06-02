const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-800`}>
      <div className="rounded-lg overflow-hidden shadow-md bg-gray-800">
        <div className="w-full h-60 bg-gray-300 animate-pulse"></div>
        <div className="p-6 space-y-2">
          <div className="mt-2 h-4 w-20 rounded-md bg-gray-400 animate-pulse" />
          <div className="mt-2 p-2 h-4 w-40 rounded-md bg-gray-200 animate-pulse" />
          <div className="flex items-center justify-between">
          <div className="mt-2 h-4 w-20 rounded-md bg-gray-400 animate-pulse" />
            <span className="font-semibold text-lg animate-pulse"> <div className="mt-2 h-6 w-20 rounded-md bg-blue-400 animate-pulse" /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </section>
  )
}

function GridSkeletonItem() {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-gray-800 text-gray-200">
      <div className="w-full h-[500px] object-cover bg-gray-300 animate-pulse rounded-lg"></div>
      <div className="mt-4 p-4 animate-pulse">
      <div className="mt-2 h-4 w-20 rounded-md bg-gray-400 animate-pulse" />
      <div className="mt-2 p-2 h-4 w-40 rounded-md bg-gray-200 animate-pulse" />  
      <div className="flex items-center justify-between  py-4">
          <div className="mt-2 h-4 w-20 rounded-md bg-gray-400 animate-pulse" />
            <span className="font-semibold text-lg animate-pulse"> <div className="mt-2 h-6 w-20 rounded-md bg-blue-400 animate-pulse" /></span>
          </div>
      </div>
    </div>
  )
}

export function GridItemsSkeleton() {
  return (
    <>
      <GridSkeletonItem />
      <GridSkeletonItem />
      <GridSkeletonItem />
    </>

  )
}


export function InfoProductSkeleton() {
  return (
    <>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="w-full aspect-[2/3] bg-gray-300 animate-pulse rounded-lg"></div>
      </div>

      <div className="grid gap-4 md:gap-10 items-start dark:text-white animate-pulse">
        <div className="grid gap-4">
          <div className="mt-2 h-10 w-60 rounded-md bg-gray-300 animate-pulse"/>
          <div>
            <div className="h-4 w-100 rounded-md bg-gray-400 animate-pulse"/>
            <div className="mt-2 h-4 w-80 rounded-md bg-gray-400 animate-pulse"/>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-10 w-32 rounded-md bg-gray-300 animate-pulse"/>
          </div>
        </div>
        <form className="grid gap-4 md:gap-10">
          <div className="h-10 w-100 rounded-md bg-blue-300 animate-pulse"/>
        </form>

        <div className="grid gap-4 text-sm leading-loose">
          <div className="mt-2 h-4 w-20 rounded-md bg-gray-300 animate-pulse"/>
          <ul className="grid gap-2">
            <li>
              <div className="mt-3 h-3 w-44 rounded-md bg-gray-400 animate-pulse"/>
            </li>
            <li>
              <div className="mt-4 h-3 w-32 rounded-md bg-gray-400 animate-pulse"/>
            </li>
            <li>
              <div className="mt-4 h-3 w-36 rounded-md bg-gray-400 animate-pulse"/>
            </li>
            <li>
              <div className="mt-4 h-3 w-60 rounded-md bg-gray-400 animate-pulse"/>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
