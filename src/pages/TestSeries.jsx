import { useState } from "react";
import testImg from "../assets/test_banner.png"; // use any banner image

const tabs = ["JEE Mains", "JEE Advanced", "NEET", "Banking"];

const testData = {
  "JEE Mains": [
    {
      id: 1,
      title: "All India Mock Test – JEE Mains 2025",
      price: "Free",
      oldPrice: "₹999",
      badge: "NEW",
      features: [
        "Full syllabus mock tests",
        "NTA pattern questions",
        "Detailed analysis",
        "Rank prediction",
      ],
    },
    {
      id: 2,
      title: "JEE Mains Test Series Pro",
      price: "₹299",
      oldPrice: "₹999",
      badge: "HOT",
      features: [
        "Chapter wise + Full tests",
        "Video solutions",
        "Performance tracking",
      ],
    },
  ],

  "JEE Advanced": [
    {
      id: 3,
      title: "JEE Advanced Rank Booster Tests",
      price: "₹499",
      oldPrice: "₹1999",
      badge: "NEW",
      features: [
        "Advanced level problems",
        "Multi correct questions",
        "IIT level difficulty",
      ],
    },
  ],

  NEET: [
    {
      id: 4,
      title: "NEET Full Test Series 2025",
      price: "₹399",
      oldPrice: "₹1499",
      badge: "POPULAR",
      features: [
        "Biology focused tests",
        "NCERT based questions",
        "AI performance report",
      ],
    },
  ],

  Banking: [
    {
      id: 5,
      title: "Bank PO Mega Test Series",
      price: "₹199",
      oldPrice: "₹999",
      badge: "HOT",
      features: [
        "Quant + Reasoning",
        "Previous year pattern",
        "Speed improvement",
      ],
    },
  ],
};

export default function TestSeries() {
  const [activeTab, setActiveTab] = useState("JEE Mains");

  return (
    <section className="bg-gray-50 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Test Series</h1>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full border transition ${
                activeTab === tab
                  ? "bg-black text-white border-black"
                  : "bg-white border-gray-300 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testData[activeTab].map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden relative"
            >
              {/* Badge */}
              <div className="absolute top-3 left-0 bg-black text-white text-sm font-bold px-4 py-1 rounded-r-full">
                {test.badge}
              </div>

              {/* Banner */}
              <img src={testImg} alt="" className="w-full h-55 object-cover" />

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="font-semibold text-lg">{test.title}</h3>

                <ul className="text-sm text-gray-600 space-y-1">
                  {test.features.map((f, i) => (
                    <li key={i}>⭐ {f}</li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center gap-3 mt-4">
                  <span className="text-lg font-bold text-black">
                    {test.price}
                  </span>
                  <span className="line-through text-gray-400">
                    {test.oldPrice}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-4">
                  <button className="flex-1 border border-black text-black py-2 rounded-lg hover:bg-gray-100">
                    Explore
                  </button>
                  <button className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
