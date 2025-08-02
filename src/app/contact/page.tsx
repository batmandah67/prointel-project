import SectionTitle from "@/app/components/SectionTitle";
import MapSection from "./components/MapSection";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {
  return (
    <div className="relative">
      {/* Fixed height wrapper for map */}
      <div className="relative h-[600px] z-0">
        <MapSection />
      </div>

      {/* Main content positioned after the map */}
      <div className="relative z-10 -mt-20 bg-white pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle
            title="GET IN TOUCH"
            subtitle="A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers"
          />

          <div className="mt-12 bg-white rounded-xl shadow-2xl p-10 flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-2/5 h-[500px] bg-gray-300 flex items-center justify-center text-4xl font-bold text-gray-500">
              420x500
            </div>
            <div className="w-full lg:w-3/5">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
