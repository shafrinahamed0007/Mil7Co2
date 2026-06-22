"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathName = usePathname();
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Apps",
      path: "/apps",
    },
    {
      name: "Install Apps",
      path: "/installation",
    },
  ];
  return (
    <div className="flex gap-4">
      {navLinks.map((link) => (
        <li key={link.path}>
          <Link
            href={link.path}
            className={`${pathName === link.path ? " underline underline-offset-4 text-white" : "hover:text-white hover:underline hover:underline-offset-4"} rounded-lg transition-all duration-300`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default NavLinks;
