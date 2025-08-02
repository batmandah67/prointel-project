"use client";
import Link from "next/link";

const BlogBanner = () => {
  return (
    <section
      className="h-[35vh] bg-fixed bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center text-white text-center px-4"
      style={{ backgroundImage: "url('/heroblog-bg.png')" }}
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl mb-6">
        BLOG
      </h1>
    </section>
  );
};

export default BlogBanner;
