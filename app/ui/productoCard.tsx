import { ButtonAddFilms } from "@/app/ui/button"
import Link from "next/link"
import {fetchFilteredFilms } from "@/app/lib/dataFilms"
import { fetchFilteredSeries } from "@/app/lib/dataSeries"
import { Producto } from "@/app/lib/definitions"

interface ProductItemProps {
    producto: Producto
  }

async function Product({producto}: ProductItemProps){
    
        return (
            /*agregar mapeo para todos los productos, o una cantidad. */
            <div className="rounded-lg overflow-hidden shadow bg-gray-800 text-gray-200 hover:shadow-xl hover:shadow-slate-700 ">
                    <Link className="block" href={`./${producto?.title}/infoProducto`}>
                        <img
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
                    <p className="text-gray-400">{producto.genere} - {producto.year}</p>
                    <p className="text-gray-400">{producto.runtime}</p>
                </div>
                <div className="p-4 hidden sm:block">
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-lg">${producto.price}</span>
                        <ButtonAddFilms films={producto?.title} />
                    </div>
                </div>
                <div className="p-4 space-y-2 max-h-30 sm:hidden">
                    <h3 className="font-semibold text-lg">{producto.title}</h3>
                    <p className="text-gray-400">{producto.year}</p>
                </div>
                <div className="sm:hidden p-4">
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-lg">${producto.price}</span>
                        <ButtonAddFilms films={producto?.title} />
                    </div>
                </div>
            </div>
        )
}


export default async function ProductoCard({
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
            data.map(async (producto) => (                
                <Product key={producto.title} producto={producto}/>
            )) 
            }
        </div>
    )}
}