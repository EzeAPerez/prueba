'use server'
import { cookies } from 'next/headers'
import { signIn } from '@/auth';
import { AuthError } from 'next-auth'; 

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

  export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
}
