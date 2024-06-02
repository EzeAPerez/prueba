import Link from "next/link"
import React from 'react';
import { ButtonAddFilms } from "./button"
import { fetchFilmsForGrid } from "@/app/lib/dataFilms"
import { Peliculas } from "@/app/lib/definitions"

interface GridItemProps {
  data: Peliculas
}

export async function GridItem({ data } : GridItemProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-2xl bg-gray-800 text-gray-200">
      <Link className="block" href={`./${data?.title}/infoProducto`}>
        <img
          alt={data.title}
          className="w-full h-[500px] object-cover"
          height={600}
          src={data?.poster}
          style={{
            aspectRatio: "400/600",
            objectFit: "cover",
          }}
          width={400}
        />
      </Link>
      <div className="mt-4 p-4">
        <h3 className="text-lg font-semibold tracking-tight">
          <Link className="hover:underline" href={`./${data?.title}/infoProducto`}>
            {data?.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-300">
          {data?.genere} - {data?.year}
        </p>
        <p className="text-sm text-gray-400">
          {data?.plot}
        </p>
        <div className="flex items-center justify-between py-4">
                    <span className="font-semibold text-lg">${data?.price}</span>
                    <ButtonAddFilms films={data?.title} />
                </div>
      </div>
    </div>
  )
}

export default async function Carousel() {
  const data = await fetchFilmsForGrid();
   return (
    <>
      {data?.map(async (film) => (
        <GridItem key={film?.title} data={film} /> 
      ))}
      
    </>
   )
};

