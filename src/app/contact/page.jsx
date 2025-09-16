import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white py-20 pt-28 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontak Kami</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Hubungi tim Gizinet untuk pertanyaan, saran, atau kerjasama.
        </p>
      </section>

      {/* Contact Form */}
      <section className="flex-1 py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-lg">
          <form className="bg-white p-8 rounded-xl shadow space-y-6">
            <div>
              <label className="block text-left font-semibold mb-2">Nama</label>
              <input
                type="text"
                placeholder="Masukkan nama Anda"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-left font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-left font-semibold mb-2">Pesan</label>
              <textarea
                rows="4"
                placeholder="Tulis pesan Anda..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-lg font-semibold shadow hover:opacity-90 transition"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
