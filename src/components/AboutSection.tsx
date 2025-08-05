"use client";
import Image from "next/image";
import { FaStar, FaMedal, FaBullseye } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        {/* Left - Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/about-placeholder.jpg"
            alt="About Us"
            width={550}
            height={410}
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Right - Text content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-extrabold mb-4">ABOUT OUR COMPANY</h2>
          <div className="w-16 h-1 bg-gray-300 mx-auto lg:mx-0 mb-6" />
          <p className="text-gray-600 leading-relaxed mb-4">
            A tale of a fateful trip that started from this tropic port aboard
            this tiny ship today still wanted by the government they survive as
            soldiers of fortune to a deluxe apartment in the sky moving on up to
            the east side a family.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The government they survive as soldiers of fortune baby if you’ve
            ever wondered the east side to a deluxe apartment.
          </p>

          {/* Icons */}
          <div className="mt-10 border-t pt-10 flex flex-col sm:flex-row justify-between text-center gap-10">
            <div className="flex flex-col items-center">
              <FaStar className="text-[#07205b] text-4xl mb-2" />
              <h4 className="text-lg font-semibold">Vision</h4>
            </div>
            <div className="flex flex-col items-center">
              <FaMedal className="text-[#07205b] text-4xl mb-2" />
              <h4 className="text-lg font-semibold">Missions</h4>
            </div>
            <div className="flex flex-col items-center">
              <FaBullseye className="text-[#07205b] text-4xl mb-2" />
              <h4 className="text-lg font-semibold">Goals</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
