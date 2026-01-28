import { useEffect, useState } from "react";

export default function LoginPrompt() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 800); // show after load
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Overlay (light, not blocking) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/10 z-40"
        />
      )}

      {/* Slide-in Card */}
      <div
        className={`fixed bottom-6 right-6 w-[90%] sm:w-[380px] bg-white rounded-2xl shadow-2xl z-50
        transition-transform duration-500 ease-out
        ${open ? "translate-y-0 translate-x-0" : "translate-y-full translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-semibold text-lg">Login to EduNiti</h3>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-black text-xl"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          <p className="text-sm text-gray-600 mb-4">
            Enter your mobile number to continue
          </p>

          <div className="flex border rounded-lg overflow-hidden mb-4">
            <span className="px-3 py-2 bg-gray-100 text-sm">+91</span>
            <input
              type="tel"
              placeholder="Enter mobile number"
              className="flex-1 px-3 py-2 outline-none"
            />
          </div>

          <button className="w-full bg-black text-white py-2.5 rounded-lg hover:bg-gray-800 transition">
            Get OTP
          </button>

          <p className="text-xs text-gray-500 mt-3 text-center">
            By continuing you agree to our{" "}
            <span className="text-blue-600 cursor-pointer">Terms</span> &{" "}
            <span className="text-blue-600 cursor-pointer">Privacy Policy</span>
          </p>
        </div>
      </div>
    </>
  );
}
