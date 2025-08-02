"use client";

import { useState } from "react";
import { FaFacebookF, FaShoppingCart, FaSearch } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [showPortfolioDropdown, setShowPortfolioDropdown] = useState(false);
  const [showBlogDropdown, setShowBlogDropdown] = useState(false);

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 bg-[#040f2e] text-white rounded-md flex justify-between items-center py-7">
        <ul className="flex items-center gap-6 text-sm lg:text-base font-medium">
          <li className="font-bold cursor-pointer text-white">
            <Link href="/">HOME</Link>
          </li>

          <li className="text-white/40">/</li>

          {/* PAGES Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowPagesDropdown(true)}
            onMouseLeave={() => setShowPagesDropdown(false)}
          >
            <li
              className={`cursor-pointer transition flex items-center gap-1 px-2 py-1 rounded-md ${
                showPagesDropdown
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              PAGES <ChevronDown size={14} />
            </li>
            {showPagesDropdown && (
              <ul className="absolute top-7 left-0 w-48 bg-white text-[#040f2e] shadow-none rounded z-50">
                {["ABOUT US", "OUR TEAM", "FAQ'S", "SHOP", "SHOP DETAILS"].map(
                  (item) => (
                    <li
                      key={item}
                      className="px-4 py-2 cursor-pointer hover-slide-effect"
                    >
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>

          <li className="text-white/40">/</li>

          {/* SERVICE Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowServiceDropdown(true)}
            onMouseLeave={() => setShowServiceDropdown(false)}
          >
            <li
              className={`cursor-pointer transition flex items-center gap-1 px-2 py-1 rounded-md ${
                showServiceDropdown
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              SERVICE <ChevronDown size={14} />
            </li>
            {showServiceDropdown && (
              <ul className="absolute top-7 left-0 w-56 bg-white text-[#040f2e] shadow-lg rounded z-50">
                {[
                  "SERVICE VERSION ONE",
                  "SERVICE VERSION TWO",
                  "SERVICE DETAILS",
                ].map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 cursor-pointer hover-slide-effect"
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <li className="text-white/40">/</li>

          {/* PORTFOLIO Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowPortfolioDropdown(true)}
            onMouseLeave={() => setShowPortfolioDropdown(false)}
          >
            <li
              className={`cursor-pointer transition flex items-center gap-1 px-2 py-1 rounded-md ${
                showPortfolioDropdown
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              PORTFOLIO <ChevronDown size={14} />
            </li>
            {showPortfolioDropdown && (
              <ul className="absolute top-7 left-0 w-48 bg-white text-[#040f2e] shadow-lg rounded z-50">
                {["PROJECT", "PROJECT DETAILS"].map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 cursor-pointer hover-slide-effect"
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <li className="text-white/40">/</li>

          {/* BLOG Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowBlogDropdown(true)}
            onMouseLeave={() => setShowBlogDropdown(false)}
          >
            <li
              className={`cursor-pointer transition flex items-center gap-1 px-2 py-1 rounded-md ${
                showBlogDropdown
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              BLOG <ChevronDown size={14} />
            </li>
            {showBlogDropdown && (
              <ul className="absolute top-7 left-0 w-56 bg-white text-[#040f2e] shadow-lg rounded z-50">
                {[
                  { label: "BLOG LIST", href: "/blog" },
                  { label: "BLOG GRID", href: "/blog/grid" },
                  { label: "BLOG DETAILS", href: "/blog/example-post" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <div className="hover-slide-effect px-4 py-2 cursor-pointer">
                        <span>{item.label}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <li className="text-white/40">/</li>
          <li className="cursor-pointer text-white/60 hover:text-white transition">
            <Link
              href="/contact"
              className="cursor-pointer text-white/60 hover:text-white transition"
            >
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center divide-x divide-white/20">
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
    </div>
  );
}
