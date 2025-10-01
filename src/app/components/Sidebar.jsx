"use client";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  filteredHistory,
  setSelectedHistory,
  searchHistory,
  setSearchHistory,
}) {
  return (
    <>
      {/* Overlay khusus mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 transition-opacity md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 min-h-screen w-64 bg-gradient-to-b from-red-600 to-orange-500 text-white p-6 flex flex-col justify-between shadow-lg z-30 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Bagian atas */}
        <div>
          <h2 className="text-2xl font-bold mb-6">🍎 Gizinet</h2>
          <nav className="flex flex-col gap-4">
            <a
              href="mainpage/profile"
              className="flex items-center gap-3 hover:bg-red-700 px-3 py-2 rounded-lg transition"
            >
              <span className="text-2xl">👤</span>
              <span>Profile</span>
            </a>

            <div>
              <h3 className="font-semibold mb-2">History Analysis</h3>
              <input
                type="text"
                placeholder="Cari history..."
                value={searchHistory}
                onChange={(e) => setSearchHistory(e.target.value)}
                className="w-full px-3 py-2 mb-3 rounded-md text-black text-sm focus:ring-2 focus:ring-orange-400"
              />
              <ul className="max-h-60 overflow-y-auto space-y-1">
                {filteredHistory.length > 0 ? (
                  filteredHistory.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => {
                        setSelectedHistory(item);
                        setSidebarOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-red-800 cursor-pointer text-sm rounded-md transition"
                    >
                      {item.name}{" "}
                      <span className="text-gray-300">({item.date})</span>
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-sm text-gray-300">
                    Tidak ditemukan
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>

        {/* Bagian bawah sidebar */}
        <div className="mt-6">
          <button className="w-full py-2 px-3 bg-red-700 rounded-lg hover:bg-red-800 transition text-sm">
            Keluar
          </button>
        </div>
      </aside>
    </>
  );
}
