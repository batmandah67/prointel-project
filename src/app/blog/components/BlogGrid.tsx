"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/app/blog/blogData";

const POSTS_PER_PAGE = 6;

export default function BlogGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, endIndex);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {currentPosts.map((post) => (
          <div key={post.id} className="group">
            <div className="relative overflow-hidden rounded-md">
              <Image
                src={post.image}
                alt={post.title}
                width={370}
                height={260}
                className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-4 left-4 bg-blue-900 text-white text-sm px-3 py-1 rounded">
                {post.date}
              </span>
            </div>
            <h2 className="text-lg font-semibold mt-4">{post.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
            <Link
              href={`/blog/${post.id}`}
              className="mt-4 inline-block text-sm font-semibold text-blue-900 hover:underline"
            >
              READ MORE
            </Link>
          </div>
        ))}
      </div>

      {/* pagination buttons */}
      <div className="flex justify-center gap-2">
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="w-10 h-10 rounded-md border"
          >
            &laquo;
          </button>
        )}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-10 h-10 rounded-md border ${
              currentPage === i + 1 ? "bg-blue-900 text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="w-10 h-10 rounded-md border"
          >
            &raquo;
          </button>
        )}
      </div>
    </section>
  );
}
