"use client"
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [sign, setSign] = useState(false);

  return (

    <div className="border-b border-gray-200">
      <div className="container mx-auto">

        <div className="navbar pt-4">


          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/home">Home</Link></li>
                <li><Link href="/all-tiles">All Tiles</Link></li>
                <li><Link href="/profile">My Profile</Link></li>
              </ul>
            </div>
            <Link href="/" className="btn btn-ghost normal-case text-xl md:text-2xl font-bold">
              Tiles Gallery
            </Link>
          </div>


          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><Link href="/home">Home</Link></li>
              <li><Link href="/all-tiles">All Tiles</Link></li>
              <li><Link href="/profile">My Profile</Link></li>
            </ul>
          </div>

          <div className="navbar-end">
            {sign ? (
              <button className="btn btn-outline btn-sm" onClick={() => setSign(false)}>
                Sign Out
              </button>
            ) : (
              <button className="btn btn-primary btn-sm" onClick={() => setSign(true)}>
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

