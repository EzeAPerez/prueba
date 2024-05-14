'use client';
import Link from "next/link";
import Search from '@/app/ui/search';
import {ShoppingCartIcon, UserIcon } from "@/app/ui/icono"
import {Button} from "./button"
import { Suspense, useState } from "react";

export default function Component() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 flex h-16 w-full items-center justify-between px-4 md:px-6 bg-gray-800 text-white gap-4">
      <div className="flex items-center gap-4">
        <Link href="/">
          <span className="font-semibold text-lg">Acme Store</span>
        </Link>
        <div className="hidden md:flex gap-4">
          <Link className="dark:hover:text-gray-400" href="/productos">
            <span>Films</span>
          </Link>
         <Link className="dark:hover:text-gray-400" href="/productos">
            <span>Series</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 md:gap-6">
        <div className="flex-1 max-w-md gap-4 flex items-center justify-center">
          <Suspense>
            <Search placeholder="Search films..." />
            <span className="sr-only">Search</span>
          </Suspense>
        </div>
        <Link className="hover:text-gray-900 dark:hover:text-gray-400" href="#">
        <UserIcon/>
          <span className="sr-only">Account</span>
        </Link>
        <Link className="hover:text-gray-900 dark:hover:text-gray-400" href="/carrito">
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
          <nav className="absolute top-16 left-0 w-full bg-white shadow border border-gray-700 dark:bg-gray-800 dark:text-white">
            <ul className="flex w-full flex-col gap-4 p-4">
              <li>
                <Link className=" dark:hover:text-gray-400" href="/productos">
                  <span className="">Films</span>
                </Link>
              </li>
              <li>
                <Link className="w-full dark:hover:text-gray-400" href="/productos">
                  <span className="">Series</span>
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