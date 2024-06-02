import { ButtonAddFilms } from "@/app/ui/button"
import { fetchUnaPelicula } from "@/app/lib/dataFilms"
import {fetchUnaserie} from "@/app/lib/dataSeries"
import Image from "next/image"

interface InfoProductoTitle {
    titulo: string
}

export default async function InfoProducto({ titulo }: InfoProductoTitle){
    const title = titulo.replace(/%20/g, " ");
    let data;
    try{
        data = await fetchUnaPelicula(title);
    }catch{
        data = await fetchUnaserie(title);
    }
    if (!data) {
        throw new Error('Failed to fetch.');
    }else{
        return (
            <>
                <div className="grid gap-4 md:gap-10 items-start">
                    <Image
                        alt={data?.title}
                        className="aspect-[2/3] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                        height={900}
                        src={data?.poster}
                        width={600}
                    />
                </div>
                <div className="grid gap-4 md:gap-10 items-start dark:text-white">
                    <div className="grid gap-4">
                        <h1 className="font-bold text-3xl lg:text-4xl">{data?.title}</h1>
                        <div>
                            <p>
                                {data?.plot}
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-4xl font-bold">${data?.price}</div>
                        </div>
                    </div>
                    
                        <ButtonAddFilms films={data?.title}/>
    
                    <div className="grid gap-4 text-sm leading-loose">
                        <h2 className="font-bold text-lg">Details</h2>
                        <ul className="grid gap-2">
                            <li>
                                <span className="font-medium">Genere: </span>
                                {data?.genere}{"\n                    "}
                            </li>
                            <li>
                                <span className="font-medium">Duration: </span>
                                {data?.runtime}{"\n                    "}
                            </li>
                            <li>
                                <span className="font-medium">Director: </span>
                                {
                                    data?.type === "pelicula" ? data?.director : data?.writer
                                }{"\n                    "}
                            </li>
                            <li>
                                <span className="font-medium">Actors: </span>
                                {data?.actors}{"\n                    "}
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }   
}