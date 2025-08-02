"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    website: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
      <div className="flex flex-col">
        <label
          htmlFor="name"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Name *
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="border-b border-gray-300 outline-none py-2 focus:border-blue-500"
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="phone"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Phone *
        </label>
        <input
          type="text"
          name="phone"
          placeholder="Enter your phone number"
          className="border-b border-gray-300 outline-none py-2 focus:border-blue-500"
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Email *
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border-b border-gray-300 outline-none py-2 focus:border-blue-500"
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="website"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Website *
        </label>
        <input
          type="text"
          name="website"
          placeholder="Enter your website"
          className="border-b border-gray-300 outline-none py-2 focus:border-blue-500"
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col sm:col-span-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Write your message..."
          className="border-b border-gray-300 outline-none py-2 focus:border-blue-500"
          onChange={handleChange}
        />
      </div>

      <div className="sm:col-span-2 mt-4">
        <button
          type="submit"
          className="bg-[#0c215d] text-white px-6 py-3 rounded-md hover:bg-[#0a1b4a] transition"
        >
          SEND MESSAGE
        </button>
      </div>
    </form>
  );
}
