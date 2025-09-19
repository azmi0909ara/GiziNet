"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function MainPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchHistory, setSearchHistory] = useState("");
  const [selectedHistory, setSelectedHistory] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Dummy data history
  const historyItems = [
    {
      id: 1,
      name: "Nasi Goreng",
      date: "2025-09-10",
      nutrition: { kalori: 350, protein: "8g", karbo: "45g", lemak: "12g" },
    },
    {
      id: 2,
      name: "Sate Ayam",
      date: "2025-09-12",
      nutrition: { kalori: 250, protein: "20g", karbo: "10g", lemak: "8g" },
    },
    {
      id: 3,
      name: "Salad Buah",
      date: "2025-09-15",
      nutrition: { kalori: 150, protein: "3g", karbo: "35g", lemak: "2g" },
    },
    {
      id: 4,
      name: "Rendang",
      date: "2025-09-16",
      nutrition: { kalori: 400, protein: "18g", karbo: "15g", lemak: "30g" },
    },
  ];

  const filteredHistory = historyItems.filter((item) =>
    item.name.toLowerCase().includes(searchHistory.toLowerCase())
  );

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
      setSelectedHistory(null);
    }
  };

  return (
    <main className="min-h-screen flex relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/bkg1.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Sidebar dipisah ke komponen */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        filteredHistory={filteredHistory}
        setSelectedHistory={setSelectedHistory}
        searchHistory={searchHistory}
        setSearchHistory={setSearchHistory}
      />

      {/* Content */}
      <section
        className={`flex-1 p-6 md:p-10 transition-all duration-300 text-white ${
          sidebarOpen ? "blur-sm md:blur-0" : ""
        }`}
      >
        {/* Tombol buka sidebar (mobile) */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden mb-4 px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
        >
          ☰ Menu
        </button>

        {/* Hero */}
        {!selectedHistory && !selectedImage && (
          <div className="bg-white/90 p-8 rounded-2xl shadow text-center mb-10 max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
              Selamat Datang di Gizinet
            </h1>
            <p className="text-gray-700">
              Upload atau scan makanan Anda untuk mengetahui kandungan nutrisinya!
            </p>
          </div>
        )}

        {/* Upload / Scan Gambar */}
        {!selectedHistory && (
          <div className="bg-white/90 p-8 rounded-2xl shadow text-center max-w-2xl mx-auto">
            <h2 className="text-black font-semibold text-2xl mb-4">
              Analisis Gambar Makanan
            </h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
              <label className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow cursor-pointer hover:bg-orange-600 transition">
                Upload Gambar
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>

            {selectedImage && (
              <div className="mt-4">
                <p className="mb-2 text-gray-700">Preview Gambar:</p>
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="mx-auto max-h-64 rounded-lg shadow"
                />
                <button className="mt-6 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-lg shadow hover:opacity-90 transition">
                  Analisis Sekarang
                </button>
              </div>
            )}
          </div>
        )}

        {/* Detail Nutrisi */}
        {selectedHistory && (
          <div className="bg-white/90 p-8 rounded-2xl shadow text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Detail Analisis: {selectedHistory.name}
            </h2>
            <p className="text-gray-700 mb-6">Tanggal: {selectedHistory.date}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {Object.entries(selectedHistory.nutrition).map(([key, val]) => (
                <div
                  key={key}
                  className="bg-orange-100 p-4 rounded-lg shadow text-black"
                >
                  <p className="font-semibold capitalize">{key}</p>
                  <p className="text-xl text-red-600">{val}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setSelectedHistory(null)}
              className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Kembali
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
