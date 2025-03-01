"use client";
import * as React from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Domestic", href: "/domestic" },
  { name: "International", href: "/international" },
  { name: "Fixed Departure", href: "/fixed" },
  { name: "Blog", href: "/blog" },
  { name: "Hot Deals", href: "/deals" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="w-full bg-transparent">
      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex justify-center gap-6">
        <NavigationMenuList>
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.name}>
              <NavigationMenuLink asChild>
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium hover:bg-gray-200  transition-colors"
                >
                  {link.name}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        ref={menuRef}
        className={`fixed inset-0 backdrop-blur-lg transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col items-center justify-center gap-6 shadow-lg p-6`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="px-4 py-2 w-full text-center hover:bg-gray-200 transition-colors"
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
