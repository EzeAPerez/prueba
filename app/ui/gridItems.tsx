import Link from "next/link"
import React from 'react';
import { ButtonAddFilms } from "./button"
import { fetchFilmsForGrid } from "@/app/lib/dataFilms"
import { Producto } from "@/app/lib/definitions"
import Image from "next/image";

interface GridItemProps {
  data: Producto
}

export async function GridItem({ data } : GridItemProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-2xl bg-gray-800 text-gray-200 shadow hover:shadow-xl hover:shadow-slate-700">
      <Link className="block" href={`./${data?.title}/infoProducto`}>
        <Image
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
      <div className="p-4">
        <h3 className="text-lg font-semibold tracking-tight">
          <Link className="hover:underline" href={`./${data?.title}/infoProducto`}>
            {data?.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-300 pt-2">
          {data?.genere} - {data?.year}
        </p>
        <p className="text-sm text-gray-400 pt-2">
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

