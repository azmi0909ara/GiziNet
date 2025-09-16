import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 flex items-center justify-center text-white text-center px-6 pt-24">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Selamat Datang di Gizinet
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto drop-shadow">
            Membantu kebutuhan gizi dan nutrisi, dan terpercaya untuk kebutuhan Anda.
          </p>
          <a
            href="#services"
            className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Jelajahi Layanan
          </a>
        </div>
      </section>

      {/* Services */}
<section id="services" className="py-16 bg-gray-50">
  <div className="container mx-auto px-6 text-center">
    <h3 className="text-3xl font-bold mb-10 text-red-600">Layanan Kami</h3>
    <div className="grid md:grid-cols-3 gap-8">
      
      {/* Informasi Nutrisi */}
      <div className="text-gray-700 bg-white p-6 rounded-xl shadow hover:shadow-xl border-t-4 border-red-500 transition">
        <h4 className="text-xl font-semibold mb-3 text-orange-600">Cek Informasi Nutrisi</h4>
        <p>
          Ketahui kandungan gizi, vitamin, dan kalori dari berbagai jenis makanan 
          dengan cepat dan mudah.
        </p>
      </div>

      {/* Analisis Foto Makanan */}
      <div className="text-gray-700 bg-white p-6 rounded-xl shadow hover:shadow-xl border-t-4 border-orange-500 transition">
        <h4 className="text-xl font-semibold mb-3 text-red-600">Analisis Foto Makanan</h4>
        <p>
          Upload foto makanan Anda, sistem akan mendeteksi jenis makanan 
          dan menampilkan kandungan nutrisinya.
        </p>
      </div>

      {/* Riwayat Konsumsi */}
      <div className="text-gray-700 bg-white p-6 rounded-xl shadow hover:shadow-xl border-t-4 border-yellow-500 transition">
        <h4 className="text-xl font-semibold mb-3 text-orange-600">Riwayat Konsumsi</h4>
        <p>
          Semua data makanan yang pernah dianalisis tersimpan di database, 
          sehingga Anda bisa memantau pola makan harian.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* About */}
      <section id="about" className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h3 className="text-3xl font-bold mb-6 text-red-600">Tentang Gizinet</h3>
          <p className="text-gray-700 leading-relaxed">
            Gizinet hadir sebagai penyedia layanan internet terpercaya dengan misi
            menghadirkan konektivitas tanpa batas. Kami berkomitmen memberikan
            kualitas layanan terbaik untuk individu, rumah tangga, maupun bisnis.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
