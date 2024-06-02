'use server'

import { sql } from '@vercel/postgres';
import {Producto} from "./definitions"
import { unstable_noStore as noStore } from 'next/cache';

var key="6d7434b2";

export async function fetchPeliculas() {
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
    noStore();
   
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
  
       console.log('Fetching revenue data...');
  
      const data = await sql<Producto>`SELECT * FROM peliculas`;
  
  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch peliculas data.');
    }
  }

  export async function fetchUnaPelicula(pelicula: string) {
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
    noStore();
   
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
  
       console.log('Fetching revenue data...'+pelicula);
  
      const data = await sql<Producto>`SELECT * FROM peliculas WHERE title ILIKE ${pelicula}`;
      data.rows[0].type="pelicula";

      return data.rows[0];
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch un pelicula data.');
    }
  }

export async function fetchFilmsForGrid(){
  noStore();
  try{
    const data = await sql<Producto>`SELECT *
    FROM peliculas
    ORDER BY year DESC
    LIMIT 3;`
    return data.rows;
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch grid pelicula data.');
  }
}

const ITEMS_PER_PAGE = 12;
export async function fetchFilteredFilms(
  query: string,
  currentPage: number,
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  console.log(query);
  try {
    const peliculas = await sql<Producto>`
      SELECT
        *
      FROM peliculas
      WHERE
        title ILIKE ${`%${query}%`} OR
        year ILIKE ${`%${query}%`} OR
        actors ILIKE ${`%${query}%`} OR
        director ILIKE ${`%${query}%`} OR
        genere ILIKE ${`%${query}%`}
      ORDER BY year DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return peliculas.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch peliculas for page.');
  }
}

export async function fetchFilmsTotalPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM peliculas
    WHERE
      title ILIKE ${`%${query}%`} OR
      year ILIKE ${`%${query}%`} OR
      actors ILIKE ${`%${query}%`} OR
      director ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}


export async function obtenerMoviesFilters(){
  noStore();
  try{
    const data = await sql`SELECT DISTINCT genere FROM peliculas`
    return data.rows;
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch grid pelicula data.');
  }
}


export async function updateMovie(movieData: Producto) {
  noStore();
  console.log(movieData);
  try {
    const update = await sql<Producto>`
    UPDATE peliculas
    SET year = ${movieData.year}, poster = ${movieData.poster}, runtime = ${movieData.runtime},
        genere = ${movieData.genere}, director = ${movieData.director}, actors = ${movieData.actors},
        price = ${movieData.price} 
    WHERE id = ${movieData.id};
  `;
  console.log("Movie updated: " + movieData.title);
  return update;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed update the movie.');
  }
}
