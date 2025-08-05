"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo1.png",
  "/logo2.png",
  "/logo1.png",
  "/logo2.png",
  "/logo1.png",
  "/logo2.png",
];

export default function OurPartners() {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    autoplay.current,
  ]);

  return (
    <section className="bg-[#f5f7fb] py-7">
      <div className="max-w-7xl mx-auto px-16 flex flex-col md:flex-row items-start">
        {/* Left Text */}
        <div className="w-full md:w-[20%] mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-semi">
            OUR <br />
            PARTNERS
          </h2>
        </div>

        {/* Carousel */}
        <div className="w-full md:w-[80%] overflow-hidden" ref={emblaRef}>
          <div className="flex gap-12">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center h-24 min-w-[150px]"
              >
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  width={120}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
