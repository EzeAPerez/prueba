export type Producto = {
    id: string;
    type : "serie" | "pelicula";
    title: string;
    year: number;
    poster: string;
    plot: string;
    runtime: string;
    genere: string;
    director: string;
    writer: string;
    actors: string;
    totalSeasons: number;
    price: number;
  };

  export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };