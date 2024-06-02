'use server'
import { cookies } from 'next/headers'
import { sql } from '@vercel/postgres';

export async function listaEnCarrito() {
    const regex = /(?<=\/)([^/]+)/g;
    const lista = cookies().get("cliente")?.value;
    return lista?.match(regex);
  }
  
  async function getPrice(producto:string){
    try {
      const price = await sql`SELECT price
      FROM peliculas
      WHERE
        title ILIKE ${producto}
    `;
    return price.rows[0].price;
    } catch (error) {
        const price = await sql`SELECT price
            FROM series
            WHERE
            title ILIKE ${producto}
        `;
        return price.rows[0].price;
    }
    /*console.error('Database Error:', error);
      throw new Error('Failed to fetch total number of invoices.'); */
  }
  
  export async function getTotalPrice(){
    const lista = await listaEnCarrito();
    return lista?.map(async (producto) => {
      return Number(await getPrice(producto));
    })
  }
  