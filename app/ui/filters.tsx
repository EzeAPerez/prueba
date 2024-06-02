'use client';
import {useState } from "react";
import Link from "next/link";
import { obtenerMoviesFilters} from "@/app/lib/dataFilms";
import { InboxIcon} from "@heroicons/react/24/outline";
import { Button } from "./button";

export async function Filters() {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    
    const data = await obtenerMoviesFilters();

    return (
        <div className="p-4">
        <Button onClick={toggleMenu}>
          <InboxIcon title="Toggle navigation menu" className="w-6 h-6"/>
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
        {isOpen && (
          <nav className="absolute z-10 w-64 shadow rounder rounded-lg border border-gray-200 bg-gray-900">
            <ul className="text-white flex w-full flex-col gap-4 p-4">
            </ul>
            </nav>
        )}
      </div>
    )
}