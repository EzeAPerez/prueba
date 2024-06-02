import { fetchUnaPelicula } from "@/app/lib/dataFilms";
import ProductForm from "@/app/ui/admin/product-form";
import { Suspense } from "react";

interface InfoProductoPelicula {
  titulo: string
}

export default async function InfoProductoEdit({ titulo }: InfoProductoPelicula) {  
    console.log(titulo); 
    const title = titulo.replace(/%20/g, " ");
    const data = await fetchUnaPelicula(title);
    if(!data){
        return <div></div>
    }
    else{
        return (
            <div>
            <Suspense>
                <ProductForm movieData={data} />
            </Suspense>
            </div>
        );
    }
}
