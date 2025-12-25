'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { t } from "@/app/i18n";

export default function Dashboard() {
  const router = useRouter();
  const { locale, toggleLocale } = useLanguage();

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
    <div className={`min-h-screen bg-gray-100 flex items-center justify-center px-4 ${locale === 'ar' ? 'rtl' : 'ltr'}`} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 flex-1 text-center">
            {t('dashboard.title', locale)}
          </h1>
          <button
            onClick={toggleLocale}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm font-medium transition"
          >
            {locale === 'en' ? t('common.switchToArabic', locale) : t('common.switchToEnglish', locale)}
          </button>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 border rounded-lg p-4">
            <p className="text-sm text-gray-500">{t('dashboard.userName', locale)}</p>
            <p className="text-lg font-semibold text-gray-800">
              {userName}
            </p>
          </div>

          <div className="bg-gray-50 border rounded-lg p-4">
            <p className="text-sm text-gray-500">{t('dashboard.email', locale)}</p>
            <p className="text-lg font-semibold text-gray-800">
              {email}
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
        >
          {t('dashboard.logout', locale)}
        </button>
      </div>
    </div>
  );
}
