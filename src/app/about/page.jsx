"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
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
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Gizinet</h1>
          <p className="max-w-2xl mx-auto text-lg text-orange-100">
            Kenali lebih dekat misi dan visi Gizinet dalam membantu masyarakat hidup sehat.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="flex-1 py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 max-w-5xl">
          {/* Misi */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border-t-4 border-red-500"
          >
            <h2 className="text-2xl font-semibold text-red-600 mb-4">Misi Kami</h2>
            <p className="text-gray-700 leading-relaxed">
              Gizinet hadir untuk memberikan informasi nutrisi yang mudah diakses oleh siapa saja.
              Dengan teknologi analisis gambar dan database nutrisi, kami ingin membantu setiap
              pengguna memahami kandungan gizi dari makanan yang dikonsumsi.
            </p>
          </motion.div>

          {/* Visi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border-t-4 border-orange-500"
          >
            <h2 className="text-2xl font-semibold text-red-600 mb-4">Visi Kami</h2>
            <p className="text-gray-700 leading-relaxed">
              Menjadi platform nutrisi terpercaya yang mampu mendukung gaya hidup sehat,
              dengan menyediakan data yang akurat, transparan, dan mudah digunakan oleh masyarakat luas.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
