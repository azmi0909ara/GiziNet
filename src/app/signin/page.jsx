"use client";

import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 👉 nanti di sini bisa tambahkan validasi / API login
    // kalau sukses:
    router.push("/mainpage"); // arahkan ke halaman MainPage
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/bkg1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay abstrak */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/50 via-orange-400/40 to-yellow-300/40 backdrop-blur-sm" />

      <div className="relative bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/40">
        {/* Judul */}
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
          Sign In to Gizinet
        </h2>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Remember me + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-700">
              <input
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-orange-500 rounded"
              />
              Remember me
            </label>
            <a href="#" className="text-red-600 hover:underline font-medium">
              Forgot password?
            </a>
          </div>

          {/* Tombol Sign In */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google Sign In */}
        <button
          type="button"
          className="w-full py-3 border border-gray-300 rounded-lg flex items-center justify-center gap-2 bg-white/70 hover:bg-white transition"
          onClick={() => router.push("/mainpage")}
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-gray-700 font-medium">Sign in with Google</span>
        </button>

        {/* Link ke Sign Up */}
        <p className="text-center text-sm text-gray-700 mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-red-600 font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </main>
  );
}
