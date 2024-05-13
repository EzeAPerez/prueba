const { db } = require('@vercel/postgres');

const peliculas = [
    "The Godfather",
    "Titanic",
    "The Shawshank Redemption",
    "Pulp Fiction",
    "Forrest Gump",
    "The Dark Knight",
    "Schindler's List",
    "Inception",
    "The Matrix",
    "The Lord of the Rings: The Fellowship of the Ring",
    "Fight Club",
    "Star Wars: Episode IV - A New Hope",
    "The Silence of the Lambs",
    "The Lion King",
    "Gladiator",
    "Back to the Future",
    "The Green Mile",
    "The Godfather: Part II",
    "The Departed",
    "Saving Private Ryan",
    "The Shawshank Redemption",
    "The Dark Knight Rises",
    "The Lord of the Rings: The Return of the King",
    "The Lord of the Rings: The Two Towers",
    "Forrest Gump",
    "The Avengers",
    "Jurassic Park",
    "Avatar",
    "The Great Gatsby",
    "Inglourious Basterds",
    "The Departed",
    "The Wolf of Wall Street",
    "The Grand Budapest Hotel",
    "Gone with the Wind",
    "Casablanca",
    "The Wizard of Oz",
    "Psycho",
    "The Shining",
    "Goodfellas",
    "Fight Club",
    "Inception",
    "The Usual Suspects",
    "The Terminator",
    "Alien",
    "The Godfather: Part III",
    "The Green Mile",
    "The Sixth Sense",
    "Schindler's List",
    "The Matrix",
    "Interstellar"
  ];


async function seedPeliculas(client) {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    try {
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS peliculas (
          title VARCHAR(255) PRIMARY KEY NOT NULL,
          year VARCHAR(255) NOT NULL,
          poster VARCHAR(255) NOT NULL,
          plot VARCHAR(255) NOT NULL,
          runtime VARCHAR(255) NOT NULL,
          genere VARCHAR(255) NOT NULL,
          director VARCHAR(255) NOT NULL,
          actors VARCHAR(255) NOT NULL,
          price SMALLINT NOT NULL
        );`;

        console.log(`Created "users" table`);
        const insertedPeliuclas = await Promise.all(
            peliculas.map(async (pelicula) => {
                console.log(`Inserting ${pelicula}`);
                const datosPelicula = await fetchPelicula(pelicula);
                console.log(`Inserting 2 ${datosPelicula.title}`);
                return client.sql`
                    INSERT INTO peliculas (title, year, poster, plot, runtime, genere, director, actors, price)
                    VALUES (${datosPelicula.title}, ${datosPelicula.year}, ${datosPelicula.poster}, ${datosPelicula.plot}, ${datosPelicula.runtime}, ${datosPelicula.genere}, ${datosPelicula.director}, ${datosPelicula.actors}, ${datosPelicula.price})
                    ON CONFLICT (title) DO NOTHING;
                `;
            }),
        );
        return{
            createTable,
            insertedPeliuclas
        };
    }
    catch (error) {
        console.error('Error:', error);
}
}

async function fetchPelicula(titulo){
    var key="6d7434b2";
    var url="http://www.omdbapi.com/?apikey="+key+"&t="+titulo;
    try {
        console.log('Fetching revenue data...');
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch pelicula.');
        }
        var numeroAleatorio = Math.floor(Math.random() * 30) + 1;
        const data = await response.json();
        return {
            title: data.Title,
            year: data.Year,
            poster: data.Poster,
            plot: data.Plot,
            runtime: data.Runtime,
            genere: data.Genre,
            director: data.Director,
            actors: data.Actors,
            price: numeroAleatorio
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