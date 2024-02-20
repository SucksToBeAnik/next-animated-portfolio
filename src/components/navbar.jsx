"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/contact", title: "Contact" },
  { url: "/portfolio", title: "Portfolio" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Links for >medium screens */}
      <div className="hidden md:flex gap-4 md:w-1/3">
        {links.map((link) => (
          <NavLink key={link.url} link={link} />
        ))}
      </div>
      {/* Links for >medium screens */}

      {/* LOGO */}
      <div className="md:hidden lg:flex lg:w-1/3 justify-center">
        <Link
          href="/"
          className="text-sm rounded-md p-1 bg-black flex h-8 justify-center items-center"
        >
          <span className="text-white font-semibold mr-1">Hello</span>
          <span className="bg-white rounded text-black px-1 font-bold">
            Dev
          </span>
        </Link>
      </div>
      {/* LOGO */}

      {/* Social Media Links */}
      <div className="hidden md:flex gap-4 md:w-1/3 justify-center">
        <Link href="#">
          <Image src="/github.png" alt="Github Icon" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image
            src="/facebook.png"
            alt="Facebook Icon"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#">
          <Image
            src="/linkedin.png"
            alt="Linkedin Icon"
            width={24}
            height={24}
          />
        </Link>
      </div>
      {/* Social Media Links */}

      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="h-8 w-10 flex flex-col justify-between z-50 relative"
        >
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {/* Menu Button */}

        {/* Menu List */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link key={link.url} href={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
        {/* Menu List */}
      </div>
      {/* Responsive Menu */}
    </div>
  );
}

export default Navbar;
