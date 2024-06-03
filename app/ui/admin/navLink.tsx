'use client'
import Link from "next/link"
import { Button } from "../button"
import { useState } from "react";

export default function NavLink() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return (
        <>
            <div className="hidden lg:flex items-center gap-4">
                <div className="flex items-center">
                    <h1 className="text-xl font-bold px-4">
                        <Link className="hover:text-[#4b6bfb] transition-colors" href={"/admin"}>
                            Media Manager
                        </Link>
                    </h1>
                    <div className="space-x-4">
                        <Link className="hover:text-[#4b6bfb] transition-colors" href="/admin/movies">
                            Movies
                        </Link>
                        <Link className="hover:text-[#4b6bfb] transition-colors" href="/admin/series">
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
            </div>
            <div className=" flex lg:hidden">
                <Button onClick={toggleMenu}>
                    <MenuIcon />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
                {isOpen && (
                    <nav className="absolute top-16 left-3 rounded shadow border border-gray-400 bg-gray-800">
                        <div className="grid gap-4 grid-cols-1 p-4">
                                <Link className="hover:text-blue-500 transition-colors" href="/admin">
                                    Home
                                </Link>
                                <Link className="hover:text-blue-500 transition-colors" href="/admin/movies">
                                    Movies
                                </Link>
                                <Link className="hover:text-blue-500 transition-colors" href="#">
                                    Series
                                </Link>
                                <Link className="hover:text-blue-500 transition-colors" href="#">
                                    Transactions
                                </Link>
                                <Link className="hover:text-blue-500 transition-colors" href="#">
                                    Add Movie
                                </Link>
                                <Link className="hover:text-blue-500 transition-colors w-full" href="#">
                                    Add Series
                                </Link>
                        </div>
                    </nav>
                )}
            </div>
            </>
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