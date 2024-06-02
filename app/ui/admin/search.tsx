
import { useState, ChangeEvent, KeyboardEvent } from 'react';
import {fetchUnaPelicula} from '@/app/lib/dataFilms';
  
export default async function Search() {
    const [query, setQuery] = useState('');
      
    const handleKeyPress = async () => { await fetchUnaPelicula(query);};

    return (
        <div className="flex items-center">
            <input 
              className="rounded-md bg-gray-200 dark:bg-gray-700 p-2 w-full" 
              id="search" 
              placeholder="films..." 
              type="text" 
            />
            <button
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => handleKeyPress()}
            >
            Search
            </button>
        </div>
  );
}