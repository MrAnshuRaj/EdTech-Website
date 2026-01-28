import courseImg from "../../assets/course.png";

const courses = [
  {
    id: 1,
    title: "JEE Advanced Full Course",
    price: "₹4999",
    rating: 4.8,
    image: courseImg,
  },
  {
    id: 2,
    title: "NEET Complete Prep",
    price: "₹4599",
    rating: 4.7,
    image: courseImg,
  },
  {
    id: 3,
    title: "SSC CGL Master Batch",
    price: "₹2999",
    rating: 4.6,
    image: courseImg,
  },
];

export default function Courses() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Popular Courses</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Course Image */}
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-60 object-cover"
              />

              {/* Card Content */}
              <div className="p-6">
                <h3 className="font-semibold text-lg">{c.title}</h3>

                <p className="text-sm text-gray-500 mt-2">⭐ {c.rating}</p>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-black font-bold">{c.price}</span>

                  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                    Enroll
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
