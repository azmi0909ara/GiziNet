"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaAppleAlt, FaCameraRetro, FaHistory } from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      title: "Cek Informasi Nutrisi",
      desc: "Cari tahu kandungan kalori, vitamin, protein, dan nutrisi lainnya dari berbagai jenis makanan. Mudah digunakan untuk membantu memilih pola makan sehat.",
      icon: <FaAppleAlt className="text-red-500 text-5xl mb-4" />,
      border: "border-red-500",
    },
    {
      title: "Analisis Foto Makanan",
      desc: "Upload foto makanan Anda, sistem akan otomatis mendeteksi jenis makanan dan memberikan data kandungan nutrisinya.",
      icon: <FaCameraRetro className="text-orange-500 text-5xl mb-4" />,
      border: "border-orange-500",
    },
    {
      title: "Riwayat Konsumsi",
      desc: "Semua makanan yang pernah dianalisis akan tersimpan di database history, sehingga Anda bisa memantau pola makan harian maupun mingguan.",
      icon: <FaHistory className="text-yellow-500 text-5xl mb-4" />,
      border: "border-yellow-500",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header Section */}
      <section
        className="relative text-white py-20 pt-28 text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay gradasi */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Layanan Gizinet
          </h1>
          <p className="max-w-2xl mx-auto text-lg drop-shadow-md">
            Jelajahi fitur utama Gizinet yang membantu Anda memahami nutrisi dan
            menjaga pola makan sehat.
          </p>
        </motion.div>
      </section>

      {/* Services Detail */}
      <section className="flex-1 py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border-t-4 ${service.border} text-center`}
            >
              {service.icon}
              <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Mulai Analisis Makanan Anda Sekarang
        </h2>
        <p className="max-w-xl mx-auto mb-6 text-lg">
          Cukup foto makanan Anda dan biarkan Gizinet menghitung nutrisinya.
          Praktis, cepat, dan akurat.
        </p>
        <a
          href="/signup"
          className="px-8 py-3 rounded-full font-semibold bg-white text-red-600 shadow-lg hover:bg-gray-100 transition"
        >
          Coba Gratis
        </a>
      </section>

      <Footer />
    </main>
  );
}
