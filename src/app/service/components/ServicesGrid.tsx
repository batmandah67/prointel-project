"use client";

import { services } from "../data/servicesData";
import Image from "next/image";
import Link from "next/link";

export default function ServicesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">OUR SOLUTIONS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/service/${service.slug}`}
            className="text-center group"
          >
            <div className="w-20 h-20 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
              <Image
                src={service.image}
                alt={service.title}
                width={120}
                height={120}
                className="mx-auto object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
