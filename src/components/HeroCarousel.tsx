"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "WE IMPROVE YOUR",
    subtitle: "SALES EFFICIENCY",
    image: "/hero1.jpg",
  },
  {
    id: 2,
    title: "GET INSIGHTS",
    subtitle: "FROM YOUR DATA",
    image: "/hero2.jpg",
  },
  {
    id: 3,
    title: "MAKE SMART",
    subtitle: "DECISIONS FASTER",
    image: "/hero3.jpg",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
            current === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            className="brightness-[0.5]"
          />

          {/* Content Row */}
          <div className="absolute inset-0 flex items-center justify-start px-6 md:px-12 z-10">
            <div className="flex items-center gap-6">
              {/* Dots - vertically centered */}
              <div className="flex flex-col gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition ${
                      current === i ? "bg-blue-900" : "border border-blue-900"
                    }`}
                  ></button>
                ))}
              </div>

              {/* Text Content */}
              <div className="text-white text-left max-w-md">
                <p className="text-sm mb-2">
                  The government they survive artical of fortune
                </p>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {slide.title}
                  <br />
                  {slide.subtitle}
                </h1>
                <Link href="/contact">
                  <button className="mt-6 px-6 py-2 bg-white text-blue-900 font-bold rounded">
                    CONTACT US
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
