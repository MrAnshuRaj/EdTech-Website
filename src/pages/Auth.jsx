import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Auth() {
  const [params] = useSearchParams();
  const mode = params.get("mode");

  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (mode === "signup") setIsLogin(false);
    else setIsLogin(true);
  }, [mode]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      setMessage("✅ Login Successful!");
    } else {
      setMessage("🎉 Account Created Successfully!");
    }

    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-2">
          {isLogin ? "Login to EduNiti" : "Create Your Account"}
        </h2>

        <p className="text-center text-gray-500 mb-6">
          {isLogin ? "Welcome back 👋" : "Start your learning journey 🚀"}
        </p>

        {message && (
          <div className="bg-green-100 text-green-700 text-sm text-center py-2 rounded mb-4">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full border px-4 py-2 rounded-lg outline-none focus:border-black"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full border px-4 py-2 rounded-lg outline-none focus:border-black"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full border px-4 py-2 rounded-lg outline-none focus:border-black"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm mt-5">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage("");
            }}
            className="ml-1 text-black font-semibold hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </section>
  );
}
