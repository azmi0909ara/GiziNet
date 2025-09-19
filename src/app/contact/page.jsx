"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header */}
      <section
        className="relative text-white py-20 pt-28 text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontak Kami</h1>
          <p className="max-w-2xl mx-auto text-lg text-orange-100">
            Hubungi tim Gizinet untuk pertanyaan, saran, atau kerjasama.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="flex-1 py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 max-w-5xl">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Informasi Kontak
            </h2>
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <FaMapMarkerAlt className="text-red-500 text-2xl" />
              <p className="text-gray-700">Jl. Sehat No. 123, Jakarta</p>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <FaEnvelope className="text-orange-500 text-2xl" />
              <p className="text-gray-700">support@gizinet.com</p>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
              <FaPhoneAlt className="text-yellow-500 text-2xl" />
              <p className="text-gray-700">+62 812-3456-7890</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow space-y-6"
          >
            <div>
              <label className="block text-left font-semibold mb-2 text-gray-800">
                Nama
              </label>
              <input
                type="text"
                placeholder="Masukkan nama Anda"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-left font-semibold mb-2 text-gray-800">
                Email
              </label>
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-left font-semibold mb-2 text-gray-800">
                Pesan
              </label>
              <textarea
                rows="4"
                placeholder="Tulis pesan Anda..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-lg font-semibold shadow hover:opacity-90 transition"
            >
              Kirim Pesan
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
