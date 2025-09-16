import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white py-20 pt-28 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Layanan Gizinet</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Jelajahi fitur utama Gizinet yang membantu Anda memahami nutrisi dan
          menjaga pola makan sehat.
        </p>
      </section>

      {/* Services Detail */}
      <section className="flex-1 py-16 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">

          {/* Informasi Nutrisi */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl border-t-4 border-red-500 transition">
            <h2 className="text-2xl font-semibold mb-3 text-orange-600">
              Cek Informasi Nutrisi
            </h2>
            <p>
              Cari tahu kandungan kalori, vitamin, protein, dan nutrisi lainnya dari
              berbagai jenis makanan. Mudah digunakan untuk membantu memilih pola
              makan sehat.
            </p>
          </div>

          {/* Analisis Foto Makanan */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl border-t-4 border-orange-500 transition">
            <h2 className="text-2xl font-semibold mb-3 text-red-600">
              Analisis Foto Makanan
            </h2>
            <p>
              Upload foto makanan Anda, sistem akan otomatis mendeteksi jenis makanan
              dan memberikan data kandungan nutrisinya.
            </p>
          </div>

          {/* Riwayat Konsumsi */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl border-t-4 border-yellow-500 transition">
            <h2 className="text-2xl font-semibold mb-3 text-orange-600">
              Riwayat Konsumsi
            </h2>
            <p>
              Semua makanan yang pernah dianalisis akan tersimpan di database history,
              sehingga Anda bisa memantau pola makan harian maupun mingguan.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
