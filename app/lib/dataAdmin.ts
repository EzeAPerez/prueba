'use server'

import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import {Producto} from "./definitions"

export async function getAllFilms(){
    try {
      const price = await sql`SELECT *
      FROM peliculas
    `;
    return price.rows[0].price;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch all films.');
    }
  }

  export async function fetchPelicula(pelicula: string) {
    noStore();
   
    try {
       console.log('Fetching revenue data...'+pelicula);
  
      const data = await sql<Producto>`SELECT * FROM peliculas WHERE title ILIKE ${pelicula}`;
      data.rows[0].type="pelicula";

      return data.rows[0];
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch un pelicula data.');
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
          price = ${movieData.price} , disable = ${movieData.disable}
      WHERE id = ${movieData.id};
    `;
    console.log("Movie updated: " + movieData.title);
    return update;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed update the movie.');
    }
  }

  
export async function getAllSeries(){
    try {
      const price = await sql`SELECT *
      FROM series
    `;
    return price.rows[0].price;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch all series.');
    }
  }

  export async function updateSerie(serieData: Producto) {
    noStore();
    console.log(serieData);
    try {
      const update = await sql<Producto>`
      UPDATE peliculas
      SET year = ${serieData.year}, poster = ${serieData.poster}, runtime = ${serieData.runtime},
          genere = ${serieData.genere}, writer = ${serieData.director}, actors = ${serieData.actors},
          totalSeasons = ${serieData.totalSeasons}, price = ${serieData.price}, disable = ${serieData.disable}
      WHERE id = ${serieData.id};
    `;
    console.log("Movie updated: " + serieData.title);
    return update;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed update the serie.');
    }
  }

  export async function fetchSerie(serie: string) {
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
    noStore();
   
    try {
       console.log('Fetching revenue data...'+serie);
  
      const data = await sql<Producto>`SELECT * FROM series WHERE title ILIKE ${serie}`;
      data.rows[0].type="serie";

      return data.rows[0];
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch un serie data.');
    }
  }

export async function updateEnabledProduct(id: string, disable: boolean, type: string) {
    noStore();
    console.log(id+" - "+disable+" - "+type);
    try {
      const update = await sql<Producto>`
      UPDATE peliculas
      SET disable = ${disable}
      WHERE id = ${id};
    `;
    console.log("Product updated: " + id);
    return update;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to update the product.');
    }   
}

export async function isDisabled(id: string) {
    noStore();
    try {
      const disable = await sql<Producto>`
      SELECT disable
      FROM peliculas
      WHERE id = ${id};
    `;
    console.log("Product updated: " + id);
    return disable.rows[0].disable;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to update the product.');
    }   
}


export async function totalPages(query: string) {
    noStore();
    try {
      const total = await sql`SELECT count(*) FROM ${query}`;
      return total.rows[0].count;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch total pages.');
    }
  }