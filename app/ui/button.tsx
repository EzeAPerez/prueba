import clsx from 'clsx';
import { deleteToCart, addToCart, estaPeliculaEnCarrito } from "@/app/lib/actions";
import {updateEnabledProduct, isDisabled} from "@/app/lib/dataAdmin";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
      )}
    >
      {children}
    </button>
  );
}

export async function ButtonAddFilms({films}:{films:string}){
  const addFilmsToCart = addToCart.bind(null, films);
  const deleteFilmsToCart = deleteToCart.bind(null, films);
  if(await estaPeliculaEnCarrito(films)){
    return (
      <form action={deleteFilmsToCart}>
        <button className="flex h-10 items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
           delete cart
        </button>
      </form>
    )
  }else{
    return (
      <form action={addFilmsToCart}>
      <button className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
        add cart
      </button>
    </form>
    )
  }
}

export async function ButtonDisabled({type, id, disabled}:{type:string, id:string, disabled:boolean}){
  const disableProduct = updateEnabledProduct.bind(null, id, false, type);
  const enableProduct = updateEnabledProduct.bind(null, id, true, type);
  if((await isDisabled(id))){
    return (
      <form action={disableProduct}>
        <button className="flex h-10 items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
           disabled
        </button>
      </form>
    )
  }else{
    return (
      <form action={enableProduct}>
      <button className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
        enable
      </button>
    </form>
    )
  }
}