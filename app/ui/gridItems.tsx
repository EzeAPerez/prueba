import Link from "next/link"
import React from 'react';
import { Button } from "./button"
import { fetchUnaPelicula } from "@/app/lib/data"

interface GridItemProps {
  titulo: string
}

export async function GridItem({ titulo } : GridItemProps) {
  //await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await fetchUnaPelicula(titulo);
    if (!data) {
        throw new Error('Failed to fetch invoice.');
    }else{
  return (
    <div className="rounded-lg overflow-hidden shadow-2xl dark:bg-gray-800 dark:text-gray-200">
      <Link className="block" href={`./${titulo}/infoProducto`}>
        <img
          alt={titulo}
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
          <Link className="hover:underline" href="./infoProducto">
            {data?.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {data?.genere} - {data?.year}
        </p>
        <div className="flex items-center justify-between py-4">
                    <span className="font-semibold text-lg">$99.99</span>
                    <Button>Add to Cart</Button>
                </div>
      </div>
    </div>
  )
}
}

export default async function Carousel() {
  
  return (
    <>
      <GridItem titulo={"Interstellar"} />
      <GridItem titulo={"Forrest Gump"} />
      <GridItem titulo={"The Godfather"} />
    </>
  );
};

