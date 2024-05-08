import { Button } from "@/app/ui/button"
import { fetchUnaPelicula } from "@/app/lib/data"

interface InfoProductoPelicula {
    titulo: string
}

export default async function InfoProducto({ titulo }: InfoProductoPelicula){
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await fetchUnaPelicula(titulo);
    if (!data) {
        throw new Error('Failed to fetch invoice.');
    }else{
        return (
            <>
                <div className="grid gap-4 md:gap-10 items-start">
                    <img
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
                            <div className="text-4xl font-bold">$79.99</div>
                        </div>
                    </div>
                    <form className="grid gap-4 md:gap-10">
                        <Button className="w-full">
                            Add to Cart
                        </Button>
                    </form>
    
                    <div className="grid gap-4 text-sm leading-loose">
                        <h2 className="font-bold text-lg">Details</h2>
                        <ul className="grid gap-2">
                            <li>
                                <span className="font-medium">Genere: </span>
                                {data?.genere}{"\n                    "}
                            </li>
                            <li>
                                <span className="font-medium">Duration: </span>
                                {data?.duration}{"\n                    "}
                            </li>
                            <li>
                                <span className="font-medium">Director: </span>
                                {data?.director}{"\n                    "}
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