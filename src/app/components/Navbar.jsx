export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-600">Gizinet</h1>

        {/* Menu */}
        <ul className="text-gray-700 flex gap-6 items-center">
          <li><a href="/" className="hover:text-red-500">Home</a></li>
          <li><a href="/services" className="hover:text-red-500">Services</a></li>
          <li><a href="/about" className="hover:text-red-500">About</a></li>
          <li><a href="/contact" className="hover:text-red-500">Contact</a></li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex gap-3">
          <a
            href="/signin"
            className="px-4 py-2 rounded-lg font-medium border border-red-500 text-red-600 hover:bg-red-50 transition"
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-red-600 to-orange-500 text-white shadow hover:opacity-90 transition"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
