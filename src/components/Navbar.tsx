"use client";

import { useState, useEffect, useRef } from "react";
import { SearchIcon, XMarkIcon } from "./icons";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#social", label: "Case Studies" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-structural ${
        scrolled
          ? "bg-oceanic-noir/95 backdrop-blur-lg border-b border-mystic-mint/10 shadow-xl shadow-black/20"
          : "bg-oceanic-noir/80 backdrop-blur-md border-b border-mystic-mint/5"
      } opacity-0 animate-stagger-fade [animation-delay:180ms]`}
    >
      {/* Skip to main content — accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-forsythia focus:text-oceanic-noir focus:font-bold focus:rounded-lg focus:text-sm"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a href="#" className="flex items-center gap-2 group" aria-label="Polaris — home">
          <span className="text-xl md:text-2xl font-display font-black tracking-widest text-forsythia group-hover:text-deep-saffron transition-colors duration-micro">
            POLARIS
          </span>
          <span className="w-2 h-2 rounded-full bg-deep-saffron" style={{ animation: "glow-pulse 2s ease-in-out infinite" }} />
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`text-sm font-display font-bold transition-colors duration-micro relative group ${
                activeSection === href
                  ? "text-forsythia"
                  : "text-arctic-powder/80 hover:text-forsythia"
              }`}
            >
              {label}
              {/* Active underline indicator */}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-forsythia rounded-full transition-all duration-micro ${
                  activeSection === href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Utility / Call to action */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            aria-label="Search site"
            className="p-2 text-arctic-powder/70 hover:text-forsythia transition-colors duration-micro cursor-pointer"
          >
            <SearchIcon size={20} />
          </button>
          <a
            href="#pricing"
            className="px-5 py-2.5 bg-forsythia text-oceanic-noir font-display font-black text-xs rounded-lg hover:bg-deep-saffron hover:text-arctic-powder hover:scale-[1.02] active:scale-[0.98] transition-all duration-micro shadow-md shadow-forsythia/20"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-4">
          <button
            type="button"
            aria-label="Search site"
            className="p-2 text-arctic-powder/70 hover:text-forsythia transition-colors duration-micro"
          >
            <SearchIcon size={20} />
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open main menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="p-2 text-arctic-powder/70 hover:text-forsythia transition-colors duration-micro"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {isOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="fixed inset-0 z-50 bg-oceanic-noir p-6 flex flex-col justify-between md:hidden"
        >
          <div>
            <div className="flex items-center justify-between">
              <a href="#" onClick={() => setIsOpen(false)} className="flex items-center gap-2" aria-label="Polaris — home">
                <span className="text-xl font-display font-black tracking-widest text-forsythia">
                  POLARIS
                </span>
                <span className="w-2 h-2 rounded-full bg-deep-saffron" />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="p-2 text-arctic-powder/70 hover:text-forsythia transition-colors duration-micro"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon size={24} />
              </button>
            </div>

            <nav className="mt-12 flex flex-col gap-6" aria-label="Mobile navigation">
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-display font-bold text-arctic-powder/85 hover:text-forsythia transition-colors duration-micro py-2 border-b border-mystic-mint/10"
                >
                  {label}
                </a>
              ))}
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
