import { useEffect, useState } from "react";
import banner1 from "../../assets/banner1.jpeg";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import teacher from "../../assets/mohit_goenka.png";
import bg1 from "../../assets/bg1.png";
const slides = [
  {
    title: "Republic Day Offer 🎉",
    desc: "Get up to 90% OFF on All Batches",
    btn: "Explore Offers",
    image: banner1,
  },
  {
    title: "New JEE & NEET Batches",
    desc: "Join live classes with top educators",
    btn: "View Batches",
    image: banner2,
  },
  {
    title: "Recorded Courses Available",
    desc: "Learn anytime with full syllabus coverage",
    btn: "Browse Courses",
    image: banner3,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full">
      {/* ===== IMAGE SLIDER ===== */}
      <div className="relative w-full overflow-hidden aspect-[24/5]">
        {/* Slider Track */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide.image}
              alt="banner"
              className="w-full h-full object-contain flex-shrink-0 bg-white"
            />
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 md:bottom-6 w-full flex justify-center gap-2 md:gap-3 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`
                rounded-full transition-all
                w-1.5 h-1.5 md:w-2.5 md:h-2.5
                ${index === i ? "bg-white scale-125" : "bg-white/50"}
            `}
            />
          ))}
        </div>
      </div>

      {/* ===== ABOUT SECTION ===== */}
      <div className="relative py-20 overflow-hidden bg-gradient-to-r from-slate-100 to-blue-100">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover opacity-15"
          style={{
            backgroundImage: { bg1 },
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Build Strong Foundations. <br />
              Achieve Higher Ranks.
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Learn from IIT-trained educators with focused live classes, smart
              practice tools, and exam-oriented test series designed for real
              results.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                Get Started
              </button>
              <button className="border border-black text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                Talk to Counsellor
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center md:ml-16">
            <img
              src={teacher}
              alt="Mohit Goenka"
              className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border border-gray-200 bg-white"
            />

            <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">
              Mohit Goenka
            </h3>

            <p className="mt-1 text-sm bg-gray-200 text-gray-800 px-4 py-1 rounded-full">
              IIT Kharagpur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
