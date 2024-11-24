"use client";
import {signOut, useSession} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const session = useSession();

  return (
    <div className="navbar bg-blue-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/products"}>Products</Link>
            </li>
            <li>
              <Link href={"/blogs"}>Blogs</Link>
            </li>
            <li>
              <Link href={"/social-media"}>Social Media</Link>
            </li>
            <li>
              <Link href={"/admin-panel "}>Admin Panel </Link>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost text-xl">
          YogaVerse
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/products"}>Products</Link>
          </li>
          <li>
            <Link href={"/blogs"}>Blogs</Link>
          </li>
          <li>
            <Link href={"/social-media"}>Social Media</Link>
          </li>
          <li>
            <Link href={"/admin-panel "}>Admin Panel </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        
          {session.data?<div className="flex gap-2"><Image
            alt={session?.data?.user?.name}
            src={session?.data?.user?.image}
            height={50}
            width={50}
            className="rounded-full"
          /> </div>: ''}
        
        {!session.data ? (
          <Link href="/login" className="btn btn-secondary px-8">
            Login
          </Link>
        ) : (
          <button
            className="btn btn-outline btn-ghost px-8"
            onClick={() => signOut()}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
