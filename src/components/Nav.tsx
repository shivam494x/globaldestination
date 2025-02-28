"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  name: string;
  href: string;
};

export default function Nav({ navLinks }: { navLinks: NavLink[] }) {
  const pathname = usePathname(); // Get current route

  return (
    <ul className="flex h-full">
      {navLinks.map((link, index) => {
        const isActive = pathname === link.href;

        return (
          <li key={index} className="h-full center">
            <Link
              href={link.href}
              className={`capitalize center w-max px-3 mx-2 h-full border-primary hover:text-primary 
                ${isActive ? "text-primary border-b" : ""}`} // Apply active styles
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
