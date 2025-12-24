'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/auth/login");
      return;
    }

    const storedName = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("verify_email");

    setUserName(storedName || "");
    setEmail(storedEmail || "");
  }, [router]);

  const handleLogout = () => {
    localStorage.clear();
    document.cookie = 'token=; path=/; max-age=0';
    router.replace("/auth/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Dashboard
        </h1>

        <div className="space-y-4">
          <div className="bg-gray-50 border rounded-lg p-4">
            <p className="text-sm text-gray-500">User Name</p>
            <p className="text-lg font-semibold text-gray-800">
              {userName}
            </p>
          </div>

          <div className="bg-gray-50 border rounded-lg p-4">
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg font-semibold text-gray-800">
              {email}
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
