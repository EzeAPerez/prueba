'use server'
import { cookies } from 'next/headers'
import { devNull } from 'os';

export async function addToCart(films:string){
    const pelicula = "/"+films+"/";
    const cookieStore = cookies()
    try{
        if(cookieStore.get('cliente') === undefined){
            cookieStore.set({name: "cliente", value: pelicula});
        }
        else{
            const valor = cookieStore.get('cliente')?.value+""+pelicula;
            cookieStore.set({name: "cliente", value: valor});
        }
        
        console.log(films);
      return { message: 'pelicula agregada al carrito' };
    }catch(error){
      console.log(error);
    }
  }

  export async function deleteToCart(films:string){
    const pelicula = "/"+films+"/";
    const cookieStore = cookies();
    try{
      const nuevaCadena = cookieStore.get("cliente")?.value.replace(pelicula, "");
      if(nuevaCadena===undefined){
        cookieStore.set({name: "cliente", value: ""});
      }
      else{
        cookieStore.set({name: "cliente", value: nuevaCadena});
      } 
      console.log(films);
      return { message: 'pelicula agregada al carrito' };
    }catch(error){
      console.log(error);
    }
  }

  export async function estaPeliculaEnCarrito(pelicula: string) {
    const lista = cookies().get("cliente")?.value;
    return lista?.includes(pelicula);
  }
  