import { Button } from "@/app/ui/button"
import Link from "next/link"
import { fetchPeliculas } from "@/app/lib/data"
import { Peliculas } from "@/app/lib/definitions"

interface ProductoPelicula {
    titulo: Peliculas;
}


async function Product(pelicula: Peliculas): Promise<JSX.Element> {
    
        return (
            /*agregar mapeo para todos los productos, o una cantidad. */
            <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-800 dark:text-gray-200">
                    <Link className="block" href={`./${pelicula.title}/infoProducto`}>
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
                <div className="p-4 hidden sm:block">
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-lg">$24.99</span>
                        <Button>Add to Cart</Button>
                    </div>
                </div>
                <div className="p-4 space-y-2 max-h-30 sm:hidden">
                    <h3 className="font-semibold text-lg">{pelicula.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{pelicula.year}</p>
                </div>
                <div className="sm:hidden p-4">
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-lg">$24.99</span>
                        <Button>Add</Button>
                    </div>
                </div>
            </div>
        )
}


export default async function ProductoCard() {
    const data = await fetchPeliculas();
    return (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6 py-16">
            {
            data.map((peliculas) => (
                <Product key={peliculas.title} {...peliculas}/>
            ))}
        </section>
    )
}