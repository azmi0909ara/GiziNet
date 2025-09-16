import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white py-20 pt-28 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Gizinet</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Kenali lebih dekat misi dan visi Gizinet dalam membantu masyarakat hidup sehat.
        </p>
      </section>

      {/* Content */}
      <section className="flex-1 py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Misi Kami</h2>
          <p className="mb-8 text-gray-700">
            Gizinet hadir untuk memberikan informasi nutrisi yang mudah diakses oleh siapa saja.
            Dengan teknologi analisis gambar dan database nutrisi, kami ingin membantu setiap
            pengguna memahami kandungan gizi dari makanan yang dikonsumsi.
          </p>

          <h2 className="text-2xl font-semibold text-red-600 mb-4">Visi Kami</h2>
          <p className="text-gray-700">
            Menjadi platform nutrisi terpercaya yang mampu mendukung gaya hidup sehat,
            dengan menyediakan data yang akurat, transparan, dan mudah digunakan oleh masyarakat luas.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
