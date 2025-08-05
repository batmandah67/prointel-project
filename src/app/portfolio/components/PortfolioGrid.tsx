// components/PortfolioGrid.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { portfolioProjects } from "@/app/portfolio/portfolioData";

const PROJECTS_PER_PAGE = 9;

export default function PortfolioGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(portfolioProjects.length / PROJECTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = portfolioProjects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Projects</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className="relative w-full h-[310px] group overflow-hidden rounded-lg"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-blue-900/90 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm">{project.subtitle}</p>
              <div className="mt-2">
                <Link href={`/portfolio/${project.id}`}>
                  <div className="w-8 h-8 bg-white text-blue-900 rounded-full flex items-center justify-center cursor-pointer">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="w-10 h-10 flex items-center justify-center rounded-md border text-blue-900 hover:bg-blue-100 transition"
          >
            &laquo;
          </button>
        )}

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-10 h-10 flex items-center justify-center rounded-md border font-medium transition ${
              currentPage === i + 1
                ? "bg-blue-900 text-white border-blue-900"
                : "hover:bg-blue-100 text-blue-900"
            }`}
          >
            {i + 1}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="w-10 h-10 flex items-center justify-center rounded-md border text-blue-900 hover:bg-blue-100 transition"
          >
            &raquo;
          </button>
        )}
      </div>
    </div>
  );
}
