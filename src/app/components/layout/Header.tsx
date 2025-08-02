"use client";

import { useState, useEffect } from "react";

import StickyNavbar from "./StickyNavbar";

import TopBar from "./TopBar";
import Navbar from "./Navbar";

const Header = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const el = document.getElementById("navbar-observer");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect(); // clean up
    };
  }, []);

  return (
    <>
      {/* TopBar */}
      <div className="relative z-50">
        <TopBar />
      </div>

      {/* Floating navbar - overlap 50/50 */}
      <div className="relative z-40 h-[100px]">
        <div className="absolute top-[100px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full">
          <Navbar />
        </div>
        {/* Observer target */}
        <div id="navbar-observer" className="h-[100px]" />
      </div>

      {/* Sticky navbar when main navbar scrolls out */}
      {showSticky && (
        <div className="fixed top-0 left-0 w-full z-40 animate-fade-in">
          <StickyNavbar />
        </div>
      )}
    </>
  );
};

export default Header;
