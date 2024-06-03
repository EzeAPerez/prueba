const { db } = require('@vercel/postgres');

const series = [
    "Breaking Bad",
    "Game of Thrones",
    "The Wire",
    "Stranger Things",
    "The Crown",
    "Friends",
    "The Office",
    "Sherlock",
    "The Mandalorian",
    "The Witcher",
    "Fargo",
    "True Detective",
    "Westworld",
    "Mindhunter",
    "Black Mirror",
    "The Handmaid's Tale",
    "The Sopranos",
    "Better Call Saul",
    "Mad Men",
    "House of Cards",
    "Ozark",
    "Peaky Blinders",
    "The Boys",
    "The Umbrella Academy",
    "Succession",
    "Euphoria",
    "Chernobyl",
    "Killing Eve",
    "Brooklyn Nine-Nine",
    "Parks and Recreation"
  ];

const peliculas = [
    "The Godfather",
    "Titanic",
    "Pulp Fiction",
    "The Dark Knight",
    "The Lord of the Rings: The Fellowship of the Ring",
    "Star Wars: Episode IV - A New Hope",
    "The Silence of the Lambs",
    "The Lion King",
    "Gladiator",
    "Back to the Future",
    "The Godfather: Part II",
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
        CREATE TABLE IF NOT EXISTS productos (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,   
          type VARCHAR(255) NOT NULL,
          title VARCHAR(255) NOT NULL,
          year VARCHAR(255) NOT NULL,
          poster VARCHAR(255) NOT NULL,
          plot VARCHAR(255) NOT NULL,
          runtime VARCHAR(255) NOT NULL,
          genere VARCHAR(255) NOT NULL,
          director VARCHAR(255),
          writer VARCHAR(255),
          actors VARCHAR(255),
          totalSeason VARCHAR(255),
          price SMALLINT NOT NULL
        );`;

        console.log(`Created "users" table`);

        const insertedPeliculas = await Promise.all(
            peliculas.map(async (pelicula) => {
                console.log(`Inserting ${pelicula}`);
                const datosPelicula = await fetchPelicula(pelicula);
                console.log(`Inserting 2 ${datosPelicula.title}`);
                return client.sql`
                    INSERT INTO productos (type, title, year, poster, plot, runtime, genere, director, actors, price)
                    VALUES ("pelicula",${datosPelicula.title}, ${datosPelicula.year}, ${datosPelicula.poster}, ${datosPelicula.plot}, ${datosPelicula.runtime}, ${datosPelicula.genere}, ${datosPelicula.director}, ${datosPelicula.actors}, ${datosPelicula.price})
                    ON CONFLICT (id) DO NOTHING;
                `;
            }),
        );
        
        const insertedSeries = await Promise.all(
            series.map(async (serie) => {
                const datosSerie = await fetchSerie(serie);
                console.log(`Inserting serie ${datosSerie.title}`);
                return client.sql`
                    INSERT INTO productos (type, title, year, poster, plot, runtime, genere, writer, actors, totalSeasons, price)
                    VALUES ("serie",${datosSerie.title}, ${datosSerie.year}, ${datosSerie.poster}, ${datosSerie.plot}, ${datosSerie.runtime}, ${datosSerie.genere}, ${datosSerie.writer}, ${datosSerie.actors}, ${datosSerie.totalSeasons}, ${datosSerie.price})
                    ON CONFLICT (id) DO NOTHING;
                `;
            }),
        );

        return{
            createTable,
            insertedPeliculas,
            insertedSeries
        };
    }
    catch (error) {
        console.error('Error:', error);
}
}

async function seedPeliculas(client) {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    try {
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS peliculas (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,   
          title VARCHAR(255) NOT NULL,
          year VARCHAR(255) NOT NULL,
          poster VARCHAR(255) NOT NULL,
          plot VARCHAR(255) NOT NULL,
          runtime VARCHAR(255) NOT NULL,
          genere VARCHAR(255) NOT NULL,
          director VARCHAR(255) NOT NULL,
          actors VARCHAR(255) NOT NULL,
          price SMALLINT NOT NULL,
          disable BOOLEAN NOT NULL DEFAULT FALSE
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
                    ON CONFLICT (id) DO NOTHING;
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

async function seedSeries(client) {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    try {
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS series (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,  
          title VARCHAR(255) NOT NULL,
          year VARCHAR(255) NOT NULL,
          poster VARCHAR(255) NOT NULL,
          plot VARCHAR(255) NOT NULL,
          runtime VARCHAR(255) NOT NULL,
          genere VARCHAR(255) NOT NULL,
          writer VARCHAR(255) NOT NULL,
          actors VARCHAR(255) NOT NULL,
          totalSeasons SMALLINT,
          price SMALLINT NOT NULL,
          disable BOOLEAN NOT NULL DEFAULT FALSE
        );`;

        const insertedSeries = await Promise.all(
            series.map(async (serie) => {
                const datosSerie = await fetchSerie(serie);
                console.log(`Inserting serie ${datosSerie.title}`);
                return client.sql`
                    INSERT INTO series (title, year, poster, plot, runtime, genere, writer, actors, totalSeasons, price)
                    VALUES (${datosSerie.title}, ${datosSerie.year}, ${datosSerie.poster}, ${datosSerie.plot}, ${datosSerie.runtime}, ${datosSerie.genere}, ${datosSerie.writer}, ${datosSerie.actors}, ${datosSerie.totalSeasons}, ${datosSerie.price})
                    ON CONFLICT (id) DO NOTHING;
                `;
            }),
        );
        return{
            createTable,
            insertedSeries
        };
    }
    catch (error) {
        console.error('Error:', error);
}
}

async function fetchSerie(titulo){
    var key="6d7434b2";
    var url="http://www.omdbapi.com/?apikey="+key+"&t="+titulo;
    try {
        console.log('Fetching serie data...');
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch serie.');
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
            writer: data.Writer,
            actors: data.Actors,
            totalSeasons: data.totalSeasons,
            price: numeroAleatorio
        };
    } catch (error) {
        throw new Error('Failed to fetch serie.');
    }
}

async function seedTransactions(client) {
    
}
async function main() {
    const client = await db.connect();
  
    await seedPeliculas(client);
    await seedSeries(client);
    await client.end();
  }
  
  main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });