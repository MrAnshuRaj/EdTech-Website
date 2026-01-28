import { useState } from "react";
import courseImg from "../assets/course.png";

const categories = ["JEE Mains", "JEE Advanced", "NEET", "GATE", "Banking"];

// helper for random discount
const getDiscount = () => Math.floor(Math.random() * 21) + 40; // 40–60%

const coursesData = [
  {
    id: 1,
    title: "JEE Mains Complete Batch 2025",
    category: "JEE Mains",
    price: 3999,
    image: courseImg,
  },
  {
    id: 2,
    title: "JEE Mains Crash Course",
    category: "JEE Mains",
    price: 1999,
    image: courseImg,
  },
  {
    id: 3,
    title: "JEE Mains Test Series Pro",
    category: "JEE Mains",
    price: 999,
    image: courseImg,
  },
  {
    id: 4,
    title: "JEE Mains Revision Batch",
    category: "JEE Mains",
    price: 1499,
    image: courseImg,
  },
  {
    id: 5,
    title: "JEE Mains Doubt Solving Course",
    category: "JEE Mains",
    price: 799,
    image: courseImg,
  },

  {
    id: 6,
    title: "JEE Advanced Rank Booster",
    category: "JEE Advanced",
    price: 4999,
    image: courseImg,
  },
  {
    id: 7,
    title: "JEE Advanced Concept Mastery",
    category: "JEE Advanced",
    price: 4599,
    image: courseImg,
  },
  {
    id: 8,
    title: "JEE Advanced Practice Problems",
    category: "JEE Advanced",
    price: 1999,
    image: courseImg,
  },
  {
    id: 9,
    title: "JEE Advanced Test Series",
    category: "JEE Advanced",
    price: 1299,
    image: courseImg,
  },
  {
    id: 10,
    title: "JEE Advanced Crash Course",
    category: "JEE Advanced",
    price: 2499,
    image: courseImg,
  },

  {
    id: 11,
    title: "NEET Full Syllabus Course",
    category: "NEET",
    price: 4599,
    image: courseImg,
  },
  {
    id: 12,
    title: "NEET Biology Booster",
    category: "NEET",
    price: 1999,
    image: courseImg,
  },
  {
    id: 13,
    title: "NEET Physics Crash Course",
    category: "NEET",
    price: 1499,
    image: courseImg,
  },
  {
    id: 14,
    title: "NEET Chemistry Practice Series",
    category: "NEET",
    price: 1299,
    image: courseImg,
  },
  {
    id: 15,
    title: "NEET Test Series Pro",
    category: "NEET",
    price: 999,
    image: courseImg,
  },

  {
    id: 16,
    title: "GATE Mechanical Complete Course",
    category: "GATE",
    price: 4999,
    image: courseImg,
  },
  {
    id: 17,
    title: "GATE Mechanical Crash Course",
    category: "GATE",
    price: 2999,
    image: courseImg,
  },
  {
    id: 18,
    title: "GATE Test Series 2025",
    category: "GATE",
    price: 1499,
    image: courseImg,
  },
  {
    id: 19,
    title: "GATE PYQ Solving Course",
    category: "GATE",
    price: 999,
    image: courseImg,
  },
  {
    id: 20,
    title: "GATE Concept Revision Batch",
    category: "GATE",
    price: 1999,
    image: courseImg,
  },

  {
    id: 21,
    title: "Banking PO Master Batch",
    category: "Banking",
    price: 2499,
    image: courseImg,
  },
  {
    id: 22,
    title: "Banking Clerk Foundation Course",
    category: "Banking",
    price: 1999,
    image: courseImg,
  },
  {
    id: 23,
    title: "Banking Speed Maths Course",
    category: "Banking",
    price: 999,
    image: courseImg,
  },
  {
    id: 24,
    title: "Banking Reasoning Booster",
    category: "Banking",
    price: 1299,
    image: courseImg,
  },
  {
    id: 25,
    title: "Banking Test Series Pro",
    category: "Banking",
    price: 899,
    image: courseImg,
  },
];

export default function CoursesPage() {
  const [active, setActive] = useState("JEE Mains");

  const filteredCourses = coursesData.filter((c) => c.category === active);

  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Explore Our Courses
        </h1>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full border transition ${
                active === cat
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const discount = getDiscount();
            const discountedPrice = Math.round(
              course.price - (course.price * discount) / 100,
            );

            return (
              <div
                key={course.id}
                className="relative bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
              >
                {/* Discount Ribbon */}
                <div className="absolute top-95 left-0 bg-red-600 text-white text-base font-extrabold px-4 py-2 rounded-r-full shadow-lg z-10">
                  {discount}% OFF
                </div>

                {/* Image */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-60 object-cover"
                />

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-gray-600 font-medium">
                    {course.category}
                  </p>

                  <h3 className="font-semibold text-lg mt-1">{course.title}</h3>

                  {/* Price */}
                  <div className="mt-4">
                    <span className="text-gray-400 line-through mr-2">
                      ₹{course.price}
                    </span>
                    <span className="text-black font-bold text-lg">
                      ₹{discountedPrice}
                    </span>
                  </div>

                  {/* Button */}
                  <div className="mt-5 flex justify-end">
                    <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
