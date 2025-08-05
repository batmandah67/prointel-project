"use client";

import { useState, useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const dropdownItems = {
  PAGES: [
    { label: "ABOUT US", href: "/about" },
    { label: "OUR TEAM" },
    { label: "FAQ'S" },
    { label: "SHOP" },
    { label: "SHOP DETAILS" },
  ],

  BLOG: [
    { label: "BLOG LIST", href: "/blog" },
    { label: "BLOG GRID", href: "/blog/grid" },
    { label: "BLOG DETAILS", href: "/blog/example-post" },
  ],
};

type NavbarProps = {
  className?: string;
};

const StickyNavbar = ({ className = "" }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const triggerRef = useRef(null);
  const isFloatingNavOutOfView = !useInView(triggerRef, { margin: "-100px" });

  useEffect(() => {
    const closeMobile = () => setMobileOpen(false);
    window.addEventListener("resize", closeMobile);
    window.addEventListener("scroll", closeMobile);
    return () => {
      window.removeEventListener("resize", closeMobile);
      window.removeEventListener("scroll", closeMobile);
    };
  }, []);

  const renderDropdown = (
    title: string,
    items: { label: string; href?: string }[]
  ) => {
    const isOpen = openDropdown === title;
    return (
      <div
        className="relative"
        onMouseEnter={() => setOpenDropdown(title)}
        onMouseLeave={() => setOpenDropdown("")}
      >
        <li className="flex items-center gap-1 cursor-pointer hover:text-white/90">
          {title} <ChevronDown size={14} />
        </li>
        {isOpen && (
          <ul className="absolute top-7 left-0 w-56 bg-white text-[#040f2e] shadow-lg rounded z-50">
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
        )}
      </div>
    );
  };

  return (
    <>
      <div ref={triggerRef} className="h-[80px]" />
      {isFloatingNavOutOfView && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`fixed top-0 left-0 w-full z-50 bg-[#040f2e] shadow-lg ${className}`}
        >
          <div className="max-w-screen-xl mx-auto px-4 text-white py-4 flex justify-between items-center relative">
            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button onClick={() => setMobileOpen((prev) => !prev)}>
                {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-6 text-sm lg:text-base font-medium">
              <li className="font-bold cursor-pointer text-white">
                <Link href="/">HOME</Link>
              </li>
              <li>/</li>
              {renderDropdown("PAGES", dropdownItems.PAGES)}
              <li>/</li>
              <li className="hover:text-white/90">
                <Link href="/service">SERVICE</Link>
              </li>
              <li>/</li>
              <li className="hover:text-white/90">
                <Link href="/portfolio">PORTFOLIO</Link>
              </li>
              <li>/</li>
              {renderDropdown("BLOG", dropdownItems.BLOG)}
              <li>/</li>
              <Link
                href="/contact"
                className="cursor-pointer text-white/60 hover:text-white transition"
              >
                CONTACT
              </Link>
            </ul>

            {/* Right Icons */}
            <div className="flex items-center divide-x divide-white/20 ml-auto lg:ml-0">
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
            className={`transition-all duration-300 ease-in-out overflow-hidden lg:hidden ${
              mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[#040f2e] text-white border-t border-white/20 px-4 pb-6">
              <ul className="flex flex-col gap-3 mt-4 text-sm font-medium">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  HOME
                </Link>
                {Object.entries(dropdownItems).map(([key, items]) => (
                  <details key={key}>
                    <summary className="cursor-pointer">{key}</summary>
                    <ul className="ml-4 mt-2">
                      {items.map((item) => (
                        <li key={item.label} className="py-1">
                          {"href" in item && item.href ? (
                            <Link
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ) : (
                            item.label
                          )}
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}

                <Link href="/service" onClick={() => setMobileOpen(false)}>
                  SERVICE
                </Link>
                <Link href="/portfolio" onClick={() => setMobileOpen(false)}>
                  PORTFOLIO
                </Link>

                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  CONTACT
                </Link>
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default StickyNavbar;
