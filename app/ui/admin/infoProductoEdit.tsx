import { fetchSerie, fetchPelicula} from "@/app/lib/dataAdmin";
import ProductForm from "@/app/ui/admin/product-form";
import { Suspense } from "react";

interface InfoProductoPelicula {
  titulo: string
}

export default async function InfoProductoEdit({ titulo }: InfoProductoPelicula) {  
    console.log(titulo); 
    const title = titulo.replace(/%20/g, " ");
    let data;
    try{
        data = await fetchPelicula(title);
    }catch{
        data = await fetchSerie(title);
    }
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
