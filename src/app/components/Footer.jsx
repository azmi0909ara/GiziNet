export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 py-6 mt-auto">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Gizinet. All rights reserved.</p>
      </div>
    </footer>
  );
}
