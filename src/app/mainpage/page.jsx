"use client";

import { useState } from "react";

export default function MainPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchHistory, setSearchHistory] = useState("");
  const [selectedHistory, setSelectedHistory] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Dummy data history + nutrisi
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

  // Filter berdasarkan search
  const filteredHistory = historyItems.filter((item) =>
    item.name.toLowerCase().includes(searchHistory.toLowerCase())
  );

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
      setSelectedHistory(null); // reset kalau upload/scan baru
    }
  };

  return (
    <main className="min-h-screen flex bg-gray-100 relative overflow-hidden">
      {/* Overlay (blur + gelap) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 transition-opacity"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-gradient-to-b from-red-600 to-orange-500 text-white p-6 flex flex-col gap-6 shadow-lg z-30 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <h2 className="text-2xl font-bold mb-6">Gizinet</h2>
        <nav className="flex flex-col gap-4">
          {/* Profile icon pakai emoji */}
          <a
            href="#"
            className="flex items-center gap-3 hover:bg-red-700 px-3 py-2 rounded-lg"
          >
            <span className="text-2xl">👤</span>
            <span>Profile</span>
          </a>

          {/* History tanpa dropdown */}
          <div>
            <h3 className="font-semibold mb-2">History Analysis</h3>
            <input
              type="text"
              placeholder="Cari history..."
              value={searchHistory}
              onChange={(e) => setSearchHistory(e.target.value)}
              className="w-full px-3 py-2 mb-3 rounded-md text-black text-sm focus:ring-2 focus:ring-orange-400"
            />
            <ul className="max-h-60 overflow-y-auto">
              {filteredHistory.length > 0 ? (
                filteredHistory.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => {
                      setSelectedHistory(item);
                      setSidebarOpen(false); // auto tutup sidebar di mobile
                    }}
                    className="px-4 py-2 hover:bg-red-800 cursor-pointer text-sm rounded-md"
                  >
                    {item.name}{" "}
                    <span className="text-gray-300">({item.date})</span>
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-sm text-gray-300">
                  Tidak ditemukan
                </li>
              )}
            </ul>
          </div>
        </nav>
      </aside>

      {/* Content */}
      <section
        className={`flex-1 p-6 md:p-10 transition-all duration-300 ${
          sidebarOpen ? "blur-sm md:blur-0" : ""
        }`}
      >
        {/* Tombol buka sidebar (mobile) */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden mb-4 px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700"
        >
          ☰ Menu
        </button>

        {/* Hero */}
        {!selectedHistory && !selectedImage && (
          <div className="bg-white p-8 rounded-2xl shadow text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
              Selamat Datang di Gizinet MainPage
            </h1>
            <p className="text-gray-600">
              Upload atau scan makanan Anda untuk mengetahui kandungan
              nutrisinya!
            </p>
          </div>
        )}

        {/* Upload / Scan Gambar */}
        {!selectedHistory && (
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <h2 className="text-black semi-bold text-2xl font-semibold mb-4">
              Analisis Gambar Makanan
            </h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
              {/* Upload dari file */}
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

        {/* Detail Nutrisi dari History */}
        {selectedHistory && (
          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Detail Analisis: {selectedHistory.name}
            </h2>
            <p className="text-gray-500 mb-6">Tanggal: {selectedHistory.date}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-orange-100 p-4 rounded-lg shadow">
                <p className="font-semibold">Kalori</p>
                <p className="text-xl text-red-600">
                  {selectedHistory.nutrition.kalori}
                </p>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg shadow">
                <p className="font-semibold">Protein</p>
                <p className="text-xl text-red-600">
                  {selectedHistory.nutrition.protein}
                </p>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg shadow">
                <p className="font-semibold">Karbo</p>
                <p className="text-xl text-red-600">
                  {selectedHistory.nutrition.karbo}
                </p>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg shadow">
                <p className="font-semibold">Lemak</p>
                <p className="text-xl text-red-600">
                  {selectedHistory.nutrition.lemak}
                </p>
              </div>
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
