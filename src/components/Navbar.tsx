"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { SearchIcon, XMarkIcon } from "./icons";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#social", label: "Case Studies" },
];

// Searchable page sections
const SEARCH_ITEMS = [
  { label: "Features", href: "#features", description: "Autonomous workflows and data pipelines" },
  { label: "Pricing", href: "#pricing", description: "Scout, Voyager, Polaris plans" },
  { label: "Case Studies", href: "#social", description: "Client proof and results" },
  { label: "Deploy Polaris", href: "#pricing", description: "Get started with a plan" },
  { label: "Automate Pipelines", href: "#features", description: "AI-driven data pipeline automation" },
  { label: "Real-time Sync", href: "#features", description: "CDC and continuous data synchronization" },
  { label: "Analytics", href: "#features", description: "Unified analytics and monitoring" },
  { label: "Enterprise Plan", href: "#pricing", description: "Planet-scale workflows and dedicated nodes" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    } else {
      setSearchQuery("");
    }
  }, [searchOpen]);

  // Close search on outside click
  useEffect(() => {
    if (!searchOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && searchOpen) setSearchOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [searchOpen]);

  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  const filteredResults = searchQuery.trim().length > 0
    ? SEARCH_ITEMS.filter(
        (item) =>
          item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleResultClick = (href: string) => {
    setSearchOpen(false);
    // Small delay so the UI closes cleanly before scrolling
    setTimeout(() => {
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

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
        <a href="#" className="flex items-center gap-2 group shrink-0" aria-label="Polaris — home">
          <span className="text-xl md:text-2xl font-display font-black tracking-widest text-forsythia group-hover:text-deep-saffron transition-colors duration-micro">
            POLARIS
          </span>
          <span
            className="w-2 h-2 rounded-full bg-deep-saffron"
            style={{ animation: "glow-pulse 2s ease-in-out infinite" }}
          />
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
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-forsythia rounded-full transition-all duration-micro ${
                  activeSection === href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Utility — Search + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Inline expanding search */}
          <div ref={searchContainerRef} className="relative flex items-center">
            {/* Expanding input — shown when searchOpen */}
            <div
              className={`flex items-center overflow-hidden transition-all duration-structural ${
                searchOpen ? "w-56 opacity-100" : "w-0 opacity-0 pointer-events-none"
              }`}
            >
              <input
                ref={searchInputRef}
                type="search"
                id="site-search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search features, pricing…"
                aria-label="Search the site"
                aria-expanded={filteredResults.length > 0}
                aria-controls="search-results"
                className="w-full bg-nocturnal-expedition border border-mystic-mint/20 focus:border-forsythia/60 text-arctic-powder placeholder:text-arctic-powder/40 text-xs font-body rounded-lg px-3 py-2 outline-none transition-colors duration-micro"
              />
            </div>

            {/* Search / Close toggle button */}
            <button
              type="button"
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
              aria-controls="site-search"
              onClick={searchOpen ? closeSearch : openSearch}
              className="p-2 text-arctic-powder/70 hover:text-forsythia transition-colors duration-micro cursor-pointer shrink-0"
            >
              {searchOpen ? <XMarkIcon size={20} /> : <SearchIcon size={20} />}
            </button>

            {/* Search results dropdown */}
            {searchOpen && filteredResults.length > 0 && (
              <ul
                id="search-results"
                role="listbox"
                aria-label="Search results"
                className="absolute top-full right-0 mt-2 w-72 bg-nocturnal-expedition border border-mystic-mint/15 rounded-xl shadow-2xl shadow-black/40 overflow-hidden z-50"
              >
                {filteredResults.map((item) => (
                  <li key={`${item.label}-${item.href}`} role="option" aria-selected="false">
                    <button
                      type="button"
                      onClick={() => handleResultClick(item.href)}
                      className="w-full text-left px-4 py-3 flex flex-col gap-0.5 hover:bg-mystic-mint/10 transition-colors duration-micro group"
                    >
                      <span className="text-xs font-display font-bold text-forsythia group-hover:text-deep-saffron transition-colors duration-micro">
                        {item.label}
                      </span>
                      <span className="text-[11px] text-arctic-powder/60 font-body">
                        {item.description}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* No results state */}
            {searchOpen && searchQuery.trim().length > 0 && filteredResults.length === 0 && (
              <div
                className="absolute top-full right-0 mt-2 w-64 bg-nocturnal-expedition border border-mystic-mint/15 rounded-xl shadow-2xl shadow-black/40 px-4 py-3 z-50"
                aria-live="polite"
              >
                <p className="text-xs text-arctic-powder/50 font-body">
                  No results for <span className="text-forsythia font-bold">&quot;{searchQuery}&quot;</span>
                </p>
              </div>
            )}
          </div>

          <a
            href="#pricing"
            className="px-5 py-2.5 bg-forsythia text-oceanic-noir font-display font-black text-xs rounded-lg hover:bg-deep-saffron hover:text-arctic-powder hover:scale-[1.02] active:scale-[0.98] transition-all duration-micro shadow-md shadow-forsythia/20 shrink-0"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-4">
          <button
            type="button"
            aria-label="Open search"
            onClick={openSearch}
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

      {/* Mobile search overlay */}
      {searchOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 border-t border-mystic-mint/10 bg-oceanic-noir/95 backdrop-blur-lg">
          <div className="relative">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search features, pricing…"
              aria-label="Search the site"
              className="w-full bg-nocturnal-expedition border border-mystic-mint/20 focus:border-forsythia/60 text-arctic-powder placeholder:text-arctic-powder/40 text-sm font-body rounded-xl px-4 py-3 outline-none transition-colors duration-micro pr-10"
              autoFocus
            />
            <button
              type="button"
              aria-label="Close search"
              onClick={closeSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-arctic-powder/50 hover:text-forsythia transition-colors duration-micro"
            >
              <XMarkIcon size={16} />
            </button>
          </div>
          {filteredResults.length > 0 && (
            <ul className="mt-2 rounded-xl border border-mystic-mint/10 bg-nocturnal-expedition overflow-hidden" role="listbox">
              {filteredResults.map((item) => (
                <li key={`mob-${item.label}-${item.href}`} role="option" aria-selected="false">
                  <button
                    type="button"
                    onClick={() => handleResultClick(item.href)}
                    className="w-full text-left px-4 py-3 flex flex-col gap-0.5 hover:bg-mystic-mint/10 transition-colors duration-micro border-b border-mystic-mint/5 last:border-0"
                  >
                    <span className="text-xs font-display font-bold text-forsythia">{item.label}</span>
                    <span className="text-[11px] text-arctic-powder/60 font-body">{item.description}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

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
                <span className="text-xl font-display font-black tracking-widest text-forsythia">POLARIS</span>
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
