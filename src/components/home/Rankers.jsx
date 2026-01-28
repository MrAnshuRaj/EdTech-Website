import amanImg from "../../assets/student1.jpeg";
import nehaImg from "../../assets/student2.jpeg";
import rohitImg from "../../assets/student3.jpeg";

const rankers = [
  {
    name: "Nihaal Sahay",
    exam: "JEE AIR 23",
    img: amanImg, // <– Add image path/URL
  },
  {
    name: "Harsh Vardhan Pandey",
    exam: "NEET AIR 18",
    img: nehaImg,
  },
  {
    name: "Anshu Raj",
    exam: "SSC AIR 12",
    img: rohitImg,
  },
];

export default function Rankers() {
  return (
    <section className="bg-indigo-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Top Rankers</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {rankers.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow text-center">
              {r.img ? (
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-40 h-40 mx-auto object-cover rounded-full mb-4"
                />
              ) : (
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4" />
              )}

              <h2 className="font-bold text-xl">{r.name}</h2>
              <p className="text-sm text-gray-500">{r.exam}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
