import { useState } from "react";
import productImg from "../assets/book.png"; // use any image

const categories = ["Books", "Notes", "Merchandise"];

const products = [
  // ===== BOOKS =====
  {
    id: 1,
    name: "JEE Physics Complete Guide",
    category: "Books",
    price: 499,
    mrp: 999,
    discount: 50,
  },
  {
    id: 2,
    name: "JEE Chemistry Concept Book",
    category: "Books",
    price: 399,
    mrp: 799,
    discount: 50,
  },
  {
    id: 3,
    name: "NEET Biology Practice Book",
    category: "Books",
    price: 349,
    mrp: 699,
    discount: 50,
  },
  {
    id: 4,
    name: "GATE Mechanical PYQ",
    category: "Books",
    price: 299,
    mrp: 599,
    discount: 50,
  },

  // ===== NOTES =====
  {
    id: 5,
    name: "NEET Biology NCERT Notes",
    category: "Notes",
    price: 299,
    mrp: 599,
    discount: 50,
  },
  {
    id: 6,
    name: "JEE Physics Formula Notes",
    category: "Notes",
    price: 199,
    mrp: 399,
    discount: 50,
  },
  {
    id: 7,
    name: "Organic Chemistry Revision Notes",
    category: "Notes",
    price: 249,
    mrp: 499,
    discount: 50,
  },
  {
    id: 8,
    name: "GATE Mechanical Short Notes",
    category: "Notes",
    price: 179,
    mrp: 359,
    discount: 50,
  },

  // ===== MERCHANDISE =====
  {
    id: 9,
    name: "EduNiti Hoodie",
    category: "Merchandise",
    price: 799,
    mrp: 1299,
    discount: 40,
  },
  {
    id: 10,
    name: "EduNiti T-Shirt",
    category: "Merchandise",
    price: 499,
    mrp: 899,
    discount: 45,
  },
  {
    id: 11,
    name: "EduNiti Notebook Pack",
    category: "Merchandise",
    price: 249,
    mrp: 499,
    discount: 50,
  },
  {
    id: 12,
    name: "EduNiti Study Planner",
    category: "Merchandise",
    price: 199,
    mrp: 399,
    discount: 50,
  },
];

export default function Store() {
  const [active, setActive] = useState("Books");

  const filtered = products.filter((p) => p.category === active);

  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">EduNiti Store</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full border transition ${
                active === cat
                  ? "bg-black text-white border-black"
                  : "bg-white border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden relative"
            >
              {/* Discount Badge */}
              <div className="absolute top-3 left-0 bg-black text-white text-sm font-bold px-4 py-1 rounded-r-full">
                {p.discount}% OFF
              </div>

              {/* Image */}
              <img
                src={productImg}
                alt={p.name}
                className="w-full h-48 object-contain p-4"
              />

              {/* Info */}
              <div className="p-5 space-y-2">
                <h3 className="font-semibold text-sm">{p.name}</h3>

                <div className="flex items-center gap-3">
                  <span className="font-bold text-black">₹{p.price}</span>
                  <span className="text-sm line-through text-gray-400">
                    ₹{p.mrp}
                  </span>
                </div>

                <button className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
