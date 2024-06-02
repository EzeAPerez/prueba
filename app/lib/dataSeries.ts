'use server'
import { cookies } from 'next/headers'
import { sql } from '@vercel/postgres';
import { Producto } from "./definitions"
import { unstable_noStore as noStore } from 'next/cache';

var key="6d7434b2";

export async function fetchseries() {
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
    noStore();
   
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
  
       console.log('Fetching revenue data...');
  
      const data = await sql<Producto>`SELECT * FROM series`;
  
  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch series data.');
    }
  }

  export async function fetchUnaserie(serie: string) {
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
    noStore();
   
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
  
       console.log('Fetching revenue data...'+serie);
  
      const data = await sql<Producto>`SELECT * FROM series WHERE title ILIKE ${serie}`;
      data.rows[0].type="serie";

      return data.rows[0];
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch un serie data.');
    }
  }

export async function fetchSeriesForGrid(){
  noStore();
  try{
    const data = await sql<Producto>`SELECT *
    FROM series
    ORDER BY year DESC
    LIMIT 3;`
    return data.rows;
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch grid serie data.');
  }
}
export async function fetchFilteredSeries(
  query: string,
  currentPage: number
)
{
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  console.log(query);
  try {
    const series = await sql<Producto>`
      SELECT
        *
      FROM series
      WHERE
        title ILIKE ${`%${query}%`} OR
        year ILIKE ${`%${query}%`} OR
        actors ILIKE ${`%${query}%`} OR
        writer ILIKE ${`%${query}%`} OR
        genere ILIKE ${`%${query}%`}
      ORDER BY year DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
    console.log(series.rows.length);
    return series.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch series for page.');
  }
}

const ITEMS_PER_PAGE = 12;
export async function fetchFilteredSeriess(
  query: string,
  currentPage: number,
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  console.log(query);
  try {
    const series = await sql<Producto>`
      SELECT
        *
      FROM series
      WHERE
        title ILIKE ${`%${query}%`} OR
        year ILIKE ${`%${query}%`} OR
        actors ILIKE ${`%${query}%`} OR
        writer ILIKE ${`%${query}%`} OR
        genere ILIKE ${`%${query}%`}
      ORDER BY year DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return series.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch series for page.');
  }
}

export async function fetchSeriesTotalPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM series
    WHERE
      title ILIKE ${`%${query}%`} OR
      year ILIKE ${`%${query}%`} OR
      actors ILIKE ${`%${query}%`} OR
      writer ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function listaserieEnCarrito() {
  const regex = /(?<=\/)([^/]+)/g;
  const lista = cookies().get("cliente")?.value;
  return lista?.match(regex);
}

async function getPrice(Serie:string){
  try {
    const price = await sql`SELECT price
    FROM series
    WHERE
      title ILIKE ${Serie}
  `;
    return price.rows[0].price;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function getTotalPrice(){
  const lista = await listaserieEnCarrito();
  return lista?.map(async (Serie) => {
    return Number(await getPrice(Serie));
  })
}
