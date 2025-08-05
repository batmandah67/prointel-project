"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 30, suffix: "+", label: "Years of Excellence" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 53, suffix: "k", label: "Cases Completed" },
  { value: 24, suffix: "", label: "Consultants" },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="relative bg-[#f5f7fb] py-20 text-center overflow-hidden">
      {/* Зөвхөн bg image бүдэгрүүлсэн хэсэг */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-25 z-0"
        style={{
          backgroundImage: "url('/World_map.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Агуулга */}
      <div className="max-w-5xl mx-auto relative z-10">
        <p className="text-[#001a57] font-semibold mb-2 uppercase tracking-widest">
          Company Success
        </p>
        <h2 className="text-3xl font-bold mb-8">
          Some fun facts about our consulting
        </h2>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-[#001a57]">
                {inView ? (
                  <CountUp end={item.value} duration={2} suffix={item.suffix} />
                ) : (
                  `0${item.suffix}`
                )}
              </div>
              <p className="mt-2 text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>

        <button className="mt-10 px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-800 transition-all">
          View Case Studies
        </button>
      </div>
    </section>
  );
}
