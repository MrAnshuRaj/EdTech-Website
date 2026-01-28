import student1 from "../../assets/student1.jpeg";
import student2 from "../../assets/student2.jpeg";
import student3 from "../../assets/student3.jpeg";

const reviews = [
  {
    name: "Nihaal Sahay",
    exam: "UPSC CSE 2023 AIR 7",
    stream: "UPSC",
    msg: "I regularly followed the video lectures and editorial discussions which helped me build strong fundamentals and improve answer writing.",
    img: student1,
  },
  {
    name: "Harsh Vardhan Pandey",
    exam: "GATE 2024 AIR 1",
    stream: "GATE",
    msg: "The structured courses, interactive sessions, and doubt support system helped me stay consistent and confident throughout my preparation.",
    img: student2,
  },
  {
    name: "Anshu Raj",
    exam: "JEE Mains Topper",
    stream: "Engineering",
    msg: "The test series and concept clarity helped me improve both my speed and accuracy in competitive exams. I am very thankful to EduNiti for their support!",
    img: student3,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          What Our Students Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              {/* Quote */}
              <div className="text-5xl text-indigo-200 leading-none">“</div>

              <p className="text-gray-600 mt-2 mb-6 leading-relaxed">{r.msg}</p>

              {/* Student Info */}
              <div className="flex items-center gap-4">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-gray-900">{r.name}</h4>

                  <p className="text-sm text-indigo-600 font-medium">
                    {r.exam} • {r.stream}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
