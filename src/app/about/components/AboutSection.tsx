"use client";

import Image from "next/image";
import { Briefcase, Star, Headphones } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="px-4 lg:px-20 pt-20 pb-12 space-y-24">
      {/* Short History */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <Image
          src="/Naruto-1.jpg"
          alt="Short History"
          width={550}
          height={410}
          className="rounded shadow"
        />
        <div>
          <h3 className="text-2xl font-bold mb-4">SHORT HISTORY</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            A tale of a fateful trip that started from this tropic port aboard
            this tiny ship...
          </p>
          <button className="px-6 py-2 bg-white border border-blue-900 text-blue-900 font-bold rounded">
            120x67
          </button>
        </div>
      </section>

      {/* WE ARE ALWAYS BEST */}
      <section className="bg-[#040f2e] text-white py-20 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase">We Are Always Best</h2>
          <div className="w-10 h-1 bg-white mx-auto my-4"></div>
          <p className="text-white/80 max-w-xl mx-auto text-sm">
            A tale of a fateful trip that started from this tropic port aboard
            this tiny ship today stillers
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 bg-white text-[#040f2e] rounded-lg shadow overflow-hidden">
          {/* Left Features */}
          <div className="space-y-6 p-10">
            {[
              {
                title: "Best Strategy",
                description:
                  "The Love Boat soon will be making another run plore strange tools enter new worlds.",
                icon: <Briefcase className="text-[#040f2e] w-7 h-7" />,
              },
              {
                title: "High-Quality Services",
                description:
                  "The Love Boat soon will be making another run plore strange tools enter new worlds.",
                icon: <Star className="text-[#040f2e] w-7 h-7" />,
              },
              {
                title: "Friendly Support",
                description:
                  "The Love Boat soon will be making another run plore strange tools enter new worlds.",
                icon: <Headphones className="text-[#040f2e] w-7 h-7" />,
              },
            ].map(({ title, description, icon }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded">{icon}</div>
                <div>
                  <h4 className="font-semibold text-lg">{title}</h4>
                  <p className="text-sm text-gray-700">{description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="w-full h-full">
            <Image
              src="/images/about2.png"
              alt="About Image"
              width={585}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats Block */}
        <div className="bg-white py-14 px-4 mt-[-2rem] relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-10">
            {[
              { number: "30+", label: "Years of Excellence" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "53k", label: "Cases Completed" },
              { number: "24", label: "Consultants" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-[#040f2e]">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
