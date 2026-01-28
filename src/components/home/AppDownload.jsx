import phoneMockup from "../../assets/app_mockup.png"; // optional, else keep placeholder

export default function AppDownload() {
  return (
    <section className="py-20 bg-indigo-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* ===== LEFT CONTENT ===== */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Join 15 Million students on the app today!
          </h2>

          <ul className="mt-6 space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm">
                ✓
              </span>
              Live & recorded classes available at ease
            </li>

            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm">
                ✓
              </span>
              Dashboard for progress tracking
            </li>

            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm">
                ✓
              </span>
              Lakhs of practice questions
            </li>
          </ul>

          {/* Store Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="bg-black text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:scale-105 transition">
              <span className="text-sm">Get it on</span>
              <span className="font-semibold">Google Play</span>
            </button>

            <button className="bg-black text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:scale-105 transition">
              <span className="text-sm">Download on</span>
              <span className="font-semibold">App Store</span>
            </button>
          </div>
        </div>

        {/* ===== RIGHT IMAGE ===== */}
        <div className="flex justify-center relative">
          <div className="bg-white rounded-3xl shadow-xl p-4">
            <img
              src={phoneMockup || "https://via.placeholder.com/250x500"}
              alt="App Preview"
              className="w-60 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
