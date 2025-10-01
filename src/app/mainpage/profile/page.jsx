"use client";

import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const profileData = user || {
    name: "-",
    date_of_birth: "-",
    gender: "-",
    height: "-",
    weight: "-",
    email: "-",
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* ✅ Sidebar tetap dipanggil dengan default props */}
      <Sidebar
        sidebarOpen={false}
        setSidebarOpen={() => {}}
        filteredHistory={[]}   // << aman, tidak error .length
        setSelectedHistory={() => {}}
        searchHistory=""
        setSearchHistory={() => {}}
      />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-red-600 mb-6">Profile</h1>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 max-w-2xl">
          <h2 className="text-xl font-semibold text-orange-600 mb-4">
            User Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">{profileData.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Date of Birth</p>
              <p className="font-medium">{profileData.date_of_birth}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Gender</p>
              <p className="font-medium">{profileData.gender}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Height (cm)</p>
              <p className="font-medium">{profileData.height}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Weight (kg)</p>
              <p className="font-medium">{profileData.weight}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{profileData.email}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
