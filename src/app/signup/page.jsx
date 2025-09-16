"use client";

import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    date_of_birth: "",
    gender: "",
    height: "",
    weight: "",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi output JSON
    console.log("Raw JSON:", JSON.stringify(formData, null, 2));
    alert("Data berhasil dikirim! Cek console untuk JSON.");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-600 to-orange-500 px-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
          Sign Up to Gizinet
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="text-black block text-sm font-medium mb-1">Name</label>
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

          {/* Email */}
          <div>
            <label className="text-black block text-sm font-medium mb-1">Email</label>
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
            <label className="text-black block text-sm font-medium mb-1">Password</label>
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

          {/* Date of Birth */}
          <div>
            <label className="text-black block text-sm font-medium mb-1">Date of Birth</label>
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
            <label className="text-black block text-sm font-medium mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="text-black w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
              required
            >
              <option value="">-- Pilih Gender --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Height */}
          <div>
            <label className="text-black block text-sm font-medium mb-1">Height (cm)</label>
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
            <label className="text-black block text-sm font-medium mb-1">Weight (kg)</label>
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

          {/* Tombol Sign Up */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-lg shadow hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Link ke Sign In */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/signin" className="text-red-600 font-medium hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </main>
  );
}
