"use client";

import Image from "next/image";

const features = [
  {
    title: "Marketing Goals",
    description:
      "The east side to a deluxe apartment in move on up to the east side",
    icon: "/file.svg",
    bg: "bg-[#e9e9e9]",
  },
  {
    title: "Consumer Insights",
    description:
      "The east side to a deluxe apartment in move on up to the east side",
    icon: "/globe.svg",
    bg: "bg-[#fafafa]",
  },
  {
    title: "Emerging Ideas",
    description:
      "The east side to a deluxe apartment in move on up to the east side",
    icon: "/vercel.svg",
    bg: "bg-[#f6f6f6]",
  },
  {
    title: "Thought Leadership",
    description:
      "The east side to a deluxe apartment in move on up to the east side",
    icon: "/window.svg",
    bg: "bg-[#e9e9e9]",
  },
];

const FeatureGrid = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`group ${feature.bg} py-16 px-6 text-center border-b-4 border-transparent hover:border-blue-900 transition-all duration-300`}
          >
            <div className="flex justify-center mb-6">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-900">
              {feature.title}
            </h3>
            <div className="w-10 h-1 mx-auto bg-gray-300 my-3 rounded-sm group-hover:bg-blue-900 transition-all duration-300" />
            <p className="text-base text-gray-600 mt-2 px-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
