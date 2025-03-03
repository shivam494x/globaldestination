"use client";
import * as React from "react";
import {  ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Domestic",
    path: "/domestic",
    packages: [
      { name: "India Gate", path: "/domestic/india-gate" },
      { name: "Goa Beach", path: "/domestic/goa-beach" },
      { name: "Jaipur Fort", path: "/domestic/jaipur-fort" },
      { name: "Kashmir Valley", path: "/domestic/kashmir-valley" },
      { name: "Manali Hills", path: "/domestic/manali-hills" },
      { name: "Kerala Backwaters", path: "/domestic/kerala-backwaters" },
    ],
  },
  {
    name: "International",
    path: "/international",
    packages: [
      { name: "Eiffel Tower, Paris", path: "/international/paris" },
      { name: "Bali Island, Indonesia", path: "/international/bali" },
      { name: "Dubai City Tour", path: "/international/dubai" },
      { name: "Maldives Beaches", path: "/international/maldives" },
      { name: "Swiss Alps, Switzerland", path: "/international/switzerland" },
      { name: "Santorini, Greece", path: "/international/santorini" },
    ],
  },
  {
    name: "Fixed Departure",
    path: "/fixed-departure",
    packages: [
      { name: "Eiffel Tower, Paris", path: "/fixed-departure/paris" },
      { name: "Bali Island, Indonesia", path: "/fixed-departure/bali" },
      { name: "Dubai City Tour, UAE", path: "/fixed-departure/dubai" },
      { name: "Maldives Beaches", path: "/fixed-departure/maldives" },
      { name: "Rome Colosseum, Italy", path: "/fixed-departure/rome" },
    ],
  },

  { name: "Hot Deals", path: "/deals" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  const toggleDropdown = (name: string | null) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="w-full bg-transparent">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center gap-2 p-4">
        {navLinks.map((link) => (
          <div key={link.name} className="relative group">
            {link.packages ? (
              <>
                <Link
                  href={link.path}
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="px-4 py-2 text-sm font-medium cursor-pointer center rounded-sm"
                >
                  <span className="mr-2">{link.name}</span>
                  <span className="group-hover:rotate-180 duration-300">
                    <ChevronDown size={15} />
                  </span>
                </Link>
                {openDropdown === link.name && (
                  <div
                    className="absolute left-0 top-full backdrop-blur-xl border border-gray-400 shadow-lg rounded-lg w-48 p-2"
                    onMouseEnter={() => setOpenDropdown(link.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.packages.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.path}
                        className="block px-2 py-1 my-2 text-sm font-medium hover:translate-x-0.5 duration-100"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={link.path}
                className="px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black rounded-sm center"
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between p-4">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 w-80 h-screen  backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col items-center p-6`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        <div className="w-full mt-16">
          {navLinks.map((link) => (
            <div key={link.name} className="relative w-full">
              {link.packages ? (
                <>
                  <div className="flex  border-b">
                    <Link
                      href={link.path}
                      className="p-2 my-3 font-medium w-full text-left rounded-md flex justify-between items-center "
                    >
                      {link.name}
                    </Link>
                    <button onClick={() => toggleDropdown(link.name)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openDropdown === link.name ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openDropdown === link.name
                        ? "max-h-80 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {link.packages.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.path}
                        className="block px-2 ml-4 my-2 py-2 text-sm font-medium text-gray-20 border-b"
                        onClick={() => setIsOpen(false)}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.path}
                  className="block p-2 my-3 text-sm font-medium hover:bg-gray-200   border-b"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
