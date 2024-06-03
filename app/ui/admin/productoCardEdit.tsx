import Link from "next/link"
import {fetchFilteredFilms } from "@/app/lib/dataFilms"
import { fetchFilteredSeries } from "@/app/lib/dataSeries"
import { Producto } from "@/app/lib/definitions"
import Image from "next/image"

interface ProductItemProps {
    producto: Producto
  }

async function ProductEdit({producto}: ProductItemProps){
    
        return (
            /*agregar mapeo para todos los productos, o una cantidad. */
            <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-800 dark:text-gray-200">
                    <Link className="block" href={`./${producto?.title}/infoEditProducto`}>
                        <Image
                            alt={producto.title}
                            className="w-full h-60 object-cover"
                            height="300"
                            src={producto.poster}
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                        width="400"
                        />
                    </Link>
                <div className="p-4 space-y-2 max-h-30 hidden sm:block">
                    <h3 className="font-semibold text-lg">{producto.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{producto.genere} - {producto.year}</p>
                </div>
            </div>
        )
}


export default async function ProductoCardEdit({
    type,
    query,
    currentPage,
  }: {
    type: string;
    query: string;
    currentPage: number;
  }) 
 {
    let data;

    switch(type){
        case "series":
            data = await fetchFilteredSeries(query, currentPage);
            break;
        case "movies":
            data = await fetchFilteredFilms(query, currentPage);
            break;
        default:
            data = await fetchFilteredFilms(query, currentPage);
            data = data.concat(await fetchFilteredSeries(query, currentPage));
            break;
    }
    if(data.length === 0) return <div className="text-gray-300 w-full justify-center flex text-lg">No se encontraron resultados</div>
    else{
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6">
            {
            data.map(async (Producto) => (
                <ProductEdit key={Producto.title} producto={Producto}/>
            )) 
            }
        </div>
    )} 
}