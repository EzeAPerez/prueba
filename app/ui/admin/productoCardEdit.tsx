import Link from "next/link"
import { fetchFilteredFilms } from "@/app/lib/dataFilms"
import { Producto } from "@/app/lib/definitions"

interface ProductItemProps {
    pelicula: Producto
  }

async function ProductEdit({pelicula}: ProductItemProps){
    
        return (
            /*agregar mapeo para todos los productos, o una cantidad. */
            <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-800 dark:text-gray-200">
                    <Link className="block" href={`./movies/${pelicula?.title}/infoEditProducto`}>
                        <img
                            alt={pelicula.title}
                            className="w-full h-60 object-cover"
                            height="300"
                            src={pelicula.poster}
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                        width="400"
                        />
                    </Link>
                <div className="p-4 space-y-2 max-h-30 hidden sm:block">
                    <h3 className="font-semibold text-lg">{pelicula.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{pelicula.genere} - {pelicula.year}</p>
                </div>
            </div>
        )
}


export default async function ProductoCardEdit({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;
  }) 
 {
    const data = await fetchFilteredFilms(query, currentPage);
    if(data.length === 0) return <div className="text-gray-300 w-full justify-center flex text-lg">No se encontraron resultados</div>
    else{
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6">
            {
            data.map(async (Producto) => (
                <ProductEdit key={Producto.title} pelicula={Producto}/>
            )) 
            }
        </div>
    )}
}