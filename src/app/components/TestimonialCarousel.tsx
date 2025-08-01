"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const testimonials = [
  {
    text: `A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government.`,
    name: "Shawn Michael",
    position: "Founder, Mnc Inc.",
  },
  {
    text: `Just sit right back and you'll hear a tale a tale of a fateful trip that started from this tropic port aboard this tiny ship.`,
    name: "Samantha Jane",
    position: "CEO, Innovate Ltd.",
  },
  {
    text: `They survive as soldiers of fortune to a deluxe apartment in the sky moving on up to the east side.`,
    name: "Robert Langdon",
    position: "CTO, TechEdge",
  },
];

export default function TestimonialNoteBox() {
  return (
    <section
      className="bg-fixed bg-center bg-cover bg-no-repeat py-24 px-4"
      style={{ backgroundImage: "url('/hero-bg2.jpg')" }}
    >
      <div className="max-w-screen-xl mx-auto flex justify-start">
        <div className="bg-white rounded-xl shadow-2xl p-10 w-full sm:w-[90%] md:w-[75%] lg:w-[50%] xl:w-[40%] text-center transition-all duration-500">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            effect="fade"
            loop
            pagination={{ clickable: true }}
            fadeEffect={{ crossFade: true }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div>
                  <p className="italic text-gray-600 text-lg mb-6 leading-relaxed">
                    “{t.text}”
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-500">{t.position}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
