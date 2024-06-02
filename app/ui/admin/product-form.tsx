'use client';

import { useState } from 'react';
import { Producto } from "@/app/lib/definitions";
import { updateMovie } from "@/app/lib/dataFilms"; 
import { useRouter } from 'next/navigation';

interface ProductFormProps {
  movieData: Producto;
}

export default function ProductForm({ movieData }: ProductFormProps) {
  const [formData, setFormData] = useState({ ...movieData });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    //e.preventDefault();
    try {
      await updateMovie(formData);
      alert('Movie updated successfully');
      router.push('/admin/movies');
    } catch (error) {
      console.error('Failed to update movie', error);
    }
  };

  return (
    <div className="text-white bg-gray-950 shadow-sm rounded-lg p-6 w-full">
      <div>
        <h2 className="text-xl font-bold mb-4">Movie</h2>
        <form onSubmit={handleSubmit} className="bg-[#0F1A2F] rounded-lg p-6 space-y-4">
          <div>
            <label className="block font-medium mb-1" htmlFor="title">
              Title
            </label>
            <input
              className="bg-[#0B1120] border border-gray-200 rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#4F46E5] dark:border-gray-800"
              id="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label className="block font-medium mb-1" htmlFor="year">
                Year
              </label>
              <input
                className="bg-[#0B1120] border border-gray-200 rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#4F46E5] dark:border-gray-800"
                id="year"
                type="number"
                value={formData.year}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="poster">
              Poster
            </label>
            <input
              className="bg-[#0B1120] border border-gray-200 rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#4F46E5] dark:border-gray-800"
              id="poster"
              type="text"
              value={formData.poster}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="plot">
              Plot
            </label>
            <textarea
              className="bg-[#0B1120] border border-gray-200 rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#4F46E5] resize-none dark:border-gray-800"
              id="plot"
              value={formData.plot}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="runtime">
              Runtime
            </label>
            <input
              className="bg-[#0B1120] border border-gray-200 rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#4F46E5] dark:border-gray-800"
              id="runtime"
              type="text"
              value={formData.runtime}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="genere">
              Genere
            </label>
            <input
              className="bg-[#0B1120] border border-gray-200 rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#4F46E5] dark:border-gray-800"
              id="genere"
              type="text"
              value={formData.genere}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="director">
              Director
            </label>
            <input
              className="bg-[#0B1120] border border-gray-200 rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#4F46E5] dark:border-gray-800"
              id="director"
              type="text"
              value={formData.director}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block font-medium mb-1" htmlFor="actors">
              Actors
            </label>
            <input
              className="bg-[#0B1120] border border-gray-200 rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#4F46E5] dark:border-gray-800"
              id="actors"
              type="text"
              value={formData.actors}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label className="block font-medium mb-1" htmlFor="price">
                Price
              </label>
              <input
                className="bg-[#0B1120] border border-gray-200 rounded-md py-2 px-3 w-full focus:outline-none focus:ring focus:ring-[#4F46E5] dark:border-gray-800"
                id="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit Info
          </button>
        </form>
      </div>
    </div>
  );
}




