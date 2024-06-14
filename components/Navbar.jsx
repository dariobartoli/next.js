import Link from "next/link";
import React from "react";
import './navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar py-5">
        <Link href={'/'}>
            <h1 className="text-3xl font-bold">Next js. project</h1>
        </Link>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/store">Store</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
};
