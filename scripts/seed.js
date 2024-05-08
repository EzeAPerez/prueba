const { db } = require('@vercel/postgres');

const {peliculas}= requiere('../lib/placeholder-data');
var key="6d7434b2";

async function seedPeliculas(client) {
    try {
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS peliculas (
          name VARCHAR(255) NOT NULL,
          year VARCHAR(255) NOT NULL,
          poster VARCHAR(255) NOT NULL,
          plot VARCHAR(255) NOT NULL,
          runtime VARCHAR(255) NOT NULL,
          genere VARCHAR(255) NOT NULL,
          duration VARCHAR(255) NOT NULL,
          director VARCHAR(255) NOT NULL,
          actors VARCHAR(255) NOT NULL
        );`;

        const insertedPeliuclas = await Promise.all(
            peliculas.map((pelicula) => {
                datosPelicula = fetchPelicula(pelicula);
                client.sql`
                    INSERT INTO peliculas (name, year, poster, plot, runtime, genere, duration, director, actors)
                    VALUES (${pelicula.name}, ${pelicula.year}, ${pelicula.poster}, ${pelicula.plot}, ${pelicula.runtime}, ${pelicula.genere}, ${pelicula.duration}, ${pelicula.director}, ${pelicula.actors})
                    ON CONFLICT (id) DO NOTHING;
                `;
            }),
        );
    }
    catch (error) {
}
}

function fetchPelicula(titulo){
    var url="http://www.omdbapi.com/?apikey="+key+"&t="+titulo;
    try {
        const response = fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch pelicula.');
        }
        const data = response.json();
        return {
            titulo: data.Title,
            year: parseInt(data.Year),
            poster: data.Poster,
            plot: data.Plot,
            runtime: data.Runtime,
            genere: data.Genre,
            duration: data.Runtime,
            director: data.Director,
            actors: data.Actors
        };
    } catch (error) {
        throw new Error('Failed to fetch pelicula.');
    }
}

async function main() {
    const client = await db.connect();
  
    await seedPeliculas(client);
    await client.end();
  }
  
  main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });