"use client";

import { useEffect, useState, useRef } from "react";
import {
  FaFacebookF,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState({
    pages: false,
    service: false,
    portfolio: false,
    blog: false,
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  const dropdownTimeouts = useRef<Record<string, NodeJS.Timeout | null>>({
    pages: null,
    service: null,
    portfolio: null,
    blog: null,
  });

  const handleMouseEnter = (key: keyof typeof showDropdown) => {
    const timeout = dropdownTimeouts.current[key];
    if (timeout) clearTimeout(timeout);
    setShowDropdown((prev) => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key: keyof typeof showDropdown) => {
    dropdownTimeouts.current[key] = setTimeout(() => {
      setShowDropdown((prev) => ({ ...prev, [key]: false }));
    }, 50);
  };

  const renderDropdownItems = (items: { label: string; href?: string }[]) => (
    <ul className="absolute top-7 left-0 w-56 bg-white text-[#040f2e] rounded shadow-md z-50">
      {items.map((item) => (
        <li key={item.label}>
          {item.href ? (
            <Link href={item.href}>
              <div className="hover-slide-effect px-4 py-2 cursor-pointer">
                <span>{item.label}</span>
              </div>
            </Link>
          ) : (
            <div className="hover-slide-effect px-4 py-2 cursor-pointer">
              <span>{item.label}</span>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  // ✅ Close mobile menu on scroll or resize
  useEffect(() => {
    const handleClose = () => {
      setMobileOpen(false);
    };
    window.addEventListener("scroll", handleClose);
    window.addEventListener("resize", handleClose);
    return () => {
      window.removeEventListener("scroll", handleClose);
      window.removeEventListener("resize", handleClose);
    };
  }, []);

  return (
    <div className="w-full fixed top-4 z-50 px-4">
      <div className="max-w-screen-xl mx-auto rounded-lg border-1 bg-[#040f2e] text-white shadow-lg px-6 py-4 flex justify-between items-center">
        {/* Logo + Mobile Toggle */}
        <div className="flex justify-between w-full lg:w-auto items-start">
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <li className="cursor-pointer font-semibold">
            <Link href="/">HOME</Link>
          </li>
          <li className="text-white/40">/</li>

          {/* PAGES */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("pages")}
            onMouseLeave={() => handleMouseLeave("pages")}
          >
            <li className="flex items-center gap-1 cursor-pointer hover:text-white/90">
              PAGES <ChevronDown size={14} />
            </li>
            {showDropdown.pages &&
              renderDropdownItems([
                { label: "ABOUT US" },
                { label: "OUR TEAM" },
                { label: "FAQ'S" },
                { label: "SHOP" },
                { label: "SHOP DETAILS" },
              ])}
          </div>
          <li className="text-white/40">/</li>

          {/* SERVICE */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("service")}
            onMouseLeave={() => handleMouseLeave("service")}
          >
            <li className="flex items-center gap-1 cursor-pointer hover:text-white/90">
              SERVICE <ChevronDown size={14} />
            </li>
            {showDropdown.service &&
              renderDropdownItems([
                { label: "SERVICE VERSION ONE" },
                { label: "SERVICE VERSION TWO" },
                { label: "SERVICE DETAILS" },
              ])}
          </div>
          <li className="text-white/40">/</li>

          {/* PORTFOLIO */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("portfolio")}
            onMouseLeave={() => handleMouseLeave("portfolio")}
          >
            <li className="flex items-center gap-1 cursor-pointer hover:text-white/90">
              PORTFOLIO <ChevronDown size={14} />
            </li>
            {showDropdown.portfolio &&
              renderDropdownItems([
                { label: "PROJECT" },
                { label: "PROJECT DETAILS" },
              ])}
          </div>
          <li className="text-white/40">/</li>

          {/* BLOG */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("blog")}
            onMouseLeave={() => handleMouseLeave("blog")}
          >
            <li className="flex items-center gap-1 cursor-pointer hover:text-white/90">
              BLOG <ChevronDown size={14} />
            </li>
            {showDropdown.blog &&
              renderDropdownItems([
                { label: "BLOG LIST", href: "/blog" },
                { label: "BLOG GRID", href: "/blog/grid" },
                { label: "BLOG DETAILS", href: "/blog/example-post" },
              ])}
          </div>

          <li className="text-white/40">/</li>
          <li className="hover:text-white/90">
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="hidden lg:flex items-center divide-x divide-white/30 ml-6">
          <div className="px-4 cursor-pointer hover:text-blue-400">
            <FaFacebookF />
          </div>
          <div className="px-4 relative cursor-pointer">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-1 text-xs bg-white text-blue-900 w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </div>
          <div className="px-4 cursor-pointer hover:text-blue-400">
            <FaSearch />
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`transition-all duration-300 bg-[#040f2e] text-white rounded-xl mt-2 px-6 overflow-hidden ${
          mobileOpen ? "max-h-[1000px] py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-sm font-medium">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            HOME
          </Link>

          {[
            ...[
              {
                label: "PAGES",
                items: [
                  "ABOUT US",
                  "OUR TEAM",
                  "FAQ'S",
                  "SHOP",
                  "SHOP DETAILS",
                ],
              },
              {
                label: "SERVICE",
                items: [
                  "SERVICE VERSION ONE",
                  "SERVICE VERSION TWO",
                  "SERVICE DETAILS",
                ],
              },
              {
                label: "PORTFOLIO",
                items: ["PROJECT", "PROJECT DETAILS"],
              },
            ],
          ].map((section) => (
            <details key={section.label}>
              <summary className="cursor-pointer">{section.label}</summary>
              <ul className="ml-4 mt-1">
                {section.items.map((item) => (
                  <li key={item} className="py-1">
                    {item}
                  </li>
                ))}
              </ul>
            </details>
          ))}

          {/* BLOG with links */}
          <details>
            <summary className="cursor-pointer">BLOG</summary>
            <ul className="ml-4 mt-1">
              {[
                { label: "BLOG LIST", href: "/blog" },
                { label: "BLOG GRID", href: "/blog/grid" },
                { label: "BLOG DETAILS", href: "/blog/example-post" },
              ].map((item) => (
                <li key={item.href} className="py-1">
                  <Link href={item.href} onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>

          <Link href="/contact" onClick={() => setMobileOpen(false)}>
            CONTACT
          </Link>

          <div className="flex gap-4 mt-4 text-lg">
            <FaFacebookF />
            <FaShoppingCart />
            <FaSearch />
          </div>
        </ul>
      </div>
    </div>
  );
}
