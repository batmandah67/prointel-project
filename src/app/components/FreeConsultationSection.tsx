"use client";

import Image from "next/image";

export default function FreeConsultationSection() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-2">FREE CONSULTATION</h2>
      <div className="w-24 h-1 bg-gray-300 mx-auto mb-6" />
      <p className="text-gray-600 mb-12">
        A tale of a fateful trip that started from this tropic port aboard this
        tiny ship today stillers
      </p>

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Image */}
        <div className="relative h-[500px]">
          <Image
            src="/consultation-image.png" // Replace with your actual image path under public/
            alt="Consultation"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="p-10 text-left">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Name *
                </label>
              </div>

              {/* Phone */}
              <div className="relative z-0 w-full group">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="phone"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Phone *
                </label>
              </div>

              {/* Email */}
              <div className="relative z-0 w-full group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Email *
                </label>
              </div>

              {/* Service select */}
              <div className="relative z-0 w-full group">
                <select
                  name="service"
                  id="service"
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="consulting">Consulting</option>
                  <option value="strategy">Strategy</option>
                  <option value="marketing">Marketing</option>
                </select>
                <label
                  htmlFor="service"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:-translate-y-6 peer-focus:scale-75 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100"
                >
                  Service you’re looking for?
                </label>
              </div>
            </div>

            {/* Message */}
            <div className="relative z-0 w-full group">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75"
              >
                Message
              </label>
            </div>

            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="bg-[#001a57] text-white px-6 py-3 rounded hover:bg-blue-800 transition-all"
              >
                GET A QUOTES
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
