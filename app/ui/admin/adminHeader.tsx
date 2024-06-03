import { signOut } from "@/auth";
import { PowerIcon } from '@heroicons/react/24/outline';
import  NavLink from "./navLink";
import Search from "../search"
import {Suspense} from "react";

export default function AdminPage() {
  
  return (
    <header className="fixed top-0 flex h-16 w-full items-center justify-between px-4 md:px-6 bg-gray-950 text-white gap-4">
        <NavLink/>
        <div className="flex items-center gap-4">
        <div className="flex-1 max-w-sm gap-4 flex items-center justify-center">
                <Suspense>
                    <Search placeholder="Search..." />
                </Suspense>
            </div>
            <form
        action={async () => {
          'use server';
          await signOut();
        }}
        >
          <button className="flex h-[48px] w-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-red-500 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
          </button>
        </form>
        </div>
    </header>
  )
}

