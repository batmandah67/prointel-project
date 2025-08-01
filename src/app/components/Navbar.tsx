"use client";

import { FaFacebookF, FaShoppingCart, FaSearch } from "react-icons/fa";

type NavbarProps = {
  className?: string;
};

const Navbar = ({ className = "" }: NavbarProps) => {
  return (
    <div className={`w-full  ${className}`}>
      <div className="max-w-screen-xl mx-auto px-4 bg-[#040f2e] text-white py-7 rounded-md flex justify-between items-center">
        <ul className="flex items-center gap-6 text-sm lg:text-base font-medium">
          <li className="font-bold cursor-pointer">HOME</li>
          <li>/</li>
          <li className="cursor-pointer">
            SERVICE <span className="text-xs">▼</span>
          </li>
          <li>/</li>
          <li className="cursor-pointer">
            PORTFOLIO <span className="text-xs">▼</span>
          </li>
          <li>/</li>
          <li className="cursor-pointer">
            BLOG <span className="text-xs">▼</span>
          </li>
          <li>/</li>
          <li className="cursor-pointer">CONTACT</li>
        </ul>

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
};

export default Navbar;
