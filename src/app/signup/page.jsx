"use client";

import { useState } from "react";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    date_of_birth: "",
    gender: "",
    height: "",
    weight: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (
      !formData.name ||
      !formData.date_of_birth ||
      !formData.gender ||
      !formData.height ||
      !formData.weight
    ) {
      alert("Lengkapi semua field terlebih dahulu.");
      return;
    }
    setStep(2);
  };

  const prevStep = () => setStep(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password dan Konfirmasi Password tidak cocok!");
      return;
    }
    console.log("Raw JSON:", JSON.stringify(formData, null, 2));
    alert("Data berhasil dikirim! Cek console untuk JSON.");
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
      {/* Overlay abstrak blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/50 via-orange-400/40 to-yellow-300/40 backdrop-blur-sm" />

      <div className="relative bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/40">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
          Sign Up — Step {step} of 2
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {step === 1 && (
            <>
              {/* Name */}
              <div>
                <label className="text-black block text-sm font-semibold mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="text-black w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="text-black block text-sm font-semibold mb-1">Date of Birth</label>
                <input
                  type="date"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleChange}
                  className="text-black w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Gender */}
              <div>
                <label className="text-black block text-sm font-semibold mb-1">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="text-black w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">-- Select Gender --</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Height */}
              <div>
                <label className="text-black block text-sm font-semibold mb-1">Height (cm)</label>
                <input
                  type="number"
                  step="0.1"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  placeholder="170.5"
                  className="text-black w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Weight */}
              <div>
                <label className="text-black block text-sm font-semibold mb-1">Weight (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="65.2"
                  className="text-black w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <button
                type="button"
                onClick={nextStep}
                className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-lg shadow hover:opacity-90 transition"
              >
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              {/* Email */}
              <div>
                <label className="text-black block text-sm font-semibold mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="text-black w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-black block text-sm font-semibold mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="********"
                  className="text-black w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-black block text-sm font-semibold mb-1">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="********"
                  className="text-black w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="w-1/2 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow hover:bg-gray-400 transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-lg shadow hover:opacity-90 transition"
                >
                  Sign Up
                </button>
              </div>
            </>
          )}
        </form>

        {/* Link ke Sign In */}
        <p className="text-center text-sm text-gray-700 mt-6">
          Already have an account?{" "}
          <a href="/signin" className="text-red-600 font-semibold hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </main>
  );
}
