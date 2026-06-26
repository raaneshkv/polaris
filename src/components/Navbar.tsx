"use client";

import { useState } from "react";
import { SearchIcon, XMarkIcon } from "./icons";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-oceanic-noir/85 backdrop-blur-md border-b border-mystic-mint/10 opacity-0 animate-stagger-fade [animation-delay:180ms]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl md:text-2xl font-display font-black tracking-widest text-forsythia group-hover:text-deep-saffron transition-colors duration-micro">
            POLARIS
          </span>
          <span className="w-2 h-2 rounded-full bg-deep-saffron animate-pulse" />
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Global" className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-display font-bold text-arctic-powder/85 hover:text-forsythia transition-colors duration-micro"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-sm font-display font-bold text-arctic-powder/85 hover:text-forsythia transition-colors duration-micro"
          >
            Pricing
          </a>
          <a
            href="#social"
            className="text-sm font-display font-bold text-arctic-powder/85 hover:text-forsythia transition-colors duration-micro"
          >
            Proof
          </a>
        </nav>

        {/* Utility / Call to action */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            aria-label="Search site"
            className="p-2 text-arctic-powder/75 hover:text-forsythia transition-colors duration-micro cursor-pointer"
          >
            <SearchIcon size={20} />
          </button>
          <a
            href="#pricing"
            className="px-5 py-2.5 bg-forsythia text-oceanic-noir font-display font-black text-xs rounded-lg hover:bg-deep-saffron hover:text-arctic-powder transition-colors duration-micro"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu triggers */}
        <div className="flex md:hidden items-center gap-4">
          <button
            type="button"
            aria-label="Search site"
            className="p-2 text-arctic-powder/75 hover:text-forsythia transition-colors duration-micro"
          >
            <SearchIcon size={20} />
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open main menu"
            className="p-2 text-arctic-powder/75 hover:text-forsythia transition-colors duration-micro"
          >
            {/* Hamburger lines */}
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu drawer overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-oceanic-noir p-6 flex flex-col justify-between md:hidden">
          <div>
            <div className="flex items-center justify-between">
              <a href="#" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <span className="text-xl font-display font-black tracking-widest text-forsythia">
                  POLARIS
                </span>
                <span className="w-2 h-2 rounded-full bg-deep-saffron" />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="p-2 text-arctic-powder/75 hover:text-forsythia transition-colors duration-micro"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon size={24} />
              </button>
            </div>

            <nav className="mt-12 flex flex-col gap-6">
              <a
                href="#features"
                onClick={() => setIsOpen(false)}
                className="text-lg font-display font-bold text-arctic-powder/85 hover:text-forsythia transition-colors duration-micro py-2 border-b border-mystic-mint/10"
              >
                Features
              </a>
              <a
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="text-lg font-display font-bold text-arctic-powder/85 hover:text-forsythia transition-colors duration-micro py-2 border-b border-mystic-mint/10"
              >
                Pricing
              </a>
              <a
                href="#social"
                onClick={() => setIsOpen(false)}
                className="text-lg font-display font-bold text-arctic-powder/85 hover:text-forsythia transition-colors duration-micro py-2 border-b border-mystic-mint/10"
              >
                Proof
              </a>
            </nav>
          </div>

          <div className="mt-auto">
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="block w-full py-4 text-center bg-forsythia text-oceanic-noir font-display font-black text-sm rounded-xl hover:bg-deep-saffron hover:text-arctic-powder transition-colors duration-micro"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
