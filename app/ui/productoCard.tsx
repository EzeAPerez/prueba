import { Button } from "@/app/ui/button"
import Link from "next/link"
import { fetchPelicula } from "@/app/lib/data"

const titulos: string[] = [
    "The Godfather",
    "Titanic",
    "The Lord of the Rings: The Return of the King",
    "Schindler's List",
    "Forrest Gump",
    "Pulp Fiction",
    "The Lion King",
    "Fight Club",
    "Interstellar",
    "La La Land",
    "Inception",
    "The Shawshank Redemption"
];

interface ProductoPelicula {
    titulo: string
}

async function Product({ titulo }: ProductoPelicula) {
    const data = await fetchPelicula(titulo);
        return (
            /*agregar mapeo para todos los productos, o una cantidad. */
            <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-800 dark:text-gray-200">
                    <Link className="block" href={`./${titulo}/infoProducto`}>
                        <img
                            alt={titulo}
                            className="w-full h-60 object-cover"
                            height="300"
                            src={data?.poster}
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                        width="400"
                        />
                    </Link>
                <div className="p-4 space-y-2 max-h-30 hidden sm:block">
                    <h3 className="font-semibold text-lg">{titulo}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{data.genere} - {data.year}</p>
                </div>
                <div className="p-4 hidden sm:block">
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-lg">$24.99</span>
                        <Button>Add to Cart</Button>
                    </div>
                </div>
                <div className="p-4 space-y-2 max-h-30 sm:hidden">
                    <h3 className="font-semibold text-lg">{titulo}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{data.year}</p>
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
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6 py-16">
            {titulos.map((pelicula) => (
                <Product key={pelicula} titulo={pelicula} />
            ))}
        </section>
    )
}