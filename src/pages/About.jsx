import teacher from "../assets/mohit_goenka.png";

export default function About() {
  return (
    <section className="bg-gray-50 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* ===== HEADER ===== */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold mb-4">About Eduniti</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering students for JEE, NEET and competitive exams through
            quality education and expert guidance.
          </p>
        </div>

        {/* ===== FOUNDER SECTION ===== */}
        <div className="bg-white rounded-2xl shadow p-8 grid md:grid-cols-2 gap-10 items-center mb-14">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={teacher}
              alt="Mohit Goenka"
              className="w-64 h-64 rounded-full object-cover border"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Mohit Goenka</h2>
            <p className="text-sm bg-gray-200 inline-block px-3 py-1 rounded-full mb-4">
              IIT Kharagpur | Founder & Physics Educator
            </p>

            <p className="text-gray-700 leading-relaxed">
              I have completed my Bachelor's and Master's from IIT Kharagpur.
              With over 5+ years of experience in teaching Physics, I strongly
              believe that even the toughest concepts can be taught in the
              simplest way using practical demonstrations and digital
              technology.
            </p>

            <p className="mt-3 text-gray-700 leading-relaxed">
              My goal is to help students not just clear exams but truly
              understand Physics and develop confidence to face any competitive
              exam.
            </p>
          </div>
        </div>

        {/* ===== WHO IS THIS FOR ===== */}
        <div className="bg-white rounded-2xl shadow p-8 mb-14">
          <h2 className="text-2xl font-bold mb-4">Who Is EduNiti For?</h2>
          <p className="text-gray-700">
            EduNiti is designed for aspirants preparing for:
          </p>

          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-gray-700">
            <li>✅ JEE Main</li>
            <li>✅ JEE Advanced</li>
            <li>✅ NEET</li>
            <li>✅ Other equivalent competitive exams</li>
          </ul>
        </div>

        {/* ===== SOCIAL LINKS ===== */}
        <div className="bg-white rounded-2xl shadow p-8 mb-14">
          <h2 className="text-2xl font-bold mb-4">Follow Us on Social Media</h2>

          <div className="space-y-3 text-blue-600">
            <p>
              📢 Telegram:{" "}
              <a
                href="https://telegram.me/edunitimg"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                telegram.me/edunitimg
              </a>
            </p>

            <p>
              📸 Instagram:{" "}
              <a
                href="https://www.instagram.com/mohitgoenka_iitkgp/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                instagram.com/mohitgoenka_iitkgp
              </a>
            </p>

            <p>
              💼 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/mohitgoenka99/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                linkedin.com/in/mohitgoenka99
              </a>
            </p>

            <p>
              🐦 Twitter:{" "}
              <a
                href="https://twitter.com/EduNitiByMG"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                twitter.com/EduNitiByMG
              </a>
            </p>
          </div>
        </div>

        {/* ===== APP LINKS ===== */}
        <div className="bg-white rounded-2xl shadow p-8 mb-14">
          <h2 className="text-2xl font-bold mb-4">Download Our App</h2>

          <p className="text-gray-700 mb-4">
            Access Physics batches and study material on our Android app:
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=co.tarly.vsbqz"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Download on Play Store
          </a>
        </div>

        {/* ===== TRADEMARK ===== */}
        <div className="text-center text-sm text-gray-500">
          EDUNITI is a registered trademark.
        </div>
      </div>
    </section>
  );
}
