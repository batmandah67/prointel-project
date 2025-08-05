"use client";

import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#031B4E] text-white">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* ABOUT OUR CONSULTING */}
        <div>
          <h3 className="text-lg font-bold mb-4">ABOUT OUR CONSULTING</h3>
          <p className="text-gray-300 mb-4">
            That started from this tropic port aboard this tiny ship today still
            want by theam government they survive on up to thetre east side to a
            deluxe as soldiers of artics fortune.
          </p>
          <div className="flex items-center gap-2 text-gray-300">
            <Phone className="w-5 h-5" />
            <span>Any Queries : (+1) 234 567 900</span>
          </div>
        </div>

        {/* RECENT POSTS */}
        <div>
          <h3 className="text-lg font-bold mb-4">RECENT POSTS</h3>
          <div className="flex gap-4 mb-6">
            <div className="w-[70px] h-[70px] bg-gray-400 text-white text-center flex items-center justify-center text-xs font-bold">
              70x70
            </div>
            <div>
              <p className="text-gray-300">
                Till wanted by theam govern they survive as soldiers.
              </p>
              <p className="text-gray-400 italic mt-1">Feb 06, 2018</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-[70px] h-[70px] bg-gray-400 text-white text-center flex items-center justify-center text-xs font-bold">
              70x70
            </div>
            <div>
              <p className="text-gray-300">
                World don't move to beat of just one drum.
              </p>
              <p className="text-gray-400 italic mt-1">Mar 20, 2018</p>
            </div>
          </div>
        </div>

        {/* SOLUTIONS */}
        <div>
          <h3 className="text-lg font-bold mb-4">SOLUTIONS</h3>
          <ul className="text-gray-300 space-y-2">
            <li>Travel and Aviation</li>
            <li>Business Services</li>
            <li>Consumer Products</li>
            <li>Financial Services</li>
            <li>Software Research</li>
            <li>Quality Resourcing</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-lg font-bold mb-4">NEWSLETTER</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name *"
              className="w-full bg-white/10 border border-white/20 px-4 py-2 rounded text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <input
              type="email"
              placeholder="Email *"
              className="w-full bg-white/10 border border-white/20 px-4 py-2 rounded text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button
              type="submit"
              className="bg-white text-[#031B4E] font-bold px-6 py-2 rounded hover:bg-gray-200 transition-all"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#011640] py-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p className="mb-2 md:mb-0">
            © Copyrights 2018. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="/service" className="hover:text-white transition">
              Solutions
            </a>
            <a href="#faq" className="hover:text-white transition">
              FAQ’s
            </a>
            <a href="/contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
