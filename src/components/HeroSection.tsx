"use client";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="h-[50vh] bg-fixed bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center text-white text-center px-4"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl mb-6">
        We provide high quality services & innovative solutions for the
        realiable growth
      </h1>
      <Link href="/#contact">
        <button className="mt-4 px-6 py-3 bg-blue-900 text-white font-semibold rounded hover:bg-blue-800 transition">
          GET A QUOTES
        </button>
      </Link>
    </section>
  );
};

export default HeroSection;
