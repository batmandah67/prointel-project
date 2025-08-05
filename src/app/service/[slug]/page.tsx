// app/service/[slug]/page.tsx
"use client";

import { useParams, notFound } from "next/navigation";
import { services } from "../data/servicesData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ServiceDetailPage() {
  const { slug } = useParams() as { slug: string };
  const service = services.find((s) => s.slug === slug);
  const [openTopicIndex, setOpenTopicIndex] = useState<number | null>(null);

  if (!service) return notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Left content */}
      <div className="lg:col-span-2">
        <Image
          src={service.coverImage || "/default-cover.png"}
          alt={service.title}
          width={870}
          height={490}
          className="rounded mb-8 w-full object-cover"
        />

        <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
        <p className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
          {service.detail}
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-start mb-8">
          <div className="space-y-6">
            {service.presentationPoints?.map((point) => (
              <div key={point.title} className="flex items-start gap-4">
                <Image src={point.icon} alt="icon" width={40} height={40} />
                <div>
                  <h4 className="font-semibold text-lg">{point.title}</h4>
                  <p className="text-sm text-gray-600">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Image
            src={service.presentationImage || "/default-pres.png"}
            alt="Company Presentation"
            width={372}
            height={365}
            className="rounded object-cover"
          />
        </div>

        {/* Topics Accordion */}
        <h3 className="text-xl font-bold mb-4">Usefull Topics:</h3>
        <div className="divide-y border rounded-md">
          {service.topics?.map((topic, i) => {
            const isOpen = openTopicIndex === i;
            return (
              <div key={i} className="p-4 cursor-pointer">
                <h4
                  onClick={() => setOpenTopicIndex(isOpen ? null : i)}
                  className="font-medium flex justify-between items-center text-gray-800"
                >
                  <span>
                    {i + 1}. {topic.question}
                  </span>
                  <span className="text-lg">{isOpen ? "−" : "+"}</span>
                </h4>
                {isOpen && topic.answer && (
                  <p className="text-sm text-gray-700 mt-2">{topic.answer}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4">Reliable Market Growth:</h3>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Image
              src={service.marketImage || "/default-market.png"}
              alt="Market Growth"
              width={400}
              height={300}
              className="rounded object-cover"
            />
            <ul className="text-sm text-gray-700 list-inside list-disc">
              {service.marketPoints?.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside>
        <h4 className="text-lg font-semibold mb-4">Our Solutions</h4>
        <div className="space-y-2 mb-8">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/service/${s.slug}`}
              className={`block px-4 py-2 border rounded-md text-sm hover:bg-blue-100 transition ${
                s.slug === slug ? "bg-blue-100 text-blue-900 font-semibold" : ""
              }`}
            >
              {s.title}
            </Link>
          ))}
        </div>

        <h4 className="text-lg font-semibold mb-2">Brochures</h4>
        <div className="space-y-2 mb-8">
          <a
            href="/files/sample.pdf"
            className="block px-4 py-2 bg-blue-900 text-white rounded-md text-sm hover:bg-blue-800"
            download
          >
            📄 Download file. pdf
          </a>
          <a
            href="/files/sample.ppt"
            className="block px-4 py-2 bg-blue-900 text-white rounded-md text-sm hover:bg-blue-800"
            download
          >
            📄 Download file. ppt
          </a>
        </div>

        <h4 className="text-lg font-semibold mb-2">Contact Form</h4>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-3 py-2 rounded"
          />
          <textarea
            placeholder="Message"
            className="w-full border px-3 py-2 rounded"
            rows={4}
          />
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800"
          >
            SUBMIT
          </button>
        </form>
      </aside>
    </div>
  );
}
