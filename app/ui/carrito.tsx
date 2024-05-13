
import Link from "next/link"
import { fetchUnaPelicula, listaPeliculaEnCarrito, getTotalPrice} from "../lib/data"
import {deleteToCart} from "../lib/actions"
import { Peliculas } from "../lib/definitions";

async function CartItem({film}:{film: Peliculas}) {
    const deleteFilmsToCart = deleteToCart.bind(null, film.title);
    return(
        <div className="grid grid-cols-[80px_1fr_80px] items-center gap-4">
          <img
            alt={film?.title}
            className="rounded-md"
            height={80}
            src={film.poster}
            style={{
              aspectRatio: "80/80",
              objectFit: "cover",
            }}
            width={80}
          />
          <div>
            <h3 className="font-medium">{film.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{film.year}</p>
          </div>
          <div className="text-right">
            <p className="font-medium">${film.price}</p>
            <form action={deleteFilmsToCart}>
                <button className="text-red-500 hover:underline text-sm">Remove</button>    
            </form>
          </div>
        </div>
    )
}

export async function Carro() {
  const data = await listaPeliculaEnCarrito();
  const totalPrice = await getTotalPrice();
  const suma = totalPrice ? await totalPrice.reduce(async (totalPromise, valorPromise) => {
    const total = await totalPromise;
    const valor = await valorPromise;
    return total + valor;
  }, Promise.resolve(0)) : 0;

  if(data === null) return (
      <div className="space-y-4">
        <div className="text-gray-500">No agregaste nada al carrito!!!</div>
      </div>
    )
    else
  return (
    <>
      <div className="space-y-4">
        {
        data?.map(async (titulo) => {
          const dataFilm = await fetchUnaPelicula(titulo);
          return <CartItem film={dataFilm} />
        })}
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800 mt-6 pt-6">
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
        <Link
          className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="#"
        >
          Proceed to Checkout
        </Link>
      </div>
    </>
  )
}

export default async function Carrito() {
  return (
    <div className="bg-white dark:bg-gray-950 shadow-sm rounded-lg p-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        <Link className="text-primary hover:underline" href="/productos">
          Continue Shopping
        </Link>
      </div>
      <Carro/>
    </div>
  )
}
