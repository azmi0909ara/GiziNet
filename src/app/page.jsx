"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
        <section
      className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-28 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-lg text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Selamat Datang di <span className="text-yellow-300">Gizinet</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl drop-shadow">
          Bantu pantau kebutuhan gizi dan nutrisi Anda.  
          Cukup foto makanan, dapatkan informasi lengkap,  
          dan simpan riwayat konsumsi Anda.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="/signin"
            className="bg-red-600 hover:bg-red-800 px-6 py-3 rounded-full font-semibold shadow-lg text-white transition"
          >
            Mulai Sekarang
          </a>
          <a
            href="/about"
            className="bg-white text-red-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>
      </motion.div>

      {/* Right Content - Mockup */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mt-12 md:mt-0"
      >
        <img
          src="/GiziNet.png"
          alt="App Mockup"
          className="w-72 md:w-96 drop-shadow-2xl"
        />

        {/* Floating decorations */}
        <img
          src="/icon1.png"
          className="absolute top-5 -left-0 w-13 animate-bounce"
        />
        <img
          src="/icon2.png"
          className="absolute bottom-8 -right-7 w-15 animate-pulse"
        />
      </motion.div>
    </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-10 text-red-600">
            Layanan Kami
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-gray-700 bg-white p-6 rounded-xl shadow hover:shadow-xl border-t-4 border-red-500 transition"
            >
              <h4 className="text-xl font-semibold mb-3 text-orange-600">
                Cek Informasi Nutrisi
              </h4>
              <p>
                Ketahui kandungan gizi, vitamin, dan kalori dari berbagai jenis
                makanan dengan cepat dan mudah.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-gray-700 bg-white p-6 rounded-xl shadow hover:shadow-xl border-t-4 border-orange-500 transition"
            >
              <h4 className="text-xl font-semibold mb-3 text-red-600">
                Analisis Foto Makanan
              </h4>
              <p>
                Upload foto makanan Anda, sistem akan mendeteksi jenis makanan
                dan menampilkan kandungan nutrisinya.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-gray-700 bg-white p-6 rounded-xl shadow hover:shadow-xl border-t-4 border-yellow-500 transition"
            >
              <h4 className="text-xl font-semibold mb-3 text-orange-600">
                Riwayat Konsumsi
              </h4>
              <p>
                Semua data makanan yang pernah dianalisis tersimpan di database,
                sehingga Anda bisa memantau pola makan harian.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-16 bg-gradient-to-r from-orange-50 to-red-50"
      >
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h3 className="text-3xl font-bold mb-6 text-red-600">
            Tentang Gizinet
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Gizinet hadir untuk membantu masyarakat lebih sadar akan pentingnya
            gizi seimbang. Kami memadukan teknologi AI dan database nutrisi
            sehingga setiap orang dapat lebih mudah memahami kandungan makanan
            yang dikonsumsi setiap hari.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-4xl font-bold text-red-600">15K+</h4>
            <p className="text-gray-600">Makanan dianalisis</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-orange-500">8K+</h4>
            <p className="text-gray-600">Pengguna aktif</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-yellow-500">120K+</h4>
            <p className="text-gray-600">Data nutrisi tersimpan</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h3 className="text-3xl font-bold mb-10 text-red-600">
            Apa Kata Mereka
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow"
            >
              <p className="text-gray-700 italic">
                “Sangat membantu saya memantau kalori harian. Praktis tinggal
                foto makanan.”
              </p>
              <h5 className="mt-4 font-semibold text-red-600">— Andi, 27</h5>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow"
            >
              <p className="text-gray-700 italic">
                “Gizinet bikin saya lebih sadar pentingnya gizi untuk keluarga.
                Fiturnya gampang dipakai.”
              </p>
              <h5 className="mt-4 font-semibold text-orange-600">
                — Sinta, 32
              </h5>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
