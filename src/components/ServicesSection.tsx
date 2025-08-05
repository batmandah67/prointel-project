"use client";
import Image from "next/image";

const services = [
  {
    title: "Business Services",
    desc: "The tiny ship today stiller",
    img: "/placeholder.png",
  },
  {
    title: "Consumer Product",
    desc: "The tiny ship today stiller",
    img: "/placeholder.png",
  },
  {
    title: "Financial Services",
    desc: "The tiny ship today stiller",
    img: "/placeholder.png",
  },
  {
    title: "Travel and Aviation",
    desc: "The tiny ship today stiller",
    img: "/placeholder.png",
  },
  {
    title: "Software Research",
    desc: "The tiny ship today stiller",
    img: "/placeholder.png",
  },
  {
    title: "Quality Resourcing",
    desc: "The tiny ship today stiller",
    img: "/placeholder.png",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-4">OUR SERVICES</h2>
        <div className="w-16 h-1 mx-auto bg-gray-300 mb-6" />
        <p className="text-gray-600 mb-12">
          A tale of a fateful trip that started from this tropic port aboard
          this tiny ship today stillers
        </p>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex items-center bg-white shadow rounded-lg overflow-hidden text-left"
            >
              <Image
                src={service.img}
                alt={service.title}
                width={120}
                height={130}
                className="object-cover w-[120px] h-[130px]"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{service.title}</h3>
                <p className="text-sm text-gray-500">{service.desc}</p>
                <a
                  href="#"
                  className="text-sm text-blue-900 font-semibold inline-block mt-3 hover:underline"
                >
                  READ MORE &gt;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center text-gray-700 text-lg">
          You can also send us an email and we’ll get in touch shortly, or Call
          us
          <br />
          <a
            href="mailto:info@support.com"
            className="text-blue-700 underline font-medium"
          >
            info@support.com
          </a>{" "}
          (or){" "}
          <a
            href="tel:+12346780900"
            className="text-blue-700 underline font-medium"
          >
            +1 234 6780 900
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
