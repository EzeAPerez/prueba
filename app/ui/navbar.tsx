'use client'
import Link from "next/link"
import { SearchIcon, ShoppingCartIcon, UserIcon } from "@/app/ui/icon"
import {Button} from "./button"
import { useState } from "react";

export default function Component() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full flex h-16 items-center justify-between px-4 md:px-6 bg-white shadow dark:bg-gray-800 dark:text-white ">
      <Link className="flex items-center gap-2" href="/">
        <span className="font-semibold text-lg">Acme Store</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-400" href="/productos">
          Men
        </Link>
        <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-400" href="#">
          Women
        </Link>
        <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-400" href="#">
          Kids
        </Link>
        <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-400" href="#">
          Home
        </Link>
        <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-400" href="#">
          Beauty
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link className="hover:text-gray-900 dark:hover:text-gray-400" href="#">
          <SearchIcon/>
          <span className="sr-only">Search</span>
        </Link>
        <Link className="hover:text-gray-900 dark:hover:text-gray-400" href="#">
        <UserIcon/>
          <span className="sr-only">Account</span>
        </Link>
        <Link className="hover:text-gray-900 dark:hover:text-gray-400" href="#">
        <ShoppingCartIcon/>
          <span className="sr-only">Cart</span>
        </Link>
      </div>
      <div className="md:hidden">
      <Button onClick={toggleMenu}>
        <MenuIcon />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white shadow dark:bg-gray-800 dark:text-white">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-400" href="/productos">
                Men
              </Link>
            </li>
            <li>
              <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-400" href="#">
                Women
              </Link>
            </li>
            <li>
              <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-400" href="#">
                Kids
              </Link>
            </li>
            <li>
              <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-400" href="#">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-400" href="#">
                Beauty
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