import { sql } from '@vercel/postgres';
import {Peliculas} from "./definitions"
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
  
      const data = await sql<Peliculas>`SELECT * FROM peliculas`;
  
  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
  }

  export async function fetchUnaPelicula(pelicula: string) {
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
    noStore();
   
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
  
       console.log('Fetching revenue data...');
  
      const data = await sql<Peliculas>`SELECT * FROM peliculas WHERE title ILIKE ${pelicula}`;
  
      return data.rows[0];
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
  }
  