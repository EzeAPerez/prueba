
import Link from "next/link"
import {fetchUnaPelicula} from "../lib/dataFilms"
import {listaEnCarrito, getTotalPrice} from "../lib/data"
import { deleteToCart } from "../lib/actions"
import { Producto } from "../lib/definitions";
import { fetchUnaserie } from "../lib/dataSeries";
import { Button } from "./button";
import Image from "next/image";

async function CartItem({producto}:{producto: Producto}) {
    const deleteFilmsToCart = deleteToCart.bind(null, producto.title);
    return(
        <div className="grid grid-cols-[80px_1fr_80px] items-center gap-4">
          <Image
            alt={producto.title}
            className="rounded-md"
            height={80}
            src={producto.poster}
            style={{
              aspectRatio: "80/80",
              objectFit: "cover",
            }}
            width={80}
          />
          <div>
            <h3 className="font-medium">{producto.title}</h3>
            <p className="text-gray-400 text-sm">{producto.year}</p>
          </div>
          <div className="text-right">
            <p className="font-medium">${producto.price}</p>
            <form action={deleteFilmsToCart}>
                <button className="text-red-500 hover:underline text-sm">Remove</button>    
            </form>
          </div>
        </div>
    )
}

export async function Carro() {
  const data = await listaEnCarrito();
  const totalPrice = await getTotalPrice();
  const suma = totalPrice ? await totalPrice.reduce(async (totalPromise, valorPromise) => {
    const total = await totalPromise;
    const valor = await valorPromise;
    return total + valor;
  }, Promise.resolve(0)) : 0;

  if(data === null || data == undefined) return (
      <div className="space-y-4">
        <div className="text-gray-500">No agregaste nada al carrito!!!</div>
      </div>
    )
    else
  return (
    <>
      <div className="space-y-4 ">
        {
        data?.map(async (titulo) => {
          let dataFilm = null;
          //modificar!!!!!!!!!!!!
          try {
             dataFilm = await fetchUnaPelicula(titulo);
          } catch (error) {
             dataFilm = await fetchUnaserie(titulo);
          }
          return <CartItem key={dataFilm?.title} producto={dataFilm} />
        })}
      </div>
      <div className="border-t border-gray-800 mt-6 pt-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-500 dark:text-gray-400">Subtotal</p>
          <p className="font-medium">${suma}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-500 dark:text-gray-400">Shipping</p>
          <p className="font-medium">$5.00</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-gray-500 dark:text-gray-400">Total</p>
          <p className="font-medium text-2xl">${suma + 5}</p>
        </div>
      </div>
      <div className="flex justify-end mt-6 gap-2">
        <div id="wallet_container">
          <Button>Checkout</Button>
        </div>
      </div>
    </>
  )
}

export default async function Carrito() {
  return (
    <div className="text-white bg-gray-950 shadow-sm rounded-lg max-w-3xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        <Link className="text-primary hover:underline" href="/">
          Continue Shopping
        </Link>
      </div>
      <Carro/>
    </div>
  )
}
