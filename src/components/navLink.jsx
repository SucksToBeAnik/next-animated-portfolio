"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ link }) {
  const pathName = usePathname();

  return (
    <Link
      href={link.url}
      className={`rounded px-2 py-1 transition-colors duration-200 ${
        pathName === link.url
          ? "bg-black/80 text-white" // Active link styles
          : "text-black hover:bg-gray-200 hover:text-black" // Default and hover styles
      }`}
    >
      {link.title}
    </Link>
  );
}

export default NavLink;