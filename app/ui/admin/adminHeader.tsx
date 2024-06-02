"use client"

import Link from "next/link"
import { ShoppingCartIcon, UserIcon } from "@/app/ui/icono"
import { Button } from "../button"
import { Suspense, useState } from "react";
import Search from "../search"

export default function AdminPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 flex h-16 w-full items-center justify-between px-4 md:px-6 bg-gray-950 text-white gap-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">
            <Link className="hover:text-[#4b6bfb] transition-colors" href={"/admin"}>
              Media Manager
            </Link>
          </h1>
          <div className="hidden ml-8 md:flex space-x-4">
            <Link className="hover:text-[#4b6bfb] transition-colors" href="/admin/movies">
              Movies
            </Link>
            <Link className="hover:text-[#4b6bfb] transition-colors" href="#">
              Series
            </Link>
            <Link className="hover:text-[#4b6bfb] transition-colors" href="#">
              Transactions
            </Link>
            <Link className="hover:text-[#4b6bfb] transition-colors" href="#">
              Add Movie
            </Link>
            <Link className="hover:text-[#4b6bfb] transition-colors" href="#">
              Add Series
            </Link>
          </div>
        </div>
        <div className="md:hidden">
        </div>
      </div>
      <div className="flex-1 max-w-sm gap-4 flex items-center justify-center">
        <Suspense>
          <Search placeholder="Search..." />
        </Suspense>
      </div>
      <div className="md:hidden">
        <Button onClick={toggleMenu}>
          <MenuIcon />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
        {isOpen && (
          <nav className="absolute top-16 left-0 w-full shadow border border-gray-700 bg-gray-800">
            <ul className="flex w-full flex-col gap-4 p-4">
              <li>
                <Link className="hover:text-[#4b6bfb] transition-colors" href="/admin/movies">
                  Movies
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#4b6bfb] transition-colors" href="#">
                  Series
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#4b6bfb] transition-colors" href="#">
                  Transactions
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#4b6bfb] transition-colors" href="#">
                  Add Movie
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#4b6bfb] transition-colors" href="#">
                  Add Series
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}