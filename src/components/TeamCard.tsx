"use client";

import Image from "next/image";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

type TeamMember = {
  name: string;
  position: string;
  imageUrl: string;
};

export default function TeamCard({ name, position, imageUrl }: TeamMember) {
  return (
    <div className="w-[270px] shadow-lg rounded overflow-hidden">
      <div className="relative group w-full h-[286px]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="270px"
          priority
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#334571] bg-opacity-95 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="flex gap-4 mb-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-blue-800 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-blue-800 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-blue-800 transition"
            >
              <FaPinterestP />
            </a>
          </div>
          <p className="text-sm text-center max-w-[80%]">
            The government they survive as soldiers of fortune.
          </p>
        </div>
      </div>
      <div className="bg-white p-4 text-center">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="italic text-gray-600 text-sm">{position}</p>
      </div>
    </div>
  );
}
